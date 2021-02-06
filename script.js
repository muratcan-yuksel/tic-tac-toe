//Game board MODULE
const gameBoard = (()=> {
    const gameBoardArr = () => ["x", "0", "x", "x", "0"];
    return {gameBoardArr};
    //can get the array index like this:
    //gameBoard.gameBoardArr()[i];
})();
//Module to control the flow of the game
const displayController = (() => {

    
})();
//Factory Function for players
const players = (name, mark) => {
    const trying = () => console.log("works");
    return {name, mark, trying};
};