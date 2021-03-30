//Variables
let btns = document.querySelectorAll(".ans-btn");
let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".ans");

//Function called to display or remove the answer
let press = function (){
    let hasclass = false;
    if(this.classList.contains('pressed')){
        hasclass = true;
    }

    btns.forEach(btn => {
        btn.classList.remove('pressed');
    })
    
    questions.forEach(question => {
        question.classList.remove('pressed');
    })

    answers.forEach(answer => {
        answer.classList.remove('pressed');
    })
    
    if(!hasclass){
        this.parentElement.parentElement.querySelector('.ans-btn').classList.toggle('pressed');
        this.parentElement.parentElement.querySelector('.ans').classList.toggle('pressed');
        this.parentElement.parentElement.querySelector('.question').classList.toggle('pressed');
    }
}

//Add function to elements (when clicked)
btns.forEach(btn => {
    btn.onclick = press;
})

questions.forEach(question => {
    question.onclick = press;
})