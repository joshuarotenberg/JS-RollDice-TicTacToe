// PROGRAM ticTacToe
//     READ player1
//     READ player2
//     READ gameStatus

//     MODULE playerOne
//         set shape of circle 
//         store location to player1Location array
//     MODULE END

//     MODULE playerOne
//         set shape of circle 
//         store location to player1Location array
//     MODULE END

//     MODULE gameWon
//         if 3 shapes logic to determine win
//         do something
//     MODULE END
  
// PROGRAM END

document
.addEventListener("DOMContentLoaded", function () {

    console.log("DOM is loaded");

    let gameStarted = false;
    let gameWon = false;

    let player = "";
    let turn = 0;

    document
    .getElementById("start-game")
    .addEventListener("click", function () {

        console.log("start clicked")
        gameStarted = true


        if (gameStarted) {
            console.log("Game started");
            
            const selectedBoxes = new Array(9).fill(null);

            document
            .getElementById("game-board")
            .addEventListener("click", function(e) {
                turn = turn + 1;
                var boxSelected = e.target.id;
                
                console.log(`clicking box ${boxSelected}`);
                
                var boxSwap = document
                    .getElementById(boxSelected);

                if(turn % 2 == 1) {
                    selectedBoxes[boxSelected] = "x";
                    player = "Player 1";
                    boxSwap.innerHTML = '<div class="x"></div>';
                } else {
                    selectedBoxes[boxSelected] = "o";
                    player = "Player 2";
                    boxSwap.innerHTML = '<div class="circle"></div>';
                }


                if (selectedBoxes[0] == "x" && selectedBoxes[1] == "x" && selectedBoxes[2] == "x") {
                    alert("Congrats Player 1");
                    console.log(`winning combo ${selectedBoxes}`);
                } else if (selectedBoxes[0] == "o" && selectedBoxes[1] == "o" && selectedBoxes[2] == "o") {
                    alert("Congrats Player 2");
                    console.log(`winning combo ${selectedBoxes}`);
                } else if (selectedBoxes[3] == "x" && selectedBoxes[4] == "x" && selectedBoxes[5] == "x") {
                    alert("Congrats Player 1");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[3] == "o" && selectedBoxes[4] == "o" && selectedBoxes[5] == "o") {
                    alert("Congrats Player 2");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[6] == "x" && selectedBoxes[7] == "x" && selectedBoxes[8] == "x") {
                    alert("Congrats Player 1");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[6] == "o" && selectedBoxes[7] == "o" && selectedBoxes[8] == "o") {
                    alert("Congrats Player 2");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[0] == "x" && selectedBoxes[3] == "x" && selectedBoxes[6] == "x") {
                    alert("Congrats Player 1");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[0] == "o" && selectedBoxes[3] == "o" && selectedBoxes[6] == "o") {
                    alert("Congrats Player 2");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[1] == "x" && selectedBoxes[4] == "x" && selectedBoxes[7] == "x") {
                    alert("Congrats Player 1");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[1] == "o" && selectedBoxes[4] == "o" && selectedBoxes[7] == "o") {
                    alert("Congrats Player 2");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[2] == "x" && selectedBoxes[5] == "x" && selectedBoxes[8] == "x") {
                    alert("Congrats Player 1");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[2] == "o" && selectedBoxes[5] == "o" && selectedBoxes[8] == "o") {
                    alert("Congrats Player 2");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[0] == "x" && selectedBoxes[4] == "x" && selectedBoxes[8] == "x") {
                    alert("Congrats Player 1");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[0] == "o" && selectedBoxes[4] == "o" && selectedBoxes[8] == "o") {
                    alert("Congrats Player 2");
                    console.log(`winning combo ${selectedBoxes}`);
                } else if (selectedBoxes[2] == "x" && selectedBoxes[4] == "x" && selectedBoxes[6] == "x") {
                    alert("Congrats Player 1");
                    console.log(`winning combo ${selectedBoxes}`);
                }  else if (selectedBoxes[2] == "o" && selectedBoxes[4] == "o" && selectedBoxes[6] == "o") {
                    alert("Congrats Player 2");
                    console.log(`winning combo ${selectedBoxes}`);
                 } // else {
                //     alert("Oh No. Looks like a draw!");
                // }
               
            });
            
        }
    });

    
});