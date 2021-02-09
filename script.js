//get the squares inside the board
let squares = document.getElementById('gameBoard');
//store the gameboard array inside of a gameboard object
const gameBoard = {
    boardArr : []
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
            //if the array is empty, mark X (the first player)
            if (gameBoard.boardArr[gameBoard.boardArr.length -1] === undefined){
                e.target.textContent= "X";
            }else{
                //if there's something in the array, get the last one and write it into the square
                e.target.textContent= gameBoard.boardArr[gameBoard.boardArr.length -1];
            }
        }
        //invoke the function that let the players take turns
      gameFlow.turnerFunc();
    })
})();
//variable to check the condition of turning rounds
let turn = true;
//Module to control the flow of the game
const gameFlow = (() => {
    //function that let the players take turns
    //starts with playerTwo
    //because if not, there will be two subsequent X's
    //see displayController function for why
   const turnerFunc = () => {
    if(turn){
        playerTwo.play();
    }else {
        playerOne.play();
    }
    turn=!turn;
   }
   //return to function to use it in display controller
   return {turnerFunc};
})();







/*
 //make sure the first mark is X
    if (typeof )
    const firstMark = (function() {
        let executed = false;
        return function() {
            if (!executed) {
                executed = true;
                // do something
            }
        };
    })();

*/







