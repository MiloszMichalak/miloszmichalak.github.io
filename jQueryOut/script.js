function createBoard(boardSize) {
    const $board = $('#game-board');
    for (let i = 0; i < boardSize * boardSize; i++) {
        let $light = $('<div class="light"></div>');
        $light.attr('id', i);
        $board.append($light);
    }
}

function create2DArray(boardSize){
    let array = [];
    for (let i = 0; i < boardSize; i++) {
        array.push(new Array(boardSize).fill(0));
    }
    return array;
}

function toggleLight(index, row, col){
    $("#" + index).toggleClass("lightOn");
    fieldArray[row][col] = fieldArray[row][col] === 0 ? 1 : 0;
}

function checkIfAll2DArrayHasOne(array){
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] !== 1){
                return false;
            } 
        }
    }
    return true;
}

function selectNeighbor(index, row, col){
    if (col > 0) toggleLight(index - 1, row, col - 1);

    if (col < boardSize - 1) toggleLight(index + 1, row, col + 1);

    if (row > 0) toggleLight(index - boardSize, row - 1, col);

    if (row < boardSize - 1) toggleLight(index + boardSize, row + 1, col)

    toggleLight(index);
}

function randomClickOnStart() {
    const randomIndex = Math.floor(Math.random() * (boardSize * boardSize));
    const row = Math.floor(randomIndex / boardSize);
    const col = randomIndex % boardSize;

    selectNeighbor(randomIndex, row, col);
}

function updateTime(){
    let minutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;
    
    formattedText = (minutes < 10 ? "0" : "") + minutes + ":" + (displaySeconds < 10 ? "0" : "") + displaySeconds;
    $("#czas").text("Upłyneło: " + formattedText);
    
    seconds++;
}

function startTimer(){
    if (!gameStarted){
        gameStarted = true;
        interval = setInterval(updateTime, 1000);
    }
}

let formattedText;

let seconds = 1;

const boardSize = 5;

let fieldArray = create2DArray(boardSize);

let timeClicked = 0;

let gameStarted = false;

let interval;

$(document).on("click", ".light", function(){
    startTimer();
    
    let index = parseInt($(this).attr("id"))
    let row = Math.floor(index / boardSize) ;
    let col = index % boardSize;

    timeClicked += 1;
    $("#timeClicked").text("Klikniete " + timeClicked + " razy");
    
    if(checkIfAll2DArrayHasOne(fieldArray)){
        $("#game-board").css("pointer-events", "none");
        $("#youWon").text("Wygrałeś używając: " + timeClicked + " kliknięć." + "<br> Z czasem: " + formattedText);
    }
    
    selectNeighbor(index, row, col);
});

$("#reset").on("click", function (){
    fieldArray = create2DArray(boardSize);
    
    $(".light").removeClass("lightOn");

    seconds = 0;
    gameStarted = false;
    clearInterval(interval);
    $("#czas").text("Upłyneło: 00:00");
    $("#timeClicked").text("Klikniete 0 razy");
    timeClicked = 0;
    
    randomClickOnStart();
})

createBoard(boardSize);

randomClickOnStart()