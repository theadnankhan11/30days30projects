let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rendIdx = Math.floor(Math.random() * 3);
  return options[rendIdx];
};

const drawGame = () => {
  console.log("game was  draw");
  msg.style.backgroundColor = "black";
  msg.innerText = "Game was Draw. Play again.";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerHTML = compScore;
    msg.innerText = `You lose ${compChoice} beats you ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = gencompChoice();
  console.log("compChoice choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, sciccors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
