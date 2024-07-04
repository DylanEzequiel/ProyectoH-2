const  Movie = require("../models/movie")


module.exports={
  //obtengo las peliculas desde BDD
  getFilms: async()=>{
  const allMovies = await Movie.find()
  return allMovies},
    // guardo la movie desde js en BDD
  postMovie: async (movie)=>{
    const newMovie= new Movie(movie)
    const postedMovie= await newMovie.save()
    return postedMovie
  }
}
// Esto era lo que me faltaba para completar la cosa