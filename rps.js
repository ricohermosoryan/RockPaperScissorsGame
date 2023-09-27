function Rock() {
  let rock = 'Rock';
  document.getElementById('userResult').innerHTML = rock;
};

function Paper() {
  let paper = 'Paper';
  document.getElementById('userResult').innerHTML = paper;
};

function Scissors() {
  let scissors = 'Scissors';
  document.getElementById('userResult').innerHTML = scissors;
};


function play() {
  let bot = Math.random() *3;
  let round = Math.floor(bot);
  let arrRPS = ['Rock','Paper','Scissors']
  let randomRPS = arrRPS[round];
  document.getElementById('bothResult').innerHTML = randomRPS;

  let userChoice = document.getElementById('userResult').innerHTML;

  if (userChoice === randomRPS) {
    userDetails.tiedScore += 1;
  }else if (
    (userChoice === 'Rock' && randomRPS === 'Scissors') ||
    (userChoice === 'Paper' && randomRPS === 'Rock') ||
    (userChoice === 'Scissors' && randomRPS === 'Paper')
  ){
    userDetails.userScore += 1;
  } else {
    userDetails.botScore += 1;
  }

  document.getElementById('user').innerHTML = userDetails.userScore;
  document.getElementById('tied').innerHTML = userDetails.tiedScore;
  document.getElementById('both').innerHTML = userDetails.botScore;
};


let userDetails = {
  userName: "",
  userScore: 0,
  tiedScore: 0,
  botScore: 0,
};

function loginClicked() {
  let userName = document.querySelector("#userName").value;
  userDetails.userName = userName;
  document.querySelector(".loginArea").style.display = "none";
  document.querySelector(".hidden").style.display = "block";
  document.querySelector("#userData").innerHTML = userDetails.userName;
  
}