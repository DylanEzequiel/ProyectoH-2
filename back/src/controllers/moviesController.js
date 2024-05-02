const {getFilms, postMovie}= require("../services/moviesService.js")


const getMovies = async (req,res) =>{
    try {
        const films = await getFilms()
        await res.status(200).json(films)
    } catch (error) {
        res.status(500).json(error.message)
    }
};

const postMovies= async (req,res) =>{
    try {
        //!obtengo y deconstruyo lo que obtengo desde el body
    const {title,year,director,duration,genre,rate,poster}=req.body;
    const savedMovie= await postMovie({title,year,director,duration,genre,rate,poster});
    res.status(201).json(savedMovie)
    } catch (error) {
        res.status(500).json({message:`no se pudo crear. ${error.message}`})
    }
}


module.exports={getMovies, postMovies}