const quiz_data = [{
    question : "Which type of JavaScript language is ___",
    a: 'Object-Oriented',
    b: 'Object-Based',
    c: 'Assembly-language',
    d: 'High-level',
    correct: "b"
},
{
    question: "When interpreter encounters an empty statements, what it will do:",
    a:' Shows a warning ',
    b:' Prompts to complete the statement ',
    c:' Throws an error ',
    d:' Ignores the statements ',
    correct: "d"
},
{
    question: " Which of the following variables takes precedence over the others if the names are the same?",
    a: " Global Variable",
    b: " The local variable",
    c: "Both",
    d: " None of the above",
    correct: "b"
},
{
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    a: "Preprocessor",
    b: "Triggering Event",
    c: "RMI",
    d: "Function/Method",
    correct: "d"
}
];
const quiz = document.getElementById("quiz");
const  questionEl  = document.getElementById('question');
const answerEls= document.querySelectorAll(".answer");
const  a_text = document.getElementById("a_text");
const  b_text = document.getElementById("b_text");
const  c_text = document.getElementById("c_text");
const  d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");
let answer = undefined;
let score = 0;

let current_quiz = 0;
loadQuiz();
function loadQuiz(){
    deselected();
    const current_quiz_data = quiz_data[current_quiz]
    questionEl.innerText = current_quiz_data.question
    a_text.innerText = current_quiz_data.a
    b_text.innerText = current_quiz_data.b
    c_text.innerText = current_quiz_data.c
    d_text.innerText = current_quiz_data.d

}

function getselected(){
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;

}

function deselected(){
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
    })
}


submitbtn.addEventListener("click" , function(){
    getselected();
    // console.log(answer);
    if(answer){
        if(answer===quiz_data[current_quiz].correct){
            score++;
        }
            current_quiz ++;
            if(current_quiz<quiz_data.length){
                loadQuiz();
            }else{
                quiz.innerHTML = `<h2> And your total score is  ${score} / ${quiz_data.length}</h2> <button onClick = "location.reload()" >Realod</button>` 
            }
            
        

    }
})
