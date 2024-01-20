// DA CORREZIONE TEACHER SUPER COPIA ED INCOLLA, CHE OVVIAMENTE NON SERVE A NULLA!!!

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
    })
    return cell;

//  DA SISTEMARE: CREARE NUMERI SULLE CELLE 
//  (E NON FUNZIONA IL TASTO PLAY)



// da esercitazione collettiva di classe (servita a nulla per me!)

function generateBombList(bombs, numberOfCell) {
    while (bombListi.lenght < bombs) {
    const randomInt = getRandomNumber(0, numberOfCell - 1);
    if (!bombList.includes(randomInt)) {
        bombList.push(randomInt);
    }}
    return bombList;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() + ((max + 1) - min) + min);
}}


// per generare bombe

const bombs = generateBombList(16, 100);


cell.addEventListener(`click`, function () {
    if (!bombs.includes(i)) {
        this.classList.add(`clicked`);
    } else {
        this.classList.add(`clicked-bomb`);
    }
});



// NON TROVO LA QUADRA PER FAR FUNZIONARE IL TUTTO 





// MEGLIO CHE DEDICHE DEL TEMPO AL RIPASSO DELLE BASI DI JS E ALLE FUNZIONI!!!