const heading = document.getElementById("text");
const speedOriginal = document.getElementById("speed");
const text = "Welcome to my website :-)";
let idLetter = 1;
let delay = 500 / speedOriginal.value;

function printText(){
    heading.innerText = text.slice(0, idLetter);

    // zvýší idletter vždy o 1
    idLetter++;

    // vyresetuje idletter zpět na 1 a text se začne vypisovat znovu
    if(idLetter > text.length){
        idLetter = 1;
    }

    // spustí funkci printText se zpožděním delay
    setTimeout(printText, delay);
}

printText();

speedOriginal.addEventListener("input", function(event) {
    delay = 500 / event.target.value;
});