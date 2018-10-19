import 'babel-polyfill';
import './../sass/styles.scss';

const colsInput = document.getElementById('cols');
const rowsInput = document.getElementById('rows');
const colorInput = document.getElementById('color');

const renderButton = document.getElementById('render-table');
const resetButton = document.getElementById('reset-table');
const resetColorButton = document.getElementById('reset-color-table');

const tableWrapper = document.getElementById('table');

const renderArtboard = () => {
    const getInputValue = input => {
        const maxValue = 50;
        const minValue = 10;
        if (input.value > maxValue) {
            input.value = maxValue;
        } else if (input.value < minValue) {
            input.value = minValue;
        }
        return input.value;
    };
    let rows = getInputValue(rowsInput);
    let columns = getInputValue(colsInput);

    let table = '';
    for (let rowsCounter = 0; rowsCounter < rows; rowsCounter++) {
        table += '<tr>';
        for (let columnsCounter = 0; columnsCounter < columns; columnsCounter++) {
            table += '<td></td>';
        }
        table += '</tr>';
    }
    tableWrapper.innerHTML = table;

    let tableCell = document.querySelectorAll('td');
    tableCell.forEach(cell => {
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = colorInput.value;
        });
    });
};
renderButton.addEventListener('click', renderArtboard);
renderArtboard();

const resetTable = () => {
    const resetToMinValue = elem => {
        elem.value = elem.getAttribute('min');
    };
    resetToMinValue(colsInput);
    resetToMinValue(rowsInput);
    renderArtboard();
};
resetButton.addEventListener('click', resetTable);

const resetColor = () => {
    let tableCell = document.querySelectorAll('td');
    tableCell.forEach(cell => {
        cell.style.backgroundColor = '';
    });
}
resetColorButton.addEventListener('click', resetColor);
