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
                        //this is here bcs if not, whenever I push an occupied place, the array gets pushed nevertheless
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
    //The logic that lets the player play with the AI
    const computerMark= () => {       
        let i = 0;
            squares.addEventListener("click", function (e){
                //make sure you're targeting the squares and not the whitespace in between them
                if (e.target.className ==="squares"){
                   //logic that keeps players from playing in spots that are already taken
                if (e.target.textContent=="X" || e.target.textContent=="O"){
                   return;
                }else {
                 //here, instead of turnerFunc, we call the playerOne only. The rest is done by the AI, we don't need to call the playerTwo anymore       
                    playerOne.play();
                    //array elements are written in squares
                    e.target.textContent= "X";
               
                        if (e.target.textContent =="X"){
                            //take the id of that square, turn into an array and get the 7th element
                            //which is the 6th in index, bcs js arrays start from 0, remember?
                            //then send that element into the squares placed array that's used for calculations for the AI
                            squaresPlaced.push(e.target.id.split("")[6]);
                            //THESE PARTS WILL BE DELETED
                            sessionStorage.setItem("square", e.target.id.split("")[6]);
                            minimaxModule.miniFactory();
                            //if I don't put this one, the game crashes upon reaching a tie
                            if (gameBoard.boardArr.length<9){
                                computerMove.AIplay();
                            }
                            
                            }

                           
               
                            //the array index gets incremented
                            i++;
               
               
                         }
                     }            
                })
            }
    const unbeatableMark = () => {
        let i = 0;
        squares.addEventListener("click", function (e){
            //make sure you're targeting the squares and not the whitespace in between them
            if (e.target.className ==="squares"){
               //logic that keeps players from playing in spots that are already taken
            if (e.target.textContent=="X" || e.target.textContent=="O"){
               return;
            }else {
             //here, instead of turnerFunc, we call the playerOne only. The rest is done by the AI, we don't need to call the playerTwo anymore       
                playerOne.play();
                //array elements are written in squares
                e.target.textContent= "X";
           
                    if (e.target.textContent =="X"){
                        //take the id of that square, turn into an array and get the 7th element
                        //which is the 6th in index, bcs js arrays start from 0, remember?
                        //then send that element into the squares placed array that's used for calculations for the AI
                        squaresPlaced.push(e.target.id.split("")[6]);
                        //set the square number as sessionstorage so it can be used outside of the scope
                        sessionStorage.setItem("square", e.target.id.split("")[6]);
                        //if I don't put this one, the game crashes upon reaching a tie
                        if (gameBoard.boardArr.length<9){
                           // computerMove.AIplay();
                        }
                        
                        }

                       
           
                        //the array index gets incremented
                        i++;
           
           
                     }
                 }            
            })

    }
   

    return {manualMark,computerMark}
})();



//display controller module
const displayController = (() => {
    //call the module that returns the factory function that takes the user input manually and marks the board upon click 
    document.getElementById("playerVsPlayer").addEventListener("click", function (e){
        markBoard.manualMark();
   })
   //call the function that lets the player play against the AI
    document.getElementById("playerVsAI").addEventListener("click",function (e){ 
        markBoard.computerMark();
     })
 
  
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
//there's a bug in here
//if you win at the last moment when all the squares are full 
//you get a tie
     function controlGame(){        
        if (gameBoard.boardArr.length==9){
                 gameResult.checkResult();
                    if (announceResult.textContent == "Player X Wins!" || announceResult.textContent == "Player O Wins!"){
                         return;
                    }else{
                        //freeze the gameBoard (container) div
                        document.getElementById("gameBoard").classList.add("freeze");  
                        //announceResult.textContent = "tryy";
                        announceResult.textContent= "Tie!";
                    }   
       }else{
            gameResult.checkResult();
            setTimeout(controlGame, 200);
       }
    }   
 controlGame();   
//array that stores the indexes of squares taken
 var squaresPlaced = []; 
//module that returns the factory function that makes the computer make a move
const computerMove = (()=>{
    //factory function that makes the computer make a move
    const AIplay = () =>{
    //generate a random number that which DOES NOT CONTAIN any of the numbers in the squaresPlaced array
    let len = 1;
        let generateRandom = (len, squaresPlaced) => {
            let randomArray = [];
            for(let i = 0; i < len; ){
                //create a random number between 1 and 9 
                let random = Math.floor((Math.random() * 9) +1).toString();
                    if(!squaresPlaced.includes(random) &&
                        !randomArray.includes(random)){
                            randomArray.push(random);
                            i++;
                        }
                    };
                        //push the outcome
                         return squaresPlaced.push(randomArray.toString());
            }
        console.log(generateRandom(len, squaresPlaced));
        //write it to the DOM
        document.getElementById("square" + squaresPlaced[squaresPlaced.length -1]).textContent= 'O';  
      playerTwo.play();
        }

return {AIplay}

    
})();

//FROM HERE IS THE IMPLEMENTATION OF THE MINIMAX FUNCTION
const origBoard=[1,2,3,4,5,6,7,8,9];
//minimax module
const minimaxModule = (()=>{
    const miniFactory= () =>{
   //update the array on each click
   origBoard[sessionStorage.getItem("square")]= "X";


// human
//var huPlayer = “X”;

// ai
//var aiPlayer = “O”;

// returns list of the indexes of empty spots on the board
function emptyIndexies(board){
  return  board.filter(s => s != "O" && s != "X");
}

// winning combinations using the board indexies
function winning(board, player){
 if (
 (board[0] == player && board[1] == player && board[2] == player) ||
 (board[3] == player && board[4] == player && board[5] == player) ||
 (board[6] == player && board[7] == player && board[8] == player) ||
 (board[0] == player && board[3] == player && board[6] == player) ||
 (board[1] == player && board[4] == player && board[7] == player) ||
 (board[2] == player && board[5] == player && board[8] == player) ||
 (board[0] == player && board[4] == player && board[8] == player) ||
 (board[2] == player && board[4] == player && board[6] == player)
 ) {
 return true;
 } else {
 return false;
 }
}

// the main minimax function
function minimax(newBoard, player){
  
    //available spots
    var availSpots = emptyIndexies(newBoard);


  // checks for the terminal states such as win, lose, and tie 
  //and returning a value accordingly
  if (winning(newBoard, huPlayer)){
    return {score:-10};
 }
   else if (winning(newBoard, aiPlayer)){
   return {score:10};
   }
 else if (availSpots.length === 0){
     return {score:0};
 }

 // an array to collect all the objects
 var moves = [];

 // loop through available spots
 for (var i = 0; i < availSpots.length; i++){
   //create an object for each and store the index of that spot 
   var move = {};
     move.index = newBoard[availSpots[i]];

   // set the empty spot to the current player
   newBoard[availSpots[i]] = player;

   /*collect the score resulted from calling minimax 
     on the opponent of the current player*/
   if (player == aiPlayer){
     var result = minimax(newBoard, huPlayer);
     move.score = result.score;
   }
   else{
     var result = minimax(newBoard, aiPlayer);
     move.score = result.score;
   }

   // reset the spot to empty
   newBoard[availSpots[i]] = move.index;

   // push the object to the array
   moves.push(move);
 }

 // if it is the computer's turn loop over the moves and choose the move with the highest score
 var bestMove;
 if(player === aiPlayer){
   var bestScore = -10000;
   for(var i = 0; i < moves.length; i++){
     if(moves[i].score > bestScore){
       bestScore = moves[i].score;
       bestMove = i;
     }
   }
 }else{

// else loop over the moves and choose the move with the lowest score
   var bestScore = 10000;
   for(var i = 0; i < moves.length; i++){
     if(moves[i].score < bestScore){
       bestScore = moves[i].score;
       bestMove = i;
     }
   }
 }

// return the chosen move (object) from the moves array
 return moves[bestMove];
}


    }
 return {miniFactory}


})();

   



