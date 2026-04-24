let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let userScore = document.querySelector("#userScore");
let computerScore = document.querySelector("#compScore");
let msg = document.querySelector("#msg");

let uScore = 0;
let cScore = 0;


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

playGame = (userChoice) => {

    let computerChoice = getComputerChoice();
    let userWin = true;

    if (userChoice === computerChoice) {
        msg.innerText = `It's a tie! Both chose ${userChoice}`;
        return;
    }

    if (userChoice === "rock") {
        userWin = computerChoice === "scissors" ? true : false;
    }

    else if (userChoice === "paper") {
        userWin = computerChoice === "rock" ? true : false;
    }

    else if (userChoice === "scissors") {
        userWin = computerChoice === "paper" ? true : false;
    }

    if (userWin) {
        uScore++;
        userScore.innerText = uScore;
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
    }

    else {
        cScore++;
        computerScore.innerText = cScore;
        msg.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
    }
}


rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
});

scissors.addEventListener("click", () => {
    playGame("scissors");
});