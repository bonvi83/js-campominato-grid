// DA ESERCIZIO DI QUESTA MATTINA SUPER COPIA ED INCOLLA, CHE OVVIAMENTE NON SERVE A NULLA

const gameboardElement = document.getElementById(`gameboard`);
const playButton = document.getElementById(`play`);
generateGrid(gameboardElement);


playButton.addEventListener(`click`, function () {
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



//  CREARE NUMERI SULLE CELLE (E NON FUNZIONA IL TASTO PLAY)


function generateBombList(bombs, numberOfCell) {
    white (bombListi.lenght < bombs) {
    const randomInt = getRandomNumber(0, numberOfCell - 1);
    if (!bombList.includes(randomInt)) {
        bombList.push(randomInt);
    }}
    return bombList;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() + ((max + 1) - min) + min);
}