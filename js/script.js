// console.log("connected");

//* async data for page. calling data for the trivia

async function loadQuestions() {
    const response = await fetch('/../tests/practice-test.json');
    const questionsAsk = await response.json();

    console.log(questionsAsk);
}

loadQuestions();


//* ****** Materialize Dropdown Initialization ****** *//

$('.dropdown-trigger').dropdown();


//* ****** Sidebar Nav Trigger Initialization ****** *//
$(document).ready(function(){
    $('.sidenav').sidenav();
  });