import Movie from '.././object/movie.js';


class MovieService {
    

    fetchMovie(){

        fetch("https://api.tvmaze.com/shows")
        .then((response)=>{
            return response.json()
        })
        .then((movieList)=>{
             const movies = movieList
             
            return  movies.map((movie)=>{
                  return new Movie(movie.id,movie.name,movie.image)
           
            })
        })
    }

}


export const movieService =  new MovieService()
