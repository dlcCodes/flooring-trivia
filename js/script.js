// console.log("connected");

//* async data for page. calling data for the trivia

async function loadQuestions() {
    const response = await fetch('/../tests/practice-test.json');
    const questionsAsk = await response.json();

    console.log(questionsAsk);
}

loadQuestions();
