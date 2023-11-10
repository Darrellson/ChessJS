const gameboard = document.querySelector(".board");   //გამოიყენება CSS სელექტორის შესარჩევად ასევე რომელიც მას ემთხვევა
const numbers = document.querySelector(".numbers");
const letters = document.querySelector(".letters");

let white = true;
let letter = "ABCDEFGH";

for (let i = 1; i <= 64; i++) {
    let square = document.createElement("div");   //გამოიყენება ახალი HTML ელემენტის შესაქმნელად
    square.classList.add("square");  //გამოიყენება HTML ელემენტის კლასის ატრიბუტში რამოდენიმე CSS კლასის დასამატებლად
    if (!white) {
        square.classList.add("black");
    }
    white = !white; //დადებითის და უარყოფითის აღმნიშვნელი
    if (i % 8 === 0) {
        white = !white;
    }

    let pieceIndex = Math.floor((i - 1) / 8);
    let piece = letter[pieceIndex];

    if (piece !== ' ') {
        let icon = document.createElement("div");
        icon.classList.add("piece");
        icon.textContent = piece;
        square.appendChild(icon);
    }

    gameboard.appendChild(square);  //უფლებას გვაძლევს დავამატოთ HTML ელემენტი როგორც შვილობილ ელემენტად 
}

for (let i = 1; i <= 8; i++) {
    let numberli = document.createElement("li");
    numberli.textContent = i;
    numbers.appendChild(numberli);
    let letterli = document.createElement("li");
    letterli.textContent = letter[i - 1]; 
    letters.appendChild(letterli);
}