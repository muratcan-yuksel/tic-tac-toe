//get the squares inside the board
let squares = document.getElementById('gameBoard');
//store the gameboard array inside of a gameboard object
const gameBoard = {
    boardArr : ["X"]
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
        if (e.target.className ==="squares"){
                e.target.textContent= gameBoard.boardArr[i];
                i++;
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
   const turnerFunc = () => {
    if(turn){
        playerOne.play();
    }else {
        playerTwo.play();
    }
    turn=!turn;
   }

   
   //return to function to use it in display controller
   return {turnerFunc};
})();



/*

//display controller module
const displayController = (() => {
    //create a reusable No operation function
//this function does nothing
let noop = () => {};
//create the function that'll take the unnecessary X from the array
let foo = () => {
    //swap the functions
    foo=noop;
    gameBoard.boardArr.pop();
   console.log("yoyo");
}
    //take the last item of the boardArr array and display it on the clicked square
    squares.addEventListener("click", function (e){  
        if (e.target.className ==="squares"){
                e.target.textContent= gameBoard.boardArr[gameBoard.boardArr.length -1];
                foo();     
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
   const turnerFunc = () => {
    if(turn){
        playerOne.play();
    }else {
        playerTwo.play();
    }
    turn=!turn;
   }

   
   //return to function to use it in display controller
   return {turnerFunc};
})();

*/

/*
//create a reusable No operation function
//this function does nothing
let noop = () => {};
//create the function that'll take the unnecessary X from the array
let foo = () => {
    //swap the functions
    foo=noop;
    gameBoard.boardArr.pop();
}
*/

/*
 //if the array is empty, mark X (the first player)
            if (gameBoard.boardArr[gameBoard.boardArr.length -1] === undefined){
                e.target.textContent= "X";
            }
            */


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







