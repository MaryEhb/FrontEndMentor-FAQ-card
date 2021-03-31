//Variables
const questions = document.querySelectorAll(".question-btn");
const questionsBlock = document.querySelectorAll(".question-wrap");

//Function called to display or remove the answer
let press = function (){
    let hasclass = false;
    if(this.parentElement.parentElement.classList.contains('pressed')){
        hasclass = true;
    }
    
    questions.forEach(question => {
        question.parentElement.parentElement.classList.remove('pressed');
    })

    if(!hasclass){
        this.parentElement.parentElement.classList.add('pressed');
    }
}

//Add function to element(when clicked)
questions.forEach(question => {
    question.addEventListener('click', press);
})
