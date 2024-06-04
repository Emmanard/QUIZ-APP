const questions = [
  {
    question: "Who is the richest man in the world as of june 2024?",
    answer: [
      { text: "Elon Musk", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Bernard Arnault", correct: true },
      { text: "Jeff Bezos", correct: false },
    ],
  },
  {
    question: "Who is the GOAT Of Football?",
    answer: [
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Lionel Messi", correct: true },
      { text: "Diego Maradona", correct: false },
      { text: "Pele", correct: false },
    ],
  },

  {
    question:
      "Who is the First African Artist to perform at the grammys live event show?",
    answer: [
      { text: "Burna Boy", correct: true },
      { text: "Wizkid", correct: false },
      { text: "Davido", correct: false },
      { text: "Rema", correct: false },
    ],
  },

  {
    question: "Who is the highest goal scorer  in the world as of june 2024",
    answer: [
      { text: "Cristiano Ronaldo", correct: true },
      { text: "Lionel Messi", correct: false },
      { text: "Diego Maradona", correct: false },
      { text: "Pele", correct: false },
    ],
  },

  {
    question: "Most populated country  in the world as of june 2024",
    answer: [
      { text: "China", correct: false },
      { text: "Brazil", correct: false },
      { text: "Bangladesh", correct: false },
      { text: "India", correct: true },
    ],
  },
];
const questionId = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextntn = document.getElementById("next-ntn");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextntn.innerHTML = "Next";
  showquestion();
}

function showquestion() {
  Resetstate();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionId.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("ntn");
    answerbuttons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectanswer);
  });
}

function Resetstate() {
  nextntn.style.display = "none";
  while (answerbuttons.firstChild) {
    answerbuttons.removeChild(answerbuttons.firstChild);
  }
}

function selectanswer(o) {
  const selectntn = o.target;
  const iscorrect = selectntn.dataset.correct === "true";
  if (iscorrect) {
    selectntn.classList.add("correct");
    score++;
  } else {
    selectntn.classList.add("incorrect");
  }
  Array.from(answerbuttons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextntn.style.display = "block";
}

function showscore() {
  Resetstate();
  questionId.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextntn.innerHTML = "Play Again";
  nextntn.style.display = "block";
}

function handlenextntn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showquestion();
  } else {
    showscore();
  }
}

nextntn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handlenextntn();
  } else {
    startQuiz();
  }
});
startQuiz();
