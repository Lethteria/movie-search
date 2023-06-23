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
        })
}

export function searchMovies(title){
    return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=vote_average.desc&vote_count.gte=100&with_keywords=3133`, options)
        .then(response => {
            if (response.ok) return response.json();
        })
}