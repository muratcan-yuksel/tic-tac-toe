window.addEventListener('DOMContentLoaded', (event) => {
//get the squares inside the board
let squares = document.getElementById('gameBoard');
    //Game board MODULE
const gameBoard = (()=> {
    const gameBoardArr = () => [["x", "0", "x", "x", "0"], [],[]];
   // return {gameBoardArr};
    //can get the array index like this:
    //gameBoard.gameBoardArr()[i];
    const gameBoardDisplay = () => {
       // const gameBoardHtml = document.getElementById("gameBoard");
        gameBoardHtml.textContent= gameBoard.gameBoardArr();
         
    };
    return {gameBoardDisplay,gameBoardArr};
    
})();
console.log (gameBoard.gameBoardArr());
//write the array into the gameBoard div in HTML
//gameBoard.gameBoardDisplay()
//displays the given array index
//console.log(gameBoard.gameBoardArr()[0][2]);

//Module to control the flow of the game
const gameFlow = (() => {
//something will come here 

})();
//Factory Function for players
const players = (name, mark) => {
    //check if it's working
    /*const trying = () => console.log("works");
    const tryHarder = () => trying();*/
    
    //this event listener lets the players to mark with their names with player.play() function
    //thanks to textcontent= mark
    const play = () => squares.addEventListener("click", function (e){
    e.target.textContent=mark;
});

    return {name, mark, play};
};
//create players X and 0 respectively
const playerOne = players("playerOne", "X");
const playerTwo= players("playerTwo", "0");
playerOne.play();




















});