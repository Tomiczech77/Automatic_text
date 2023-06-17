const heading = document.getElementById("text");
const speedOriginal = document.getElementById("speed");
const text = "Welcome to my website :-)";
let idLetter = 1;
let delay = 500 / speedOriginal.value;

function printText(){
    heading.innerText = text.slice(0, idLetter);

    idLetter++;

    // spustí funkci printText se zpožděním delay
    setTimeout(printText, delay);
}

printText();