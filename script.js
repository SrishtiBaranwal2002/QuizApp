const questions=[
    {
    question:"Which of the following cannot be a variable name in C?",
    answers:[
        {text:"volatile",correct:true},
        {text:"true",correct:false},
        {text:"friend",correct:false},
        {text:"export",correct:false},
    ]
},
{
    question:"Who is the father of C language?",
    answers:[
        {text:"Steve Jobs",correct:false},
        {text:"James Gosling",correct:false},
        {text:"Dennis Ritchie",correct:true},
        {text:"Rasmus Lerdor",correct:false},
    ]

},
{
    question:"Which of the following is not a valid C variable name?",
    answers:[
        {text:"int number;",correct:false},
        {text:"float rate",correct:false},
        {text:"int variable_count",correct:false},
        {text:"int $main;",correct:true},
    ]
},
{
    question:" Which of the following is true for variable names in C?",
    answers:[
        {text:" They can contain alphanumeric characters as well as special characters",correct:false},
        {text:" It is not an error to declare a variable to be one of the keywords(like goto, static)",correct:false},
        {text:"Variable names cannot start with a digit",correct:true},
        {text:"Variable can be of any length",correct:false},
    ]
},
{
    question:"Explanation: According to the syntax for C variable name, it cannot start with a digit.",
    answers:[
        {text:" int my_num = 100,000;",correct:false},
        {text:" int my_num = 100000",correct:true},
        {text:"int my num = 1000;",correct:false},
        {text:" int $my_num = 10000;",correct:false},
    ]
}
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = answer.text; // Add this line to set the text content
        answerButtons.appendChild(button);
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
            button.disabled = true;

        
    })
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    showQuestion();  // Add this line to display the correct question.
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
        else
        {
            startQuiz();
        }
    
})
startQuiz();

