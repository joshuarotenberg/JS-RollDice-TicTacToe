// PROGRAM ticTacToe

//     READ gameStarted (bool)
//     READ player (string)
//     READ turn

//     MODULE startGame
//         create new array with 9 spots of null
//         set player
//         update div with player marker
//         if box selected don't place new shape
//     MODULE END

//     MODULE winner
//         alert winner unless draw
//         add restart button to refresh page   
//     MODULE END
  
//  PROGRAM END



document
.addEventListener("DOMContentLoaded", function () {

    console.log("DOM is loaded");

    let gameStarted = false;
    let gameOver = false;

    let player = "";

    document
    .getElementById("start-game")
    .addEventListener("click", function () {

        


        console.log("start clicked")

        
        document
        .getElementById("status")
        .innerHTML = `<center><h3>Player 1: Select a box</h3></center>`

        // game in progress
        gameStarted = true

        // reset board if you click start in play
        // need to figure this out


        if (gameStarted && !gameOver) {
            console.log("Game started");

            let turn = 0;
            let winner = false;
            // create new Array with 9 spots where value is null for each
            const selectedBoxes = new Array(9).fill(null);

            document
            .getElementById("game-board")
            .addEventListener("click", function(e) {

                turn += 1;
                var boxSelected = e.target.id;
                

                
                var boxSwap = document
                    .getElementById(boxSelected);
                

                // if box chosen already return;
                if (selectedBoxes[boxSelected] === "x"  || selectedBoxes[boxSelected] === "o") {
                    console.log("cant do that")
                    return;
                }

                // set player and update div with player marker
                if(turn % 2 == 0) {
                    if (selectedBoxes.filter == "x" || selectedBoxes.filter == "o") {
                        return;
                    }

                    if (winner) {
                        return;
                    }

                    selectedBoxes[boxSelected] = "o";
                    player = "Player 2";

                    console.log(`turn ${turn}`);
                    console.log(`player: ${player}`);
                    console.log(`clicking box ${boxSelected}`);                   

                    boxSwap.innerHTML = '<div class="circle"></div>';
                } else {

                    if (winner) {
                        return;
                    }
                    selectedBoxes[boxSelected] = "x";
                    player = "Player 1";

                    console.log(`turn ${turn}`);
                    console.log(`player: ${player}`);
                    console.log(`clicking box ${boxSelected}`);

                   

                    boxSwap.innerHTML = '<div class="x"></div>';
                    
                }



                // Alert Winner log winning combo
                if (selectedBoxes[0] == "x" && selectedBoxes[1] == "x" && selectedBoxes[2] == "x") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                } else if (selectedBoxes[0] == "o" && selectedBoxes[1] == "o" && selectedBoxes[2] == "o") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                } else if (selectedBoxes[3] == "x" && selectedBoxes[4] == "x" && selectedBoxes[5] == "x") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[3] == "o" && selectedBoxes[4] == "o" && selectedBoxes[5] == "o") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[6] == "x" && selectedBoxes[7] == "x" && selectedBoxes[8] == "x") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[6] == "o" && selectedBoxes[7] == "o" && selectedBoxes[8] == "o") {
                   console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[0] == "x" && selectedBoxes[3] == "x" && selectedBoxes[6] == "x") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[0] == "o" && selectedBoxes[3] == "o" && selectedBoxes[6] == "o") {
                   console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[1] == "x" && selectedBoxes[4] == "x" && selectedBoxes[7] == "x") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[1] == "o" && selectedBoxes[4] == "o" && selectedBoxes[7] == "o") {
                   console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[2] == "x" && selectedBoxes[5] == "x" && selectedBoxes[8] == "x") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[2] == "o" && selectedBoxes[5] == "o" && selectedBoxes[8] == "o") {
                   console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[0] == "x" && selectedBoxes[4] == "x" && selectedBoxes[8] == "x") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[0] == "o" && selectedBoxes[4] == "o" && selectedBoxes[8] == "o") {
                   console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                } else if (selectedBoxes[2] == "x" && selectedBoxes[4] == "x" && selectedBoxes[6] == "x") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                }  else if (selectedBoxes[2] == "o" && selectedBoxes[4] == "o" && selectedBoxes[6] == "o") {
                    console.log(`winning combo ${selectedBoxes}`);
                    winner = true;
                 } 

            
           
                 

            const winnerWinner = () => {
                if (winner) {
                    gameOver = true;

                    document
                    .getElementById("start-box")
                    .innerHTML = `<button class="start" id="restart"> REFRESH GAME</button>`

                    return(`Winner Winner! Chicken Dinner ${player}` );
                } else if (!winner && turn == 9) {
                    gameOver = true;

                    document
                    .getElementById("start-box")
                    .innerHTML = `<button class="start" id="restart"> REFRESH GAME</button>`
                    
                    return("Looks like a draw");
                } else {
                    return('In play...');
                }
            }
            
            /// status text
            document
            .getElementById("status")
            .innerHTML = `<center><h3>${winnerWinner()}</h3></center>`

            /// refresh page on click after win or draw
            document
            .getElementById("restart")
            .addEventListener("click", function() {
                window.location.reload();
            });

        });

           
            
        } 


    });

    
});