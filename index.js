// saving readline sync
const prompt = require("readline-sync");
// saving the word bank
const wordBank = require('./word-bank.json');

// // ******** SET UP: GLOBAL VARIABLES *********
// set remaining guesses 
let remainingGuesses = 6;
// create array to track letters guessed
let letterArray = [];
// create array to track correct letters guessed
let correctLetterArray = [];
// create hangman visual array to track wrong guesses
let hangmanVisual = ["O", "O-", "O-{", "O-{-", "O-{--", " O-{--< \n(¬ಠิ_ಠิ)¬ RIP! ヘ(X_X)ノ"];
let wrongGuesses = 0;
let updateHangmanVisual = () => {
let newHangmanVisual = hangmanVisual[wrongGuesses-1];
console.log(newHangmanVisual);
};
// set rounds played and wins
let roundsPlayed = 0; 
let wins = 0;
// create greeting with instructions
let greeting = (`*****WELCOME TO HANGMAN!***** \n \nIn each round, you'll have *six lives* as you try to find the secret word. \n\nPress Crtl + C at any time to quit the game. \n*****************************\n`);


// ********* WHOLE GAME LOOP ******// 
const hangman = () => {
    // set up
    console.log(greeting);
    // create secret word for this round
    let secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    let secretLetters = secretWord.split("");
    // create word visual for player
    let wordVisual = [];
          const updateWordVisual = () => {
                  secretLetters.forEach((_, index) => {
                  wordVisual[index] = "_";
          });
        };
    updateWordVisual ();
    console.log(wordVisual.join(" "));   
// ********* ROUND LOOP ******// 
// no limit to number of rounds played
    while (roundsPlayed< Infinity) {
        // get and save player's guess
        let guessRaw = prompt.question("\nPlease guess a letter");
        // ensure only first character is saved if more than one are guessed
        let guessFirst = guessRaw[0];
        // game is case insensitive- convert guess to lowercase
        let guess = guessFirst.toLowerCase();
        // check that guess is a letter
        let isGuessALetter = (guess) => {
            return (/[a-zA-Z]/).test(guess)
            };
        // Catch if guess is not a letter
         if (!isGuessALetter(guess)) {console.log("Oops! Your guess must be a letter")
                } 
        // Carch if guess is a repeat 
        else if (letterArray.includes(guess)) {
            console.log("You've guessed that letter before! Try something new.")
                }
        // otherwise proceed to processing guess
               else {
                // if secret word contains guess, update word visual accordingly    
                if (secretWord.includes(guess)) {             
                         for (let i = 0; i < secretWord.length; i++) {
                                  if(secretWord[i] === guess) {
                                        wordVisual[i] = guess;
                                  }}
                        // also update arrays logging all guesses and correct guesses   
                        letterArray.push(guess);
                        correctLetterArray.push(guess);
                        // congratulate and update player;
                        console.log(wordVisual.join(" "));
                        console.log(`\n*****Nice! You've guessed ${letterArray} so far, and you have ${remainingGuesses} lives left.**********`);
                        // check to see if correct guess wins the round
                        if (wordVisual.join("") === secretWord) {
                            // if it is - update wins and rounds played
                            roundsPlayed++;
                            wins++; 
                            // congratulate and update player
                            console.log (`\n*****Congratulations! You got it. The correct word was ${secretWord}.\nYou have won ${wins} rounds out of ${roundsPlayed}.*****`);remainingGuesses = 6;
                            // reset relevant variables for next round
                            wrongGuesses = 0;
                            letterArray = [];
                            correctLetterArray = [];
                            secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
                            updateWordVisual();
                        }; 
                }
//              if not - the guess is incorrect
                else {
                    // update guessed letter array
                    letterArray.push(guess);
                    // subtract one from remaining guesses (i.e. one life lost)
                    remainingGuesses--;
                    // update and display hangman visual
                    wrongGuesses++;
                    updateHangmanVisual();
                    console.log(wordVisual.join(" "));
                    // if there are remaining guesses left - warn and update player
                         if (remainingGuesses > 0) {
                                console.log(`\n*****Careful! ${remainingGuesses} lives left. You've guessed ${letterArray} so far.*****`)  
                                }
                    // otherwise - player has lost
                        else {
                    // update rounds played
                        roundsPlayed++;
                    // commiserate and update player
                        console.log (`\n*****Sorry, you're out of guesses. The correct word was ${secretWord}. You have won ${wins} rounds out of ${roundsPlayed}.*****`);
                    // reset relevant variables for next round
                        remainingGuesses = 6;
                        wrongGuesses = 0;
                        letterArray = [];
                        correctLetterArray = [];
                        secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
                        updateWordVisual();
                        }
                }
            }};
        }; 
// trigger game loop
hangman();