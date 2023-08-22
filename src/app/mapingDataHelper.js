
let url = {
    imgSrcUrlSmall: `https://image.tmdb.org/t/p/w154`,
    imgSrcUrlBig: `https://image.tmdb.org/t/p/w300`,
    imgSrcUrlFull: `https://image.tmdb.org/t/p/w780`,
    noImgSrcUrl: `https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png`
}

function getMoviePoster(data, imgSrcUrl){
    const imgUrl = data.poster_path;
    if (imgUrl) return url[imgSrcUrl] + imgUrl;
    return url.noImgSrcUrl;
}

function getMovieFullImg(data, imgSrcUrl){
    const imgUrl = data.backdrop_path;
    if (imgUrl) return url[imgSrcUrl] + imgUrl;
}

function getMovieYear(str){
    let date = new Date(str);
    return date.getFullYear();
}

const genres = [
    {"id": 28, "name": "Action"},
    {"id": 12, "name": "Adventure"},
    {"id": 16, "name": "Animation"},
    {"id": 35, "name": "Comedy"},
    {"id": 80, "name": "Crime"},
    {"id": 99, "name": "Documentary"},
    {"id": 18, "name": "Drama"},
    {"id": 10751, "name": "Family"},
    {"id": 14, "name": "Fantasy"},
    {"id": 36, "name": "History"},
    {"id": 27, "name": "Horror"},
    {"id": 10402, "name": "Music"},
    {"id": 9648, "name": "Mystery"},
    {"id": 10749, "name": "Romance"},
    {"id": 878, "name": "Science Fiction"},
    {"id": 10770, "name": "TV Movie"},
    {"id": 53, "name": "Thriller"},
    {"id": 10752, "name": "War"},
    {"id": 37, "name": "Western"}
]

function getGenres(arr){
    const genresArr =  arr.map((number) => {
        let genre = genres.find(item => item.id === number);
         if (genre) return genre.name;
    })

    return genresArr.join(", ")
}

function getMovieReleaseDate(srt){
    return srt.split("-").join("/");
}

export function mapMoviesData(arr){
    return arr.map(movie => {
        return {
            title: movie.title,
            imgSrc: getMoviePoster(movie,'imgSrcUrlSmall'),
            //releaseDate:  movie.release_date,
            releaseDate:  getMovieReleaseDate(movie.release_date),
            rate: movie.vote_average || 0,
            genres: getGenres(movie.genre_ids),
            overview: movie.overview,
            id: movie.id
        }
    })
}

export function mapMoviesFullData(movie){

        return {
            poster: getMoviePoster(movie,'imgSrcUrlBig'),
            fullImg: getMovieFullImg(movie, 'imgSrcUrlFull'),
            budget: movie.budget || "no info",
            genres: movie.genres,
            id: movie.id,
            language: movie.original_language,
            title: movie.title,
            overview: movie.overview,
            releaseDate: movie.release_date,
            year: getMovieYear(movie.release_date),
            runtime: movie.runtime || "no info",
            status: movie.status,
            tagline: movie.tagline,
            rate: movie.vote_average || 0,

            /*director: "" /*movies => credits, {id: ,
                                 casts: [{}, {}, {}],
                                 crew: [ {}, {},
                                         {
                                            name: "bcvb "
                                            jod: "director"
                                         }
                                        ]
                                }*/
        }
}
