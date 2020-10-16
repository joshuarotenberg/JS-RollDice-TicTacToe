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
//     MODULE END
  
//  PROGRAM END

document
.addEventListener("DOMContentLoaded", function () {

    console.log("DOM is loaded");

    let gameStarted = false;

    let player = "";
    let turn = 0;

    document
    .getElementById("start-game")
    .addEventListener("click", function () {

        console.log("start clicked")
        // game in progress
        gameStarted = true

        // reset board if you click start in play
        // need to figure this out
        document
        .querySelectorAll(".box")
        .innerHTML = ""


        if (gameStarted) {
            console.log("Game started");

            // create new Array with 9 spots where value is null for each
            const selectedBoxes = new Array(9).fill(null);

            document
            .getElementById("game-board")
            .addEventListener("click", function(e) {
                turn += 1;
                var boxSelected = e.target.id;
                
                console.log(`clicking box ${boxSelected}`);
                
                var boxSwap = document
                    .getElementById(boxSelected);
                

                // if box chosen already return;
                if (selectedBoxes[boxSelected] === "x"  || selectedBoxes[boxSelected] === "o") {
                    console.log("cant do that")
                    return;
                }

                // set player and update div with player marker
                if(turn % 2 == 1) {
                    if (selectedBoxes.filter == "x" || selectedBoxes.filter == "o") {
                        return;
                    }
                    selectedBoxes[boxSelected] = "x";
                    player = "Player 1";
                    boxSwap.innerHTML = '<div class="x"></div>';
                } else {
                    selectedBoxes[boxSelected] = "o";
                    player = "Player 2";
                    boxSwap.innerHTML = '<div class="circle"></div>';
                }

                // Alert Winner log winning combo
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
                 } 

                 /// this is not working....
                 
                 // else {
                //     alert("Oh No. Looks like a draw!");
                // }
               
            });
            
        }
    });

    
});