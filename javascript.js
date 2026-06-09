let gridContainer = document.querySelector(".grid-container");
let gridSquares

function createGrid() {
    for (let i = 1; i <= 256; i++) {
        let square = document.createElement("div");
        gridContainer.appendChild(square);
        square.classList.add("grid-square");
        // square.style.width = "25px";
        // square.style.height = "25px";
        // square.style.borderStyle = "solid";
        // square.style.borderColor = "black";
    }
}

createGrid();

gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("moved-into");
    })
})