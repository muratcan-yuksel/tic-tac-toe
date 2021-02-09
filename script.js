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
    //function to add player's own mark to the gameBoard.boardArr array
    const play=()=>{
        let gameBoardArr=gameBoard.boardArr;
        gameBoardArr.push(mark);
    }

    return {name, mark, play};
};
//create players X and 0 respectively
const playerOne = players("playerOne", "X");
const playerTwo= players("playerTwo", "O");


//display controller module
const displayController = (() => {
    //take the last item of the boardArr array and display it on the clicked square
    squares.addEventListener("click", function (e){
        if (e.target.className ==="squares"){
        e.target.textContent= gameBoard.boardArr[gameBoard.boardArr.length -1];
        }
    })
})();
//Module to control the flow of the game
const gameFlow = (() => {
    
})();














