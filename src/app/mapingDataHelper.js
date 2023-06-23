
let url = {
    //searchMovieUrl: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`,
    imgSrcUrl: `https://image.tmdb.org/t/p/w154`,//`https://www.themoviedb.org/t/p/w300_and_h450_bestv2`,
    noImgSrcUrl: `https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png`
}

function getMovieImg(data){
    const imgUrl = data.poster_path || data.backdrop_path;
    if (imgUrl) return url.imgSrcUrl + imgUrl;
    return url.noImgSrcUrl;
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

export function mapMoviesData(arr){
    return arr.map(movie => {
        return {
            title: movie.title, //|| movie.original_name
            img: getMovieImg(movie),
            date:  movie.release_date,// || movie.first_air_date
            rate: movie.vote_average || 0,
            genres: getGenres(movie.genre_ids),
            //country: movie.origin_country,
            //language: movie.original_language,
            //overview: movie.overview,
            id: movie.id
        }
    })
}
