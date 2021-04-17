var startButton = document.getElementById("startbtn");
var questionContainerElem = document.getElementById("question-box");
var questionElem = document.getElementById("question")
var answerButtonElem = document.getElementById("answerbtn")

startButton.addEventListener("click", startGame)

function startGame () {
    startButton.classList.add("hide")
    shuffleQuestion = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElem.classList.remove("hide")
    nextQuestion()
}

function nextQuestion () {
    showQuestion(shuffleQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionElem.innerText = question.question
    question.answer.forEach( answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElem.appendChild("button")
    })
}

function selectAnswer () {

}

var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hot Tacos Make Life", correct: false },
            { text: "Hypertext Markup Language", correct: true },
            { text: "Have the money, Lance!", correct: false },
            { text: "Hypertext Makeup Language", correct: false }
        ]
    },
    {
        question: "How much maths do you know?",
        answers: [
            { text: "A lot!", correct: false },
            { text: "I can hold my own with my iPhone close by", correct: false },
            { text: "Who is maths?", correct: false },
            { text: "Math is life", correct: true }
        ]
    },
    {
        question: "Mac or PC?",
        answers: [
            { text: "Mac", correct: true },
            { text: "PC", correct: false },
            { text: "The Stone Tablets of Moses", correct: false },
            { text: "Abacus & a Whiteclaw", correct: false }
        ]
    },
    {
        question: "Fixing mistakes in a program is called?",
        answers: [
            { text: "Debugging", correct: true },
            { text: "Looping", correct: false },
            { text: "Sequencing", correct: false },
            { text: "Dancing with Death", correct: false },
        ]
    }
    ];