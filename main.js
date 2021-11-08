// seleziono i menu di apertura e chiusura
const menuOpen = document.querySelector(".header-right > a");
const menuClose = document.querySelector(".hamburger-menu> a");

// selezione il tag alla quale aggiungere la classe active
const hamburger = document.querySelector("div.hamburger-menu"); 

// controllo se il menu è cliccato per aprirlo
menuOpen.addEventListener('click', function(){
    hamburger.classList.add("active");
});

// controllo se il menu è cliccato per chiuderlo
menuClose.addEventListener('click', function(){
    hamburger.classList.remove("active");
});