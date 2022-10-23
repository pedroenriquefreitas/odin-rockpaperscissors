function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Rock") {return("It's a tie!");}
            else if (computerSelection == "Scissors") {return(`You Win!`);}
            else if (computerSelection == "Paper") {return(`You Lose!`);}
            break;
        case "Paper":
            if (computerSelection == "Paper") {return("It's a tie!");}
            else if (computerSelection == "Rock") {return(`You Win!`);}
            else if (computerSelection == "Scissors") {return(`You Lose!`);}
            break;
        case "Scissors":
            if (computerSelection == "Scissors") {return("It's a tie!");}
            else if (computerSelection == "Paper") {return(`You Win!`);}
            else if (computerSelection == "Rock") {return(`You Lose!`);}
            break;
        default:
          return(`Please, input a correct value`);
      }
  }

  let popup = document.querySelector('#popup');
  let popupText = document.querySelector('.popup-title');

  function openPopup(text){
    popupText.textContent = text;
    popup.classList.add("open-popup");
    document.querySelector('.player-play').classList.add("invisible");
    document.querySelector('.computer-play').classList.add("invisible");
    document.querySelector('.score-section').classList.add("invisible");
    let body_but_popup = document.querySelectorAll('body > div > div > *:not(#popup)'); //seleciona toda a pagina menos o popup
    body_but_popup.forEach(function(i){
        i.style.cssText = 'filter: blur(3px);';
    });

  }

  function closePopup(){
    popup.classList.remove("open-popup");
    document.querySelector('.points-tv').textContent = `0 vs 0`;
    document.querySelector('body').style.cssText = 'background-color: white;'; 
    document.querySelector('.results-section').style.cssText = 'color: black;'; 
    document.querySelector('.player-play').classList.remove("invisible");
    document.querySelector('.computer-play').classList.remove("invisible");
    document.querySelector('.score-section').classList.remove("invisible");
    let body_but_popup = document.querySelectorAll('body > div > div > *:not(#popup)'); //seleciona toda a pagina menos o popup
    body_but_popup.forEach(function(i){
        i.style.cssText = 'filter: none;';
    });
  }

const btns = document.querySelectorAll('.top-section > button');
const UserInputDiv = document.querySelector('.user-input');
const ComputerOutputDiv = document.querySelector('.computer-input');
const ResultsDiv = document.querySelector('.results-section');

let player_points = 0;
let computer_points = 0;

btns.forEach(function(event){
    event.addEventListener("click", (a) => {
        let playerSelection = a.target.innerText;
        let computerSelection = computerPlay();
        UserInputDiv.textContent = `${playerSelection} `;
        ComputerOutputDiv.textContent = `${computerSelection} `;
        let results = playRound(playerSelection, computerSelection);
        ResultsDiv.textContent = results;
        switch (results) {
            case "It's a tie!":
                document.querySelector('.results-section').style.cssText = 'color: black;'; 
                break;
            case "You Win!":
                document.querySelector('.results-section').style.cssText = 'color: #3FE075;'; 
                player_points++;
                document.querySelector('.points-tv').textContent = `${player_points} vs ${computer_points}`; 
                break;
            case "You Lose!":
                document.querySelector('.results-section').style.cssText = 'color: #f07373;'; 
                computer_points++;
                document.querySelector('.points-tv').textContent = `${player_points} vs ${computer_points}`; 
                break;
            default:
                document.querySelector('body').style.cssText = 'background-color: purple;'; 
        }
        if (player_points == 5 || computer_points == 5){
            if(player_points>computer_points){
                openPopup(`You won against the computer, congratulations! ${player_points} vs ${computer_points}`);
                document.querySelector('body').style.cssText = 'background-color: #267365;'; 
                document.querySelector('.results-section').style.cssText = 'color: #3FE075;'; 
                ResultsDiv.textContent = "";
                computer_points = player_points = 0;
            }
            else{
                openPopup(`You lost against the computer, try harder next time! ${player_points} vs ${computer_points}`);
                document.querySelector('body').style.cssText = 'background-color: #F23030;'; 
                document.querySelector('.results-section').style.cssText = 'color: #f07373;'; 
                ResultsDiv.textContent = "";
                computer_points = player_points = 0;
            }
        }
    });
});