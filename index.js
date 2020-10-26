// saving the word bank
const wordBank = require('./word-bank.json');
// saving readline sync
const prompt = require("readline-sync");

const answer = prompt.question('May I have your name?');
console.log(answer);