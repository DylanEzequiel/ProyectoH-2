//crea el resumen

class Resume {
    constructor({relation,descr})
        {this.relation=relation;
        this.descr=descr;}
}

//crea la lista de Descripciones
class Descriptions {
    constructor(){
        this.resumes=[];
    }
    getResumes(){
        return this.resumes
    }
    createResume(resum){
        let resumen= new Resume (resum)
        this.resumes.push(resumen)
    }
}

let resumenes = new Descriptions();




//crea html según objetos
function crea({relation,descr}){
    const card=document.createElement("div");
    card.classList="card row a ";
    card.innerHTML=`
    <div class="card-body">
      <h5 class="card-title">${relation} dice:</h5>
      <p class="card-text">${descr}</p>
    </div>`
    return card
}

//mapea para crear los html

function creaCont(){
    const cont = document.getElementById("contCards")
    cont.innerHTML=" "
    let lista= resumenes.getResumes()
    let cardsHtml= lista.map((resumen)=>crea(resumen))
    cardsHtml.forEach((sasa)=>cont.appendChild(sasa))
}

const submit=document.querySelector("#submitBtn")

submit.addEventListener("click", function handler(event){
    //no permito que recarge la pag
    event.preventDefault();
    //obtengo los valores de los imputs
    let relation= document.getElementById("amig").value
    let descr= document.getElementById("desc").value
    //creo el obj descripcion 
    let desc={relation,
        descr}
    //verifico que la data este completa
    if (!relation || !descr) {
        alert("Falta información")
        return
    }
    //creo las actividades
    resumenes.createResume(desc)
    creaCont(crea(desc))

    relation.innerHTML=" ";
    descr.innerHTML=" ";
})