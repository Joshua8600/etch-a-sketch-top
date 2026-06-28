let gridContainer = document.querySelector(".grid-container");
let gridSquares
let randomSquares

function defaultGrid() {
    for (let i = 1; i <= 256; i++) {
        let square = document.createElement("div");
        gridContainer.appendChild(square);
        square.classList.add("grid-square");
        sketch();
    }
}

defaultGrid();

function sketch() {
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.add("moved-into");
        });
    });
    randomColor();
    //darkenSquare();
}

let newGridButton = document.querySelector(".new-grid-button");
let newGridValueCheck;
let newGridValue;

newGridButton.addEventListener("click", makeNewGrid);

function newGridValuePrompt() {
    newGridValueEntry = prompt("Enter Size of Grid (Max 100)", 16);
    newGridValueCheck = +newGridValueEntry;
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
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((node) => {
        node.remove();
    })
}

function createGrid() {
    for (let i = 1; i <= (newGridValue ** 2); i++) {
        let square = document.createElement("div");
        gridContainer.appendChild(square);
        square.classList.add("grid-square");
    }
}

function setGridContainerSize() {
    if (newGridValue >= 16) {
        gridContainer.style.width = "800px";
        gridContainer.style.height = "800px";
        changeSquareSize();
    } else {
        gridContainer.style.width = `${newGridValue * 50}px`;
        gridContainer.style.height = `${newGridValue * 50}px`;
    }
}

function changeSquareSize() {
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.style.width = `${800 / newGridValue}px`;
        square.style.height = `${800 / newGridValue}px`;
    })
}

function randomColor() {
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            if (square.classList.contains("random-color")) {
            } else {
                square.classList.add("random-color");
                square.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
            }
        })
    })
    randomSquares = document.querySelectorAll(".random-color");
}


function random256() {
    let rgb = Math.random() * 255;
    rgb = Math.floor(rgb);
    return rgb;
}

function randomRgbValue(square) {
}