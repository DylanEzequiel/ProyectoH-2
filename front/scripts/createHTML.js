//defino contenedor general
const general=document.getElementById("general")

function createHTML(obj){

        //deconstruyo el objeto
        let {title,year,director,duration,genre,rate,poster}=obj
        //creo elementos
        const cont=document.createElement("div")
        cont.innerHTML=`
        <img src="${poster}" class="card-img-top" alt="poster film">
        <div class="card-body">
          <h5 class="card-title"><a>${title}</a></h5>
          <b>director: ${director} <hr>
             year: ${year}  <hr>
             duration: ${duration} <hr>
             genre/s: ${genre} <hr>
             calification: ${rate}</b>
        </div>`

        //doy clase al contenedor
        cont.className="card m-3 cardFilm "
        //inserto el contenedor al contenedor general 
        general?.appendChild(cont)
}

module.exports=createHTML

