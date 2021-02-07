window.addEventListener('DOMContentLoaded', (event) => {
//get the squares inside the board
let squares = document.getElementById('gameBoard');
    //Game board MODULE
const gameBoard = (()=> {
    const gameBoardArr = () => ["x", "0", "x", "x", "0"];
   // return {gameBoardArr};
    //can get the array index like this:
    //gameBoard.gameBoardArr()[i];
    const gameBoardDisplay = () => {
        const gameBoardHtml = document.getElementById("gameBoard");
        gameBoardHtml.textContent= gameBoard.gameBoardArr();
         
    };
    return {gameBoardDisplay,gameBoardArr};
    
})();
console.log (gameBoard.gameBoardArr());
//write the array into the gameBoard div in HTML
//gameBoard.gameBoardDisplay()
//Module to control the flow of the game
const gameFlow = (() => {
//something will come here 

})();
//Factory Function for players
const players = (name, mark) => {
    //check if it's working
    /*const trying = () => console.log("works");
    const tryHarder = () => trying();*/

    return {name, mark};
};
//create players X and 0 respectively
const playerOne = players("playerOne", "X");
const playerTwo= players("playerTwo", "0");

squares.addEventListener("click", function (e){
    e.target.textContent="X";
});



















});