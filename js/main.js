// DA ESERCIZIO DI QUESTA MATTINA SUPER COPIA ED INCOLLA, CHE OVVIAMENTE NON SERVE A NULLA

const gameboardElement = document.getElementById(`gameboard`);
const playButton = document.getElementById(`play`);
generateGrid(gameboardElement);


playButton.addEventListener(`click`, function (){
    generateGrid(gameboardElement);
});


function generateGrid(container) {
    container.innerHTML = ``;

    for (let i = 0; i < 100; i++) {
        const cellElement = generateCell();
        container.append(cellElement);
    }
}

function generateCell() {
    const cell = document.createElement(`div`);

    cell.classList.add(`box`);
    cell.addEventListener(`click`, function () {
        this.classList.toggle(`toggle`);
    });
    return cell;
}



// E PER FARLO CONTARE CHE SI FA?