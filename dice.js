var questions = [
  {
    question: "How many days are there in a normal year?",
    Answers: ["364", "365", "366", "367"],
    CorrectAnswer: "365",
  },
  {
    question: "How many letters are there in the English alphabet?",
    Answers: ["23", "24", "25", "26"],
    CorrectAnswer: "26",
  },
  {
    question: " How many colors are there in a rainbow?",
    Answers: ["4", "5", "6", "7"],
    CorrectAnswer: "7",
  },
  {
    question: "How many consonants are there in the English alphabet?",
    Answers: ["19", "20", "21", "22"],
    CorrectAnswer: "21",
  },
  {
    question: "Which month of the year has the least number of days?",
    Answers: ["march", "June", "February", "September"],
    CorrectAnswer: "February",
  },
  {
    question: " How many continents are there in the world?",
    Answers: ["5", "6", "7", "8"],
    CorrectAnswer: "7",
  },
  {
    question: "Which is the largest planet in our Solar system?",
    Answers: ["Earth", "Jupiter", "saturn", "Uranus"],
    CorrectAnswer: " Jupiter",
  },
  {
    question: " Which animal is called King of Jungle?",
    Answers: ["Elephant", "tiger", "Wolf", "Lion"],
    CorrectAnswer: "Lion",
  },
  {
    question: "Which color symbolizes peace?",
    Answers: ["Red", "Blue", "White", "Green"],
    CorrectAnswer: "White",
  },
  {
    question: " How many planets are there in our solar system?",
    Answers: ["7", "8", "9", "5"],
    CorrectAnswer: "8",
  },
];
var playCount = 0,
  count1 = 0,
  count2 = 0,
  currentPlayer = "";

function fillQuestions(currentPlayer) {
  const questionElement = document.getElementById("questions");
  const html = questions.map((question, index) => {
    const answers = question.Answers.map(
      (answer) => `<option value=${answer}>${answer}</option>`
    );
    return `<div>
    <label for=${index}>${question.question}</label>

<select onchange="editScore(${index}, ${currentPlayer})" name="question-${index}" id=${index}>
 ${answers}
  
</select> </div> `;
  });

  questionElement.innerHTML = html;
}

$("#question").append(fillQuestions(currentPlayer));

//Dice part

function displayDice() {
  var dicePlayer1 = Math.floor(Math.random() * 6) + 1;
  var dicePlayer2 = Math.floor(Math.random() * 6) + 1;
  var imageP1 = $("img")[0];
  var imageP2 = $("img")[1];
  imageP1.src = "/images/dice" + dicePlayer1 + ".png";

  imageP2.src = "/images/dice" + dicePlayer2 + ".png";
  var title = document.querySelector("#title");

  if (dicePlayer1 > dicePlayer2) {
    title.textContent = " PLAYER 1 Wins";
    title.classList.add("#title");
    count1++;
  } else if (dicePlayer2 > dicePlayer1) {
    title.textContent = "PLAYER 2 Wins ";
    title.classList.add("#title");
    count2++;
  } else {
    title.textContent = "Twinning Play Again";
    title.classList.add("#title");
  }
  playCount++;

  if (playCount === 5) {
    if (count1 > count2) {
      title.textContent = "Round Winner: PLAYER 1 is Playing  ";
      currentPlayer = "Player 1";
      count1 = 0;
      count2 = 0;
      playCount = 0;
    } else if (count1 < count2) {
      title.textContent = "Round Winner: PLAYER 2 is Playing";
      currentPlayer = "Player 2";
      count1 = 0;
      count2 = 0;
      playCount = 0;
    } else {
      title.textContent = " Oh! No Winner let's do it again";
      count1 = 0;
      count2 = 0;
      playCount = 0;
    }
  }
}

function editScore(questionId, currentPlayer, score) {
  console.log(currentPlayer);
  const question = document.getElementById(questionId);
  if (questions[questionId].CorrectAnswer === question.value) {
    const score = document.getElementById("score");
    if (score.innerHTML.length > 0) {
      const oldScore = parseInt(score.innerHTML);
      score.innerHTML = oldScore + 5;
    } else score.innerHTML = 5;
  }
}

// var players = {
//     user1: "",
//     user2: ""
// }
// function savePlayer1(e) {
//     players.user1 = e.target.value;
// }
// function savePlayer2(e) {
//     players.user2 = e.target.value;
// }

// var player1 = $("<h5 id ='u1'></h5>")
// $("#player1").append(u1);
// var player2 = $("<h5 id ='u2'></h5>")
// $("#player2").append(u2);

// $("#use1").on("change", savePlayer1);
// $("#use2").on("change", savePlayer2);

//     $("#s").click(function () {

//         $("#t").hide()
//     })
