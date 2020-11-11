# Hangman Game

## Introduction
This is a simple hangman game, built for the terminal and created using vanilla Javascript with readline sync. 

# Instructions
- Enter **"node ."** into the terminal to launch the game.
- Hit **Ctrl + C** at any time to cancel and exit the game. Your results will not be saved. 
- The object of Hangman is to guess a secret word, letter by letter, without making too many incorrect guesses; you have **six lives per round**.
- The game will display a visual representing the number of letters in the secret word, and the position of any correctly guessed letters (e.g. if you see "_ _ b _", you know that you are trying to guess a four-letter word, and that "b" is the third letter).
- Every time you guess a letter that is *not* contained in the secret word, you will lose a life, and another body part will be displayed: the 'hanged man' is being put together. 
- If you make **six** incorrrect guesses, the whole figure will appear, you're dead, and that round is over. 
- You can play as many rounds as you wish. Happy guesing!