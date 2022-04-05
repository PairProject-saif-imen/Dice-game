// console.log("check")
// /
// dice = [
//     { val: 1, image: "" },
//     { val: 2, image: "" },
//     { val: 3, image: "" },
//     { val: 4, image: "" },
//     { val: 5, image: "" },
//     { val: 6, image: "" }

// ]
// $("#image1").append(dice[Math.floor(Math.random() * 6)], function () {
//     $("#bnt1").click()
// })
// $("#image2").append(dice[Math.floor(Math.random() * 6)], function () {
//     $("#bnt2").click()
// })
// function compar() {
//     if (

// src = dice[0].image
/////////////
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

function fillQuestions() {
  const questionElement = document.getElementById("questions");
  const html = questions.map((question, index) => {
    const answers = question.Answers.map(
      (answer) => `<option value=${answer}>${answer}</option>`
    );
    return `<div>
    <label for=${index}>${question.question}</label>

<select onchange="editScore(${index})" name="question-${index}" id=${index}>
 ${answers}
  
</select> </div> `;
  });

  questionElement.innerHTML = html;
}

function editScore(questionId) {
  const question = document.getElementById(questionId);
  if (questions[questionId].CorrectAnswer === question.value) {
    const score = document.getElementById("score");
    if (score.innerHTML.length > 0) {
      const oldScore = parseInt(score.innerHTML);
      score.innerHTML = oldScore + 5;
    } else score.innerHTML = 5;
  }
}
