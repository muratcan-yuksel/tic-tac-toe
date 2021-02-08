//window.addEventListener('DOMContentLoaded', (event) => {
//get the squares inside the board
let squares = document.getElementById('gameBoard');
    //Game board MODULE
const gameBoard = {
    boardArr : []
}
//Factory Function for players
const players = (name, mark) => {  
    //this event listener lets the players to mark with their names with player.play() function
    //thanks to textcontent= mark
    const play = () => squares.addEventListener("click", function (e){
    e.target.textContent=mark;
    //push the last mark into the array in the game board
    gameBoard.boardArr.push(mark);
    //log it
    console.log(gameBoard.boardArr);
    console.log(gameBoard.boardArr[gameBoard.boardArr.length -1]==="O");
    if (gameBoard.boardArr[gameBoard.boardArr.length -1]==="O"){
        return playerOne.play();
    } else if (gameBoard.boardArr[gameBoard.boardArr.length -1]==="X"){
        return playerTwo.play();
    }
  
});

    return {name, mark, play};
};
//create players X and 0 respectively
const playerOne = players("playerOne", "X");
const playerTwo= players("playerTwo", "O");


//Module to control the flow of the game
const gameFlow = (() => {
    playerOne.play();
     
    
})();
















//});