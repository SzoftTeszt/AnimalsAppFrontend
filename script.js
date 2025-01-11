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

    // Új adat felvitele
    {

        const sor= divFactory("","row my-2")
        for (const oszlop of stage.oszlopok) {
            // sor.appendChild(divFactory(animal[oszlop],"col"))
            const cella= divFactory("","col")
            const beMezo= document.createElement("input")
            beMezo.className="form-control"
          
            beMezo.id="new"+oszlop
            cella.appendChild(beMezo)
            sor.appendChild(cella)

        }
        const cella=divFactory("","col")

        const addBtn = document.createElement("button")
        addBtn.className="btn btn-primary"
        addBtn.innerHTML="Hozzáad"
        addBtn.addEventListener("click", addAnimal)
        cella.appendChild(addBtn)

        sor.appendChild(cella)
        kontener.appendChild(sor)
    }
    
    // Új adat vége

    // Adatok kiíratása
    for (const animal of stage.animals) {  

        const sor= divFactory("","row my-2")
        for (const oszlop of stage.oszlopok) {
            // sor.appendChild(divFactory(animal[oszlop],"col"))
            const cella= divFactory("","col")
            const beMezo= document.createElement("input")
            beMezo.className="form-control"
            beMezo.value=animal[oszlop]
            beMezo.id=animal.id+oszlop
            cella.appendChild(beMezo)
            sor.appendChild(cella)

        }
        const cella=divFactory("","col")

        const editBtn = document.createElement("button")
        editBtn.className="btn btn-primary"
        editBtn.innerHTML="Szerkeszt"
        editBtn.addEventListener("click", updateAnimal)
        editBtn.dataset.id=animal.id
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

function addAnimal(){
    console.log("add")
    const newAnimal={}

    for (const oszlop of stage.oszlopok) {
        const ertek= document.getElementById("new"+oszlop).value
        console.log(ertek)
        newAnimal[oszlop]=ertek
    }
    const max= Math.max(...stage.animals.map((allat)=>Number(allat.id)))
    newAnimal.id=max+1
    stage.animals.push(newAnimal)
    render()
    
    console.log("Maximum:",max)
    console.log(stage.animals)
}

function updateAnimal(){
    console.log("update",this.dataset.id)

    for (const oszlop of stage.oszlopok) {
        const ertek= document.getElementById(this.dataset.id+oszlop).value
        console.log(ertek)
        stage.animals[Number(this.dataset.id)-1][oszlop]=ertek
    }
    console.log(stage.animals)
}

//CRUD C-Create, R-Read, U-Update, D-Delete

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
