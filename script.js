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
    // Fejléc elkésíztése
    const sor= divFactory("","row fw-bold")
    for (const oszlop of stage.oszlopok) {
        sor.appendChild(divFactory(oszlop,"col"))
    }
    sor.appendChild(divFactory("Műveletek","col"))
    kontener.appendChild(sor)
    // Fejléc készítés vége
}

render()


// console.log(stage.animals[0])
// console.log(stage.animals[0].nev)
// console.log(stage.animals[0]["nev"])
