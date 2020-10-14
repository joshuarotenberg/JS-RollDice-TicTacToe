

// PROGRAM diceRoll

//     READ random1
//     READ random2

//     MODULE firstDie
//         create class based on random1
//         use ID to update class
//     END MODULE

//     MODULE secondDie
//         create class based on random2
//         use ID to update class
//     END MODULE

//     MODULE confirmRoll
//         check to see if it has been hit, update classNames to switch images
//     END MODULE

// END PROGRAM

document
.addEventListener("DOMContentLoaded", function () {

    console.log("DOM is loaded");

    document
    .getElementById("roll-dice")
    .addEventListener("click", function () {

        const random1 = Math.floor(Math.random() * (7 - 1) + 1);
        const random2 = Math.floor(Math.random() * (7 - 1) + 1);
    
    
        const firstDie = () => {
            return(`dice-${random1}`);
        }
    
        const secondDie = () => {
            return(`dice-${random2}`);
        }

        document
        .getElementById("first-die")
        .className = `dice ${firstDie()}`;
    
        document
        .getElementById("second-die")
        .className = `dice ${secondDie()}`;

    });

});

