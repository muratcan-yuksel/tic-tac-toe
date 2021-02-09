//get the squares inside the board
let squares = document.getElementById('gameBoard');
//store the gameboard array inside of a gameboard object
const gameBoard = {
    boardArr : ["X","X","O","X",]
    /* this one displays the last array element, which is X at the moment
    console.log(gameBoard.boardArr[gameBoard.boardArr.length -1]);
    */
}

//Factory Function for players
const players = (name, mark) => {  

    return {name, mark};
};
//create players X and 0 respectively
const playerOne = players("playerOne", "X");
const playerTwo= players("playerTwo", "O");

//display controller module
const displayController = (() => {
    //sth will come in here
})();
//Module to control the flow of the game
const gameFlow = (() => {
    
})();















