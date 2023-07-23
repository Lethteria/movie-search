

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
        let key = await getKeywordForSearch(param.keyword);
        console.log(key);
        str = str + `&with_keywords=${key}`
    }

    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&vote_count.gte=150${str}`, options)

    if (response.ok) return response.json();
    else throw Error;
}

function getKeywordForSearch(title){
    return fetch(`https://api.themoviedb.org/3/search/keyword?query=${title}&page=1`, options)
        .then(response => response.json())
        .then(response => {
            let key = response.results.filter(item => item.name === title);
            console.log(response.results)
            if (key[0]) {
                return key[0].id;
            }
            //else throw new Error("nothing found for this keyword") ;
            }
        )
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

