//Game board MODULE
const gameBoard = (()=> {
    const gameBoardArr = () => [1,2,3,4,"x"];
    return {gameBoardArr};
    //can get the array index like this:
    //gameBoard.gameBoardArr()[i];
})();
//Factory Function for players
const players = (name, mark) => {
    const trying = () => console.log("works");
    return {name, mark, trying};
};