const number = Math.floor((Math.random() * 20) + 1);

let score = 20;
let highscore = 0;


document.querySelector(".check").addEventListener("click", function () {
    const guess = parseInt(document.querySelector(".guess").value);
    console.log(typeof guess);

    if (!guess) {
        document.querySelector(".message").textContent = "No Number";
    }



    else if (guess == number) {
        document.querySelector(".message").textContent = "Correct number"

        document.querySelector("body").style.backgroundColor = "#60b347"

        document.querySelector(".number").style.width = "30rem"

        document.querySelector(".number").textContent = number;

        if (score >= highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }



    else if (guess > number) {
        if (score > 0) {
            document.querySelector(".message").textContent = "📈Too high"
            score = score - 1;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "You lost the game";
        }



    }
    else if (guess < number) {
        if (score > 0) {
            document.querySelector(".message").textContent = "📉Too low"
            score = score - 1;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "You lost the game";
        }

    }
});


document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem"
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = " ";
    document.querySelector("body").style.backgroundColor = "black";
});








