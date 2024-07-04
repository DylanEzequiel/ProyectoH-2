const axios =require("axios")


function validator (movie){
    let {gmail,title,year,director,duration,genre,rate,poster} = movie
    
    if(!gmail || !title || !year || !director || !duration || !genre || !rate || !poster){return "faltan datos"}
    if(year < 1845 ){return "no es demasiado antigua?"}
    if(isNaN(rate) || rate>10 || rate<0){return "rating debe ser ente 0 y 10"}
    if(!poster.includes("https://")){return "debe ser un link a img"}
    return null
}

function createMovie (){
    const gmail = document.getElementById("gmail").value
    const title = document.getElementById("title").value
    const year = document.getElementById("year").value
    const director = document.getElementById("director").value
    const duration = document.getElementById("duration").value
    const genre = document.getElementById("genre").value.split(" ")
    const rate = document.getElementById("rate").value
    const poster = document.getElementById("poster").value

    const movie ={gmail,title,year,director,duration,genre,rate,poster}
    let error=validator(movie);
    if(error){window.alert(error)}
    console.log(gmail)
    axios.post("http://localhost:3000/movies",movie)
    .then( ()=>{"pelicula creada"})
    .catch(({message})=>{alert(message)})
}


module.exports={createMovie}

