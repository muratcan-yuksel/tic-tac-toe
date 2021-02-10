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
                 
              
        })


    }
    return {manualMark}
})();



//display controller module
const displayController = (() => {
    //call the module that returns the factory function that takes the user input manually and marks the board
    markBoard.manualMark();
  
 })();


 const gameResult = (()=>{
     //Check all the possible winning combinations, and do something with it
        const checkResult = () =>{
            if (document.getElementById("one").textContent == "X" && document.getElementById("two").textContent == "X" && document.getElementById("three").textContent=="X"){
                console.log("Player X Wins!");    
                squares.addEventListener("click", function (e){
                    if (e.target.className ==="squares"){
                        if (e.target.textContent!=="X" || e.target.textContent!=="O"){
                            e.target.textContent="";
                        }
                    }
                })          
                }else if (document.getElementById("four").textContent == "X" && document.getElementById("five").textContent == "X" && document.getElementById("six").textContent=="X"){
                    console.log("Player X Wins!");
                }else if (document.getElementById("seven").textContent == "X" && document.getElementById("eight").textContent == "X" && document.getElementById("nine").textContent=="X"){
                    console.log("Player X Wins!");
                }else if (document.getElementById("one").textContent == "X" && document.getElementById("four").textContent == "X" && document.getElementById("seven").textContent=="X"){
                    console.log("Player X Wins!");
                }else if (document.getElementById("two").textContent == "X" && document.getElementById("five").textContent == "X" && document.getElementById("eight").textContent=="X"){
                    console.log("Player X Wins!");
                }else if (document.getElementById("three").textContent == "X" && document.getElementById("six").textContent == "X" && document.getElementById("nine").textContent=="X"){
                    console.log("Player X Wins!");
                }else if (document.getElementById("one").textContent == "X" && document.getElementById("five").textContent == "X" && document.getElementById("nine").textContent=="X"){
                    console.log("Player X Wins!");
                }else if (document.getElementById("three").textContent == "X" && document.getElementById("five").textContent == "X" && document.getElementById("seven").textContent=="X"){
                    console.log("Player X Wins!");
            }//Player O's turn
                    else  if (document.getElementById("one").textContent == "O" && document.getElementById("two").textContent == "O" && document.getElementById("three").textContent=="O"){
                        console.log("Player O Wins!");
                    }else if (document.getElementById("four").textContent == "O" && document.getElementById("five").textContent == "O" && document.getElementById("six").textContent=="O"){
                        console.log("Player O Wins!");
                    }else if (document.getElementById("seven").textContent == "O" && document.getElementById("eight").textContent == "O" && document.getElementById("nine").textContent=="O"){
                        console.log("Player O Wins!");
                    }else if (document.getElementById("one").textContent == "O" && document.getElementById("four").textContent == "O" && document.getElementById("seven").textContent=="O"){
                        console.log("Player O Wins!");
                    }else if (document.getElementById("two").textContent == "O" && document.getElementById("five").textContent == "O" && document.getElementById("eight").textContent=="O"){
                        console.log("Player O Wins!");
                    }else if (document.getElementById("three").textContent == "O" && document.getElementById("six").textContent == "O" && document.getElementById("nine").textContent=="O"){
                        console.log("Player O Wins!");
                    }else if (document.getElementById("one").textContent == "O" && document.getElementById("five").textContent == "O" && document.getElementById("nine").textContent=="O"){
                        console.log("Player O Wins!");
                    }else if (document.getElementById("three").textContent == "O" && document.getElementById("five").textContent == "O" && document.getElementById("seven").textContent=="O"){
                        console.log("Player O Wins!");
                    }

        }
        return {checkResult}
     }
     )();

     function controlGame(){
       
        if (gameBoard.boardArr.length==9)
        {alert ("end")
        //gameBoard.boardArr.splice(0,9);
            return;
        }else{
        
        gameResult.checkResult();
        setTimeout(controlGame, 200);
        }
    }
    
 controlGame();
    
