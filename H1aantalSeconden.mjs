import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
//1dag = 86400 sec, 1uur = 3600sec, 1min = 60sec

let aantalDag = parseFloat(await userInput.question('Geef het aantal dagen:'));

let aantalUur = parseFloat(await userInput.question('Geef het aantal uren: '));

let aantalMin = parseFloat(await userInput.question('Geef het aantal minuten: '));

let aantalSec = parseFloat(await userInput.question('Geef het aantal seconden: '));


let totaalSeconden = (aantalDag * 86400) + (aantalUur * 3600) + (aantalMin * 60) + aantalSec;
console.log("Aantal seconden: " + totaalSeconden);

process.exit();
