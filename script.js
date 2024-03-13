const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice + emoji(userChoice);
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            computerChoiceDisplay.innerHTML = "rock" + emoji("rock");
            break;
        case 2:
            computerChoice = "scissors";
            computerChoiceDisplay.innerHTML = "scissors" + emoji("scissors");
            break;
        case 3:
            computerChoice = "paper";
            computerChoiceDisplay.innerHTML = "paper" + emoji("paper");
            break;
    }
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw \u{1F605}";
    } else if ((computerChoice === "rock" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "rock")) {
        result = "You win \u{1F603}";
    } else {
        result = "You lose \u{1F622}";
    }

    resultDisplay.innerHTML = result;
}

function emoji(choice) {
    switch (choice) {
        case "rock":
            return " \u{1FAA8}";
        case "scissors":
            return " \u{2702}";
        case "paper":
            return " \u{1F4C4}";
    }
}
