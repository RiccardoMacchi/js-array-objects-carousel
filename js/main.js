// CAROSELLO IMMAGINI

const container = document.getElementById("container_carosel");
// Creazione arrey
const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    {    
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

// Stampa in pagina della img
images.forEach((element) => {
    let newDiv = document.createElement("div");
    let newWrapDiv = document.createElement("div")
    let newH3 = document.createElement("h3")
    let newP = document.createElement("p")
    // Stampa di immagine a ogni giro
    newDiv.innerHTML += `<img src="${element.image}" alt="${element.image}">`;
    newDiv.className = "box_carosel";
    newH3.append(`${element.title}`)
    newP.innerHTML += element.text
    newWrapDiv.append(newH3,newP);
    newDiv.append(newWrapDiv)
    container.append(newDiv)
})




// // Estrapolazione signole immagini tramite ciclo
// for (i = 0; i < imgArrey.length; i++){
//     itemImg = imgArrey[i];
//     // Creazione div contenitore diretto immagini

// }
// Carosello dx
const boxDx = document.getElementById("right_box")

images.forEach((element) => {
    let newDiv = document.createElement("div");
    // Stampa di immagine a ogni giro
    let immagineIesima = element.image
    newDiv.innerHTML += `<img src="${element.image}" alt="${element.image}">`;
    newDiv.className = "box_img_dx";
    boxDx.append(newDiv);
})
// for (i = 0; i < imgArrey.length; i++){
//     itemImg = imgArrey[i];
//     // Creazione div contenitore diretto immagini
//     let newDiv = document.createElement("div");
//     // Stampa di immagine a ogni giro
//     newDiv.innerHTML += `<img src="${itemImg}" alt="img${i}">`;
//     newDiv.className = "box_img_dx";
//     boxDx.append(newDiv);
// }

// Selezione di tutte le img all'interno del carosello
const itemsArrey = document.getElementsByClassName("box_carosel");
// Selezione di tutte le img all'interno del box dx
const itemsBoxDx = document.getElementsByClassName("box_img_dx")
console.log(itemsBoxDx[2])

// Prima immagine visibile
let activeItem = 0;
itemsArrey[activeItem].classList.add("active");
// Prima immagine oscuprata
itemsBoxDx[activeItem].classList.add("opacity")

// bottone click 
let btnCaroselNext = document.getElementById("my_btn_next");
btnCaroselNext.addEventListener("click",
    () => {
        if (activeItem < images.length -1){
            itemsBoxDx[activeItem].classList.remove("opacity")
            itemsArrey[activeItem].classList.remove("active")
            activeItem++;
            itemsArrey[activeItem].classList.add("active")
            itemsBoxDx[activeItem].classList.add("opacity")
        } else {
            // Carosello infinito
            itemsBoxDx[activeItem].classList.remove("opacity")
            itemsArrey[activeItem].classList.remove("active")
            activeItem = 0
            itemsArrey[activeItem].classList.add("active")
            itemsBoxDx[activeItem].classList.add("opacity")
        }
    }
)

// bottone click indietro
let btnCaroselPrev = document.getElementById("my_btn_prev");
btnCaroselPrev.addEventListener("click",
    () => {
        if (activeItem === 0){
            itemsBoxDx[activeItem].classList.remove("opacity")
            itemsArrey[activeItem].classList.remove("active")
            activeItem = images.length -1
            itemsArrey[activeItem].classList.add("active")
            itemsBoxDx[activeItem].classList.add("opacity")
        } else { 
            // Carosello infinito
            itemsBoxDx[activeItem].classList.remove("opacity")
            itemsArrey[activeItem].classList.remove("active")
            activeItem--;
            itemsArrey[activeItem].classList.add("active")
            itemsBoxDx[activeItem].classList.add("opacity")
        }
    }
)






