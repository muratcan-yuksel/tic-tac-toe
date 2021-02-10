//get the squares inside the board
let squares = document.getElementById('gameBoard');
//store the gameboard array inside of a gameboard object
const gameBoard = {
    //if I leave the array empty, the code won't work 
    //bcs the array index listener won't be finding anything
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
    let i = 0;
    squares.addEventListener("click", function (e){  
        //invoke the function that lets the players take turns
        gameFlow.turnerFunc();
            //make sure you're targeting the squares and not the whitespace in between them
            if (e.target.className ==="squares"){
                    //array elements are written in squares, the array index gets incremented
                    e.target.textContent= gameBoard.boardArr[i];
                    i++;
                    /*
                    check if the event is cancelable with the preventdefault
                    var x = e.cancelable;
                    console.log(x); YES IT IS 
                    */
            }
      
    
    })
    
})();
//variable to check the condition of turning rounds
let turn = true;
//Module to control the flow of the game
const gameFlow = (() => {
    //function that let the players take turns
    //start with player 2 bcs the array already contains a pregiven X
   const turnerFunc = () => {
        if(turn){
            playerOne.play();
        }else {
            playerTwo.play();
        }
        turn=!turn;
    }
        //return the function to use it in display controller
        return {turnerFunc};
})();


