function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Rock") {return("It's a tie!");}
            else if (computerSelection == "Scissors") {return(`You Win! ${playerSelection} beats ${computerSelection}`);}
            else if (computerSelection == "Paper") {return(`You Lose! ${computerSelection} beats ${playerSelection}`);}
            break;
        case "Paper":
            if (computerSelection == "Paper") {return("It's a tie!");}
            else if (computerSelection == "Rock") {return(`You Win! ${playerSelection} beats ${computerSelection}`);}
            else if (computerSelection == "Scissors") {return(`You Lose! ${computerSelection} beats ${playerSelection}`);}
            break;
        case "Scissors":
            if (computerSelection == "Scissors") {return("It's a tie!");}
            else if (computerSelection == "Paper") {return(`You Win! ${playerSelection} beats ${computerSelection}`);}
            else if (computerSelection == "Rock") {return(`You Lose! ${computerSelection} beats ${playerSelection}`);}
            break;
        default:
          return(`Please, input a correct value`);
      }
  }

function game(){
    for (let i = 0; i < 5; i++) {
        let userSelection = prompt("What's your play (Rock, Paper or Scissors?");
        while (userSelection != "Rock" && userSelection != "Paper" && userSelection != "Scissors") {
            userSelection = prompt("Please input a correct value. What's your play (Rock, Paper or Scissors?");
        }
        let computerSelection = computerPlay();
        console.log(playRound(userSelection, computerSelection));
     }
}

game();