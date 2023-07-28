const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzVkNTQ3NDVhYWZkODA3NmRmYTg1OWM0OTY0YjE5NSIsInN1YiI6IjYzNDA0NTc3ZGRkNTJkMDA4OTcxMDhmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nb1qSe6sFSnTAZqmJV9qNqr6E7AL9CVmkmTNjqzg0Qs'
    }
};

export function getAllMovies(page){
    return fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
        .then(response => {
            if (response.ok) return response.json();
            else throw Error;
        })
}

export async function searchByTitle(title,page){
        console.log("title: " + title);
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=${page}`, options);
        if (response.ok) return response.json();
        else throw Error("search error nothing found");
}

export async function searchUseFilters(param,page){
    let str = `&sort_by=${param.sortBy}`
    if ( param.genres ) {
        let substr = "";
        param.genres.forEach((item) => substr = substr + "%2C" + item)
        str = str + "&with_genres=" + substr.substring(3);
    }
    if (param.keyword) {
        let key = param.keyword.id;
        console.log(key);
        str = str + `&with_keywords=${key}`
    }

    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&vote_count.gte=150${str}`, options)
    console.log(str);
    if (response.ok) return response.json();
    else throw Error;
}

export async function getKeywordForSearch1(keyword){

    let response = await fetch(`https://api.themoviedb.org/3/search/keyword?query=${keyword}&page=1`, options);
    if (response.ok) {
        return response.json();
    }
    else throw new Error("nothing found for this keyword") ;
}

export function getGenres(){
     return fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
        .then(response => response.json())
}

export async function getMovie(id){
    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
    if (response.ok) {
        return response.json();
    }
    else throw new Error("Nothing found") ;
}

export async function getMovieImg(id){
    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options)
    if (response.ok) {
        let imgArr = response.json();
        return imgArr.backdrops[0].file_path;
        //return response.json();
    }
    else throw new Error("No img") ;
}

