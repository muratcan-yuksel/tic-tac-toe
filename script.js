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

const announceResult= document.getElementById("result");
 const gameResult = (()=>{
     //Check all the possible winning combinations, and do something with it
        const checkResult = () =>{
            if (document.getElementById("square1").textContent == "X" && document.getElementById("square2").textContent == "X" && document.getElementById("square3").textContent=="X"){
                    announceResult.textContent="Player X Wins!";    
                    //freeze the gameBoard (container) div
                    document.getElementById("gameBoard").classList.add("freeze");         
                }else if (document.getElementById("square4").textContent == "X" && document.getElementById("square5").textContent == "X" && document.getElementById("square6").textContent=="X"){
                     announceResult.textContent="Player X Wins!";  
                    //freeze the gameBoard (container) div
                    document.getElementById("gameBoard").classList.add("freeze");  
                }else if (document.getElementById("square7").textContent == "X" && document.getElementById("square8").textContent == "X" && document.getElementById("square9").textContent=="X"){
                     announceResult.textContent="Player X Wins!";  
                    //freeze the gameBoard (container) div
                    document.getElementById("gameBoard").classList.add("freeze");  
                }else if (document.getElementById("square1").textContent == "X" && document.getElementById("square4").textContent == "X" && document.getElementById("square7").textContent=="X"){
                     announceResult.textContent="Player X Wins!";  
                    //freeze the gameBoard (container) div
                    document.getElementById("gameBoard").classList.add("freeze");  
                }else if (document.getElementById("square2").textContent == "X" && document.getElementById("square5").textContent == "X" && document.getElementById("square8").textContent=="X"){
                     announceResult.textContent="Player X Wins!";  
                    //freeze the gameBoard (container) div
                    document.getElementById("gameBoard").classList.add("freeze");  
                }else if (document.getElementById("square3").textContent == "X" && document.getElementById("square6").textContent == "X" && document.getElementById("square9").textContent=="X"){
                     announceResult.textContent="Player X Wins!";  
                    //freeze the gameBoard (container) div
                    document.getElementById("gameBoard").classList.add("freeze");  
                }else if (document.getElementById("square1").textContent == "X" && document.getElementById("square5").textContent == "X" && document.getElementById("square9").textContent=="X"){
                     announceResult.textContent="Player X Wins!";  
                    //freeze the gameBoard (container) div
                    document.getElementById("gameBoard").classList.add("freeze");  
                }else if (document.getElementById("square3").textContent == "X" && document.getElementById("square5").textContent == "X" && document.getElementById("square7").textContent=="X"){
                     announceResult.textContent="Player X Wins!";  
                    //freeze the gameBoard (container) div
                    document.getElementById("gameBoard").classList.add("freeze");  
            }//Player O's turn
                    else  if (document.getElementById("square1").textContent == "O" && document.getElementById("square2").textContent == "O" && document.getElementById("square3").textContent=="O"){
                        announceResult.textContent="Player O Wins!";  
                        //freeze the gameBoard (container) div
                         document.getElementById("gameBoard").classList.add("freeze");  
                    }else if (document.getElementById("square4").textContent == "O" && document.getElementById("square5").textContent == "O" && document.getElementById("square6").textContent=="O"){
                        announceResult.textContent="Player O Wins!";  
                         //freeze the gameBoard (container) div
                         document.getElementById("gameBoard").classList.add("freeze");  
                    }else if (document.getElementById("square7").textContent == "O" && document.getElementById("square8").textContent == "O" && document.getElementById("square9").textContent=="O"){
                        announceResult.textContent="Player O Wins!";  
                         //freeze the gameBoard (container) div
                         document.getElementById("gameBoard").classList.add("freeze");  
                    }else if (document.getElementById("square1").textContent == "O" && document.getElementById("square4").textContent == "O" && document.getElementById("square7").textContent=="O"){
                        announceResult.textContent="Player O Wins!";  
                         //freeze the gameBoard (container) div
                         document.getElementById("gameBoard").classList.add("freeze");  
                    }else if (document.getElementById("square2").textContent == "O" && document.getElementById("square5").textContent == "O" && document.getElementById("square8").textContent=="O"){
                        announceResult.textContent="Player O Wins!";  
                         //freeze the gameBoard (container) div
                         document.getElementById("gameBoard").classList.add("freeze");  
                    }else if (document.getElementById("square3").textContent == "O" && document.getElementById("square6").textContent == "O" && document.getElementById("square9").textContent=="O"){
                        announceResult.textContent="Player O Wins!";  
                         //freeze the gameBoard (container) div
                         document.getElementById("gameBoard").classList.add("freeze");  
                    }else if (document.getElementById("square1").textContent == "O" && document.getElementById("square5").textContent == "O" && document.getElementById("square9").textContent=="O"){
                        announceResult.textContent="Player O Wins!";  
                         //freeze the gameBoard (container) div
                         document.getElementById("gameBoard").classList.add("freeze");  
                    }else if (document.getElementById("square3").textContent == "O" && document.getElementById("square5").textContent == "O" && document.getElementById("square7").textContent=="O"){
                        announceResult.textContent="Player O Wins!";  
                         //freeze the gameBoard (container) div
                         document.getElementById("gameBoard").classList.add("freeze");  
                    }

        }
        return {checkResult}
     }
     )();

     function controlGame(){
       
        if (gameBoard.boardArr.length==9){
             //freeze the gameBoard (container) div
             document.getElementById("gameBoard").classList.add("freeze");  
             alert("tie!");
        }else{
        
        gameResult.checkResult();
        setTimeout(controlGame, 200);
        }
    }
    
 controlGame();
    
    
 var squaresPlaced = []; // Stores the squares index placed

 
  // var randomIndex = Math.floor((Math.random() * 9) + 1); // Generate a random number between 1 and 9
 
   // Only add the square if it doesn't exist already
   /*if (squaresPlaced.indexOf(randomIndex) === -1 ) {
     squaresPlaced.push(randomIndex);
     document.getElementById('square' + randomIndex).textContent= 'red';
   } */
 
 /*
 //generate a random number that which DOES NOT CONTAIN any of the numbers in the squaresPlaced array
let len = 1;
let generateRandom = (len, squaresPlaced) => {
   let randomArray = [];
   for(let i = 0; i < len; ){
      let random = Math.floor((Math.random() * 9) +1).toString();
   if(!squaresPlaced.includes(random) &&
      !randomArray.includes(random)){
         randomArray.push(random);
         i++;
      }
   };
   return squaresPlaced.push(randomArray.toString());
}
console.log(generateRandom(len, squaresPlaced));
document.getElementById("square" + squaresPlaced[squaresPlaced.length -1]).textContent= 'red';  */