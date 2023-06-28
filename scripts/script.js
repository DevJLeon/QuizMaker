const $form = document.querySelector(".quiz-form");
const $quiz = document.querySelector(".quiz");
const $radioBtns = document.querySelectorAll("input['']")


var questions = [];

$form.addEventListener("submit", (a)=>{
  a.preventDefault();
  const firstOption = $form.opt1.value;
  const secOption = $form.opt2.value;
  const thirdOption = $form.opt3.value;

  console.log(firstOption);
  console.log(secOption);
  console.log(thirdOption);

  //const rightAns = $form.opt1.value;
  /*
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

let findSelected = () =>{
  let $selected = document.querySelector("input[name='ans']:checked");
  console.log($selected)
};