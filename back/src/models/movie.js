const mongoose = require("mongoose")

const movieScheme = new mongoose.Schema({
    title:{type:String,required:true},
    year:{type:Number,required:true},  
    director:{type:String,required:true},
    duration:String,
    genre:[String], //asi se define que es un array con strings
    rate:{type:Number,
        min:[1,"valor menor al requerido: {VALUE}"],
        max:[10,"valor mayor al requerido {VALUE}"]},
    poster:String
});
const Movie = mongoose.model('movies', movieScheme)
module.exports=Movie