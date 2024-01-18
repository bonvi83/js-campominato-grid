// DA ESERCIZIO DI QUESTA MATTINA SUPER COPIA ED INCOLLA, CHE OVVIAMENTE NON SERVE A NULLA

const gameboardElement = document.getElementById(`gameboard`);
const playButton = document.getElementById(`play`);
generateGrid(gameboardElement);


playButton.addEventListener(`click`, function (){
    generateGrid(gameboardElement);
});


function generateGrid(container) {
    container.innerHTML = ``;

    for (let i = 0; i < 100: i++) {
    }
}

function generateCell(index) {
    const cell = document.createElement(`div`);
    cell.clsddList.add(`box`);
    cell.setAttribute(`data-index`, index);

    cell.addEventListener(`click`, function () {
        const number =parseInt(this.getAttribute(`data-index`));



    }
    )
}