// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in

let jeGetal1 = parseFloat(await userInput.question('Geef een getal in:'));
console.log(jeGetal1);

let jeGeta2 = parseFloat(await userInput.question('Geef een tweede getal in:'));
console.log(jeGetal1 + ' + ' + jeGeta2 + ' = ' + (jeGetal1 + jeGeta2));

process.exit();
