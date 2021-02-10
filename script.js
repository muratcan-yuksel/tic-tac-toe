//get the squares inside the board
let squares = document.getElementById('gameBoard');
//store the gameboard array inside of a gameboard object
const gameBoard = {
    boardArr : []
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
const finishGame = (()=> {
    let squareOneText= document.getElementById("one").textContent;
    const alert = () => {
       if (gameBoard.boardArr.length===9){
           console.log("yess");
       }
    }
    return {alert}
})();
//module that returns the factory function that takes the user input manually and marks the board
const markBoard= (()=>{
    const manualMark = () => {
        let i = 0;
        squares.addEventListener("click", function (e){  
            
                //make sure you're targeting the squares and not the whitespace in between them
                if (e.target.className ==="squares"){
                        //logic that keeps players from playing in spots that are already taken
                    if (e.target.textContent=="X" || e.target.textContent=="O"){
                        return;
                    }else{
                        //invoke the function that lets the players take turns
                        //this is here bcs if not whenever I push an occupied place, the array gets pushed nevertheless
                        gameFlow.turnerFunc();
                        //array elements are written in squares
                        e.target.textContent= gameBoard.boardArr[i];
                        //the array index gets incremented
                        i++;
                        /*
                        check if the event is cancelable with the preventdefault
                        var x = e.cancelable;
                        console.log(x); YES IT IS 
                        */
    
                    }
                       
                }
          
                finishGame.alert();
        })


    }
    return {manualMark}
})();



//display controller module
const displayController = (() => {
    //call the module that returns the factory function that takes the user input manually and marks the board
    markBoard.manualMark();
    finishGame.alert();
    finishGame.alert();
 })();