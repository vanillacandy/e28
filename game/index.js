// All the elements on the page we'll work with
let flipBtn = document.querySelector('#flipBtn');
let enterBtn = document.querySelector('#enterBtn');
let newWord = document.querySelector('#newWord');


enterBtn.addEventListener('click', enter);

// Add functionality: clear the input box once the button is clicked
// Print a success message
// Limit the input box with one letter only
// Button to generate new game
function enter() {
    //if word hasn't been generated
    //word has been generated but guess is out
    if (localStorage.answer == undefined || localStorage.guessingtime <= 0) {
        localStorage.setItem("answer", "");
        localStorage.setItem("answer", GenerateWord());

    }
    displayAnswer();
    displayTries();

    // Check if intput letter matches the word
    answer = localStorage.getItem("answer");
    var guess = document.getElementById("letter").value;
    let answerLength = answer.length;
    var guessResult = localStorage.getItem("currentguess");

    if (localStorage.getItem("currentguess") == "") {
        for (var i = 0; i <= answerLength; i++) {
            if (answer[i] == guess) {
                guessResult += guess;
            } else {
                guessResult += "_";
            }
        }
    } else {
        var guessResult1 = "";
        for (var i = 0; i < answerLength; i++) {
            if (answer[i] == guess || guessResult[i] != "_") {
                guessResult1 += answer[i];
            } else {
                guessResult1 += "_";
            }
        }
        guessResult = guessResult1;
    }

    // Player wins if their choice matches the flip
    if (guessResult == answer) {
        displaySuccessMessage();
    }

    localStorage.setItem("currentguess", guessResult);
    displayGuess();

    //minus guess time
    let time = localStorage.getItem("guessingtime");
    time -= 1;
    localStorage.setItem("guessingtime", time);


}
newWord.addEventListener('click', GenerateWord);

function GenerateWord() {
    // The computer randomly chooses a word from the library array
    let library = ['apple', 'banana', 'calculus', 'dimple', 'elephant', 'fire', 'grandma'];
    let l = library.length;
    let random = Math.floor(Math.random() * l);
    let word = library[random];
    let l2 = word.length;
    localStorage.setItem("answer", word);
    localStorage.setItem("guessingtime", l2);
    localStorage.setItem("currentguess", "");
    document.getElementById("match").innerHTML = "";
    displayAnswer();
    displayTries();
    return word;
}
function displayGuess() {
    // Update the page
    document.getElementById("result").innerHTML = localStorage.currentguess;
}
function displayAnswer() {
    // Update the page
    document.getElementById("answer").innerHTML = localStorage.answer;
}

function displayTries() {
    // Update the tries
    document.getElementById("tries").innerHTML = localStorage.guessingtime;
}

function displaySuccessMessage() {
    // Update the tries
    document.getElementById("match").innerHTML = "You got it!";
}



