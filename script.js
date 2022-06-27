function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

const temp = computerPlay();
console.log(temp);

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Rock") {console.log("It's a tie!");}
            else if (computerSelection == "Scissors") {console.log(`You Win! ${playerSelection} beats ${computerSelection}`);}
            else if (computerSelection == "Paper") {console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);}
            break;
        case "Paper":
            if (computerSelection == "Paper") {console.log("It's a tie!");}
            else if (computerSelection == "Rock") {console.log(`You Win! ${playerSelection} beats ${computerSelection}`);}
            else if (computerSelection == "Scissors") {console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);}
            break;
        case "Scissors":
            if (computerSelection == "Scissors") {console.log("It's a tie!");}
            else if (computerSelection == "Paper") {console.log(`You Win! ${playerSelection} beats ${computerSelection}`);}
            else if (computerSelection == "Scissors") {console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);}
            break;
        default:
          console.log(`Please, input a correct value`);
      }
  }

  playRound("Rock", temp);