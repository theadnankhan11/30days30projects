const questions =[
    {
        question:"which is the largest animal in the world?",
        answers:[
            {text:"Elephant",correct:false},
            {text:"Shark",correct:false},
            {text:"blue Whale",correct:true},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"which is the largest smallest country in the world?",
        answers:[
            {text:"nepla",correct:false},
            {text:"vatican city",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Australia",correct:false},
        ]
    },
    {
        question:"what is the best  most recommended programing language?",
        answers:[
            {text:"python",correct:true},
            {text:"javascirpt",correct:false},
            {text:"java",correct:false},
            {text:"php",correct:false},
        ]
    },
    {
        question:"which is the largest desart in the world?",
        answers:[
            {text:"kalahari",correct:false},
            {text:"Sahar",correct:true},
            {text:"Gobi",correct:false},
            {text:"UAE",correct:false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0 ;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}


function resetState(){
    nextbutton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
    
}
function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
        
    }
    else  {
        selectBtn.classList.add("incorrect");
        
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextbutton.style.display = "block";
    
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of  ${questions.length}!`;
    nextbutton.innerHTML = "Start Again";
    nextbutton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        StartQuiz();
    }
})
 StartQuiz();

