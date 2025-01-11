const animalsString= `[
    {
        "id":"1",
        "nev":"Sziszi",
        "faj":"Kígyó",
        "ar":"5000"
    },
    {
      "nev": "Csúszós",
      "faj": "Kígyó",
      "ar": "10000999",
      "id": "2"
    },
    {
      "nev": "Edgar Allen Pok",
      "faj": "Pók",
      "ar": "2000",
      "id": "3"
    },
    {
      "id": "4",
      "nev": "Höri",
      "faj": "Hörcsög",
      "ar": "20000"
    }
  ]`

function divFactory(tartalom, osztalyok){
    const elem = document.createElement("div")
    elem.innerHTML=tartalom
    elem.className=osztalyok
    return elem
}
  
console.log("Megvagyok!!!!")
console.log(JSON.parse(animalsString))

const stage={};
stage.animals=JSON.parse(animalsString)
stage.oszlopok=["nev","faj","ar"]

const kontener= divFactory("","container")
document.body.appendChild(kontener)

function render(){
    kontener.innerHTML=""
    // Fejléc elkészítése
    const sor= divFactory("","row fw-bold my-2")
    for (const oszlop of stage.oszlopok) {
        sor.appendChild(divFactory(oszlop,"col"))
    }
    sor.appendChild(divFactory("Műveletek","col"))
    kontener.appendChild(sor)
    // Fejléc készítés vége

    // Adatok kiíratása
    for (const animal of stage.animals) {  

        const sor= divFactory("","row my-2")
        for (const oszlop of stage.oszlopok) {
            sor.appendChild(divFactory(animal[oszlop],"col"))
        }
        const cella=divFactory("","col")

        const editBtn = document.createElement("button")
        editBtn.className="btn btn-primary"
        editBtn.innerHTML="Szerkeszt"
        editBtn.addEventListener("click", updateAnimal)
        cella.appendChild(editBtn)

        const delBtn = document.createElement("button")
        delBtn.className="btn btn-primary ms-1"
        delBtn.innerHTML="Töröl"
        delBtn.addEventListener("click", deleteAnimal)
        delBtn.dataset.id=animal.id
        cella.appendChild(delBtn)

        sor.appendChild(cella)
        kontener.appendChild(sor)

    }
    // Adat kiíratás vége
}

function updateAnimal(){
    console.log("update")
}

function deleteAnimal(){
    console.log("delete", this.dataset.id)
    stage.animals=stage.animals.filter(
        (allat)=>allat.id != this.dataset.id
    )
    render()
}

render()


// console.log(stage.animals[0])
// console.log(stage.animals[0].nev)
// console.log(stage.animals[0]["nev"])
