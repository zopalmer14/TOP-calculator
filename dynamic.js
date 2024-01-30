
// MATH FUNCTIONS

function add(operand_1, operand_2) {
    return operand_1 + operand_2;
}

function subtract(operand_1, operand_2) {
    return operand_1 - operand_2;
}

function multiply(operand_1, operand_2) {
    return operand_1 * operand_2;
}

function divide(operand_1, operand_2) {
    return operand_1 / operand_2;
}

function operate(operand_1, operand_2, operator) {
    switch (operator) {
        case '+':
            return add(operand_1, operand_2);
        case '-':
            return subtract(operand_1, operand_2);
        case '*':
            return multiply(operand_1, operand_2);
        case '/':
            return divide(operand_1, operand_2);
        default:
            return "invalid operator";
    }
}

// USEFUL DOM REFERENCES

const grid_container = document.querySelector('#grid_container');
const calc_display = document.querySelector('#calc_display');

// GRID CREATION

let columnStyle = `
    display: flex;
    flex-direction: column;
    margin: 0px 2px;
    flex: 1 1 0;
`;

let tileStyle = `
    background-color: white;
    color: black; 

    font-size: 10vh;
    font-weight: bold;
    margin: 2px 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
`;

const tile_contents = ['7', '4', '1', '0', '8', '5', '2', 'AC', '9', '6', '3', '=', '/', '*', '-', '+']; 

function createGrid(grid_dim) {
    for (let col = 0; col < grid_dim; col++) {
        // create a column flex-container for the tiles
        const column = document.createElement('div');
        column.style.cssText = columnStyle;
        grid_container.appendChild(column);

        // create tiles for each of the column containers
        for (let row = 0; row < grid_dim; row++) {
            // create a tile, assign the css styling, then append to the column
            const tile = document.createElement('div');
            tile.style.cssText = tileStyle;
            tile.textContent = tile_contents[col * grid_dim + row];
            column.appendChild(tile);

            // create an eventListener to change the color of the tile when moused-over 
            tile.addEventListener('click', function (e) {
                switch (e.target.textContent) {
                    case 'AC':
                        calc_display.textContent = '';
                        break;
                    case '=':
                        operate();
                        break;
                    default:
                        calc_display.textContent += e.target.textContent;
                }
            });
        }
    }
}

createGrid(4);