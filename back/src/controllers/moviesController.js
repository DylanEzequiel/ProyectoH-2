const {getFilms, postMovie}= require("../services/moviesService.js")
const transporter = require("../config/mailer")

const getMovies = async (req,res) =>{
    try {
        const films = await getFilms()
        await res.status(200).json(films)
    } catch (error) {
        res.status(500).json(error.message)
    }
};

mailSender= async(gmail,title,year,director,duration,genre,rate,poster)=> {
    // send mail with defined transport object
  await transporter.sendMail({
      from: '"movies Service" <bdiddu.games@gmail.com>', // sender address
      to: `${gmail}`, // list of receivers
      subject: "Added Movie", // Subject line
      html: `
      <div style="border: 1px;
border: solid;
border-color: black;
border-radius: 5px;
margin: 10px;
padding: 5px;">
    <img src="${poster}" alt="poster Film">
    <div>
        <h3>title:${title} </h3>
        <hr>
        <p>
            <b>director: ${director}</b>
        </p>
        <hr>
        <p>year:${year}</p>
        <hr>
        <p>rate:${rate}</p>
        <hr>
        <p>genre:${genre}</p>
        <hr>
        <p>duration:${duration}</p>
    </div>

</div>`, // html body
    });
}

const postMovies= async (req,res) =>{
    try {
        //!obtengo y deconstruyo lo que obtengo desde el body
    const {gmail,title,year,director,duration,genre,rate,poster}=req.body;
    console.log(gmail)
    mailSender(gmail,title,year,director,duration,genre,rate,poster)

    const savedMovie= await postMovie({title,year,director,duration,genre,rate,poster});
    res.status(201).json(savedMovie)
    } catch (error) {
        res.status(500).json({message:`no se pudo crear. ${error.message}`})
    }
}


module.exports={getMovies, postMovies}