const quizData = [
  {
    question: "When is World Chocolate Day celebrated?",
    options: ["9 February", "17 July", "14 October", "25 August"],
    answer: 0
  },
  {
    question: "Which is the most favourite chocolate among people?",
    options: ["KitKat", "Dairy Milk", "Five Star", "Munch"],
    answer: 1
  },
  {
    question: "Which chocolate is known for being sugar-free?",
    options: ["Dark Chocolate", "Dairy Milk", "Silk Chocolate", "Milky Way"],
    answer: 0
  },
  {
    question: "Which company makes KitKat chocolate?",
    options: ["Nestle", "Cadbury", "Mars", "Hershey's"],
    answer: 0
  },
  {
    question: "What is the main ingredient in chocolate?",
    options: ["Sugar", "Milk", "Cocoa", "Nuts"],
    answer: 2
  },
  {
    question: "Which chocolate bar is known for its crispy wafer inside?",
    options: ["KitKat", "Snickers", "Twix", "Bounty"],
    answer: 0
  },
  {
    question: "Who is the founder of Cadbury?",
    options: ["John Cadbury", "William Cadbury", "George Cadbury", "Richard Cadbury"],
    answer: 0
  },
  {
    question: "Which country is famous for producing the best cocoa beans?",
    options: ["India", "USA", "Brazil", "Ghana"],
    answer: 3
  },
  {
    question: "Which is a popular Indian chocolate brand?",
    options: ["Cadbury", "Nestle", "Mars", "Hershey's"],
    answer: 0
  },
  {
    question: "Which chocolate is known for its creamy filling?",
    options: ["Milkybar", "KitKat", "Dairy Milk", "Crunch"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("scoreText");
const resultMsg = document.getElementById("resultMsg");
const progressBar = document.getElementById("progress-bar");

loadQuestion();

function loadQuestion(){
  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;

  options.forEach((btn,i)=>{
    btn.innerText = q.options[i];
    btn.disabled = false;
    btn.style.background = "linear-gradient(145deg,#7a3e1d,#a0522d)";
  });

  nextBtn.style.display = "none";
  progressBar.style.width = `${(currentQuestion/quizData.length)*100}%`;
}

function selectAnswer(index){
  const correct = quizData[currentQuestion].answer;

  if(index === correct){
    score++;
    options[index].style.background = "linear-gradient(145deg,#2ecc71,#27ae60)";
  }else{
    options[index].style.background = "linear-gradient(145deg,#e74c3c,#c0392b)";
    options[correct].style.background = "linear-gradient(145deg,#2ecc71,#27ae60)";
  }

  options.forEach(btn => btn.disabled = true);
  nextBtn.style.display = "block";
}

function nextQuestion(){
  currentQuestion++;
  if(currentQuestion < quizData.length){
    loadQuestion();
  }else{
    showResult();
  }
}

function showResult(){
  document.getElementById("question-box").classList.add("hidden");
  nextBtn.style.display = "none";
  progressBar.style.width = "100%";
  resultBox.classList.remove("hidden");

  scoreText.innerText = `Score: ${score}/${quizData.length}`;

  if(score === quizData.length){
    resultMsg.innerText = "Perfect! You are a true Chocolate Lover 🍫❤️";
  }else if(score >= 5){
    resultMsg.innerText = "Nice! Chocolate is your happy place 😋";
  }else{
    resultMsg.innerText = "Time to eat more chocolate 😉";
  }
}

function restartQuiz(){
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("question-box").classList.remove("hidden");
  loadQuestion();
}
