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
console.log(gameBoard.gameBoardDisplay);
//Module to control the flow of the game
const displayController = (() => {


})();
//Factory Function for players
const players = (name, mark) => {
    const trying = () => console.log("works");
    return {name, mark, trying};
};
//create players X and 0 respectively
const playerOne = players("playerOne", "X");
const playerTwo= players("playerTwo", "0");
