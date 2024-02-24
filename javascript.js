
const container = document.querySelector('#container');
const reset = document.querySelector('button');
const rowInput = document.querySelector('#squareQty');
const body = document.querySelector('body');
const inputError = document.querySelector('#inputValue');
inputError.textContent = `Rows: ${rowInput.value}`;
document.addEventListener('DOMContentLoaded', () => {refresh(rowInput.value)});

reset.addEventListener('click', () => {resetGrid(rowInput.value)});
container.addEventListener('click', () => {resetGrid(rowInput.value)});

rowInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && rowInput.value !== '') {
        resetGrid();
    }
});
      
//Reset of grid//
function resetGrid() {
    outer: {
    const rowvalue = Number(rowInput.value);
    if (rowvalue > 100 || rowvalue < 10 || isNaN(rowvalue)) {
        inputError.textContent = 'Please enter a value between 10 and 100';
        break outer;
    } else {
        inputError.textContent = `Rows: ${rowInput.value}`;
    }

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    refresh(rowInput.value);
    rowInput.focus();
    }
}
// function for populating the number of squares
function refresh(squareQty) {
    for (let i = 0; i < squareQty; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (j = 0; j < (squareQty); j++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');  
            row.appendChild(square);
            square.addEventListener('mouseenter', function(e) {
                this.setAttribute('style',`background-color: ${randomColour()}`);
            });
        }
        container.appendChild(row);
   
    }
}
// colour change function
function randomColour() {
    function rand() {return Math.floor(Math.random() * 255)};
    return `rgb(${rand()} ${rand()} ${rand()})`;
}
