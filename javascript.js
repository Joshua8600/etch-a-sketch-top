let gridContainer = document.querySelector(".grid-container");
let gridSquares
let randomSquares
let darkenedSquares


function defaultGrid() {
    for (let i = 1; i <= 256; i++) {
        let square = document.createElement("div");
        gridContainer.appendChild(square);
        square.classList.add("grid-square");
    }
    sketch();
}


function sketch() {
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.add("moved-into");
        });
    });
    //darkenSquare();
}


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
        square.addEventListener("mouseenter", assignRandomColor)
    })
    randomSquares = document.querySelectorAll(".random-color");
}


function assignRandomColor(event) {
    if (event.currentTarget.classList.contains("random-color")) {
        } else {
            event.currentTarget.classList.add("random-color");
            event.currentTarget.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
        }
}


function random256() {
    let rgb = Math.random() * 255;
    rgb = Math.floor(rgb);
    return rgb;
}


function darkenSquare() {
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.addEventListener("mouseenter", assignOpacity)
    })
    darkenedSquares = document.querySelectorAll(".darken");
}

function assignOpacity(event) {
    let opacity = event.currentTarget.style.opacity;
    opacity = +opacity;
    if (opacity >= 1) {
    } else {
        opacity += 0.1;
        event.currentTarget.style.opacity = opacity;
        event.currentTarget.classList.add("darken");
    }
}


function removeRandomColor() {
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.removeEventListener("mouseenter", assignRandomColor)
    })
    randomSquares = document.querySelectorAll(".random-color");
}

function stopDarkening() {
    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.removeEventListener("mouseenter", assignOpacity)
    })
    darkenedSquares = document.querySelectorAll(".darken");
}


defaultGrid();

let newGridButton = document.querySelector(".new-grid-button");
let newGridValueCheck;
let newGridValue;
let randomColorToggle;
let darkenSquareToggle;
let randomColorFunction;

newGridButton.addEventListener("click", makeNewGrid);

randomColorToggle = document.querySelector("#color-toggle");
darkenSquareToggle = document.querySelector("#darken-toggle");

randomColorToggle.addEventListener("change", (e) => {
    if (e.currentTarget.checked == true) {
        randomColor();
    } else {
        removeRandomColor();
    }
})

darkenSquareToggle.addEventListener("change", (e) => {
    if (e.currentTarget.checked == true) {
        darkenSquare();
    } else {
        stopDarkening();
    }
})


//To-Do
//1. Keep color/opacity static after turning off the toggles (use classes)
//2. general styling of the page