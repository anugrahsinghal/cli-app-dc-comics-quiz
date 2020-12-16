const readlineSync = require('readline-sync')
const chalk = require('chalk');
const log = console.log;
const correct = chalk.green;
const wrong = chalk.keyword('orange');

let scores = [2
  {
    name: "Anugrah",
    score: "3"
  }, {
    name: "Dipesh",
    score: "3"
  }, {
    name: "Tikesh",
    score: "2"
  },
]

function printHighScoresAndReturnHighScore() {
  log("\nHere are the High Scores");
  let highestScore = 0;
  for (i = 0; i < scores.length; i++) {
    log(scores[i].name + " had score " + scores[i].score)
    if (scores[i].score > highestScore) {
      highestScore = scores[i].score;
    }
  }
  return highestScore
}

function askQuestionAndValidate(questionAnswerObj) {
  let userAnswer;
  if (questionAnswerObj.type === "boolean") {
    userAnswer = readlineSync.keyInYN(questionAnswerObj.question + "\n");
  } else if (questionAnswerObj.type === "multi-choice") {
    userAnswer = readlineSync.keyInSelect(questionAnswerObj.choices, questionAnswerObj.question + "\n");
  } else if (questionAnswerObj.type === "text") {
    userAnswer = readlineSync.question(questionAnswerObj.question + "\n");
  }

  if (userAnswer.toString().toUpperCase() === questionAnswerObj.answer.toUpperCase()) {
    playerScore++;
    log(correct("Correct Answer !!!"))
  } else {
    log(wrong("Wrong Answer !"));
  }
}

var questions = [
  {
    question: "Who is Batman's Arch Enemy ?",
    type: "text",
    answer: "Joker",
    comments: "Joker is conidered as Batman's Arch Enemy"
  }, {
    question: "Was Wonder Woman Born in Amazonian Rain Forest ?",
    type: "boolean",
    answer: "false",
    comments: "No, Wonder Woman was born in [Paradise Island].She was daughter of Queen Hippolyte, the leader of a race of [Amazon] women who inhabit the island."
  }, {
    question: "What happens when the Irresistible Force meets the Immovable Object?",
    type: "multi-choice",
    choices: ["They Fight till they destroy each other", "They Surrender"],
    answer: "1"
  }, {
    question: "What is Batman's True Identity?",
    type: "multi-choice",
    choices: ["Clark Kent",
      "Barry Allen",
      "Bruce Wayne",
      "Ben Affleck"],
    answer: "2"
  }, {
    question: "Where is Superman's home?",
    type: "multi-choice",
    choices: [
      "Krypton",
      "Metropolis",
      "Gotham",
      "Galactus"
    ],
    answer: "0"
  }
]


let playerScore = 0;
function startGame() {
  let playerName = readlineSync.question(chalk.bgYellow("Hello Player! Please Enter your name.\n"))
  log("Welcome " + playerName + " to the DC Comics Quiz.\n");

  for (i = 0; i < questions.length; i++) {
    askQuestionAndValidate(questions[i], playerScore)
  }

  endGame(playerName, playerScore);
}

function endGame(playerName, playerScore) {
  log(playerName + " your final score is " + playerScore);
  var highscore = printHighScoresAndReturnHighScore();

  if (playerScore >= highscore) {
    log("Congrats " + playerName + "!!! You Beat the high score.Please send me a screenshot of this.");
  }
}

startGame();