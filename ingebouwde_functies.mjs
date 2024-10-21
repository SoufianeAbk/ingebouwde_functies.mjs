import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let kleinste = Math.min(10, 5, 8, 3, 12);
console.log("Het kleinste getal is:", kleinste);

process.exit()