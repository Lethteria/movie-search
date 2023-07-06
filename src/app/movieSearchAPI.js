import {searchUseFiltersSlice} from "./reducers/searchUseFiltersSlice";

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

export function searchByTitle(title,page){
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=${page}`, options)
        .then(response => {
            if (response.ok) return response.json();
            else throw Error;
        })
}

export function searchUseFilters(data){
    return getKeywordForSearch(data.keyword)
        .then( key => {
            if ( key ) return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${data.page}&sort_by=vote_average.desc&vote_count.gte=150&with_keywords=${key}`, options)
            else throw Error;
        })
        .then(response => {
            if (response.ok) return response.json();
        })
        .catch(err => console.error("ccccc" + err.message))
    //return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=150&with_keywords=${key}`, options)
        //.then(response => {
            //if (response.ok) return response.json();
        //})
}

function getKeywordForSearch(title){
    return fetch(`https://api.themoviedb.org/3/search/keyword?query=${title}&page=1`, options)
        .then(response => response.json())
        .then(response => {
            let key = response.results.filter(item => item.name === title);
            //console.log(response.results);
            //console.log(key);
            if (key[0]) return key[0].id;
            else throw new Error("nothing found for this keyword") ;
            }
        )
        .catch(err => console.error(err));
}