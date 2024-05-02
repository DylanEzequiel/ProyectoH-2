//obtengo la funcion createHTML y el create movie
const createHTML = require("./createHTML");
const {createMovie}=require("../otrasPags/formMovies/scripts/getValues.js")
//obtengo axios
const axios =require("axios")

//creo funcion getFilms
const getFilms = async function(){
    //intenta obtener la url
    try{
        const api = await axios.get("http://localhost:3000/movies");
        //si sale bien obtene la url y mapea los elementos de ahi 
        await api.data.map((peli)=>{createHTML(peli)});
        //loguea en la consola el status (como guia para saber que fallo)
        await console.log(api.status)
    }
    //si sale mal
    catch(error){
        //pone una alerta en la ventana para saber el error
        window.alert(`No se ah podido cargar el contenido ${error.message}`)
    }
    

}


document.addEventListener("DOMContentLoaded",()=>{
    getFilms();
    const submit = document.getElementById("submit")
    submit?.addEventListener("click",(event)=>{
    console.log("click");    
    event.preventDefault();
    createMovie();
})
})

const cleaner = document.getElementById("cleaner")

const form = document.getElementById("form")
cleaner?.addEventListener("click",(event)=>{
    console.log("click");
    event.preventDefault()
    form.reset()}
);