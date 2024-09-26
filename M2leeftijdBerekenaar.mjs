import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let geboorteJaar = await userInput.question('Voer jouw geboortejaar in: ');
console.log();

let toekomstJaar = await userInput.question('Voer het toekomstjaar in: ');
console.log();

let leeftijd = toekomstJaar - geboorteJaar;
console.log('In ' + toekomstJaar + ' zal ik ' + (leeftijd - 1) + ' of ' + leeftijd + ' jaar oud zijn.');

process.exit();