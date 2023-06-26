const $form = document.querySelector(".quiz-form");
const $quiz = document.querySelector(".quiz");

var questions = [];

$form.addEventListener("submit", (a)=>{
  a.preventDefault();
  /* const firstOption = $form.opt1.value;
  const secOption = $form.opt2.value;
  const thirdOption = $form.opt3.value;
  //const rightAns = $form.opt1.value;
  
  let question = {
    first:firstOption,
    second:secOption,
    third:thirdOption,
    right: undefined
  };

//  const $

  $quiz.appendChild();

  questions.push(question); */
  $form.reset();
})