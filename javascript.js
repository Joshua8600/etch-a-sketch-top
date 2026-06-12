let gridContainer = document.querySelector(".grid-container");
let gridSquares

function defaultGrid() {
    for (let i = 1; i <= 256; i++) {
        let square = document.createElement("div");
        gridContainer.appendChild(square);
        square.classList.add("grid-square");
        gridSquares = document.querySelectorAll(".grid-square");
        sketch();
    }
}

defaultGrid();

function sketch() {
    gridSquares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.add("moved-into");
        });
    });
}

let newGridButton = document.querySelector(".new-grid-button");
let newGridValueCheck;
let newGridValue;

newGridButton.addEventListener("click", makeNewGrid);

function newGridValuePrompt() {
    newGridValueEntry = prompt("Enter Size of Grid", 1);
    newGridValueCheck = +newGridValueEntry
    return newGridValueCheck;
}

function makeNewGrid() {
    newGridValuePrompt();
    if (newGridValueCheck >= 100) {
        newGridValue = 100;
    } else {
        newGridValue = newGridValueCheck;
    }
    deleteSquares();
    createGrid();
    sketch();
    setGridContainerSize();

}

function deleteSquares() {
    gridSquares.forEach((node) => {
        node.remove();
    })
}

function createGrid() {
    for (let i = 1; i <= (newGridValue ** 2); i++) {
        let square = document.createElement("div");
        gridContainer.appendChild(square);
        square.classList.add("grid-square");
        gridSquares = document.querySelectorAll(".grid-square");
    }
}

function setGridContainerSize() {
    if (newGridValue >= 16) {
        gridContainer.style.Width = "400px";
        gridContainer.style.Height = "400px";
    } else {
        gridContainer.style.width = `${newGridValue * 25}px`;
        gridContainer.style.height = `${newGridValue * 25}px`;
    }
}