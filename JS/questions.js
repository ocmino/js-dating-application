answer.addEventListener('click', onClick);

var answers = [];

function onClick(question, value){
    console.log(value);
    console.log(question)

    answers[question] = value

    console.log(answers)
}