let gridContainer = document.querySelector(".grid-container");

function createGrid() {
    for (let i = 1; i <= 256; i++) {
        let square = document.createElement("div");
        gridContainer.appendChild(square);
        square.classList.add("grid-square");
    }
}

createGrid();

let gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("moved-into");
    });
});

let newGridButton = document.querySelector(".new-grid-button");
let newGridValueCheck;
let newGridValue;

newGridButton.addEventListener("click", makeNewGrid);

function newGridValuePrompt() {
    newGridValueEntry = prompt("Enter Size of Grid");
    newGridValueCheck = +newGridValueEntry
    return newGridValueCheck;
}

function makeNewGrid() {
    newGridValuePrompt();
    let sqrt = Math.sqrt(newGridValueCheck);
    if (newGridValueCheck >= 100) {
        newGridValue = 100;
    } else if (Number.isInteger(sqrt)) {
        if (newGridValueCheck < 4 ) {
            alert("Please enter a larger number.")
            makeNewGrid();
        } else {
            newGridValue = newGridValueCheck;
        }
    } else {
        alert("Please enter a value that is a perfect quare.");
        makeNewGrid();
    }
}