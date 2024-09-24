// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let jeNaam = await userInput.question('Wat is je naam? ');
console.log(jeNaam);

let jeLeeftijd = await userInput.question('Hoe oud ben je? ');
console.log(jeLeeftijd);

let jeGame = await userInput.question('Wat is jouw lievelingsgame? ');
console.log('Hallo ' + jeNaam + ',ik hoor dat je '+ jeLeeftijd +' jaar oud bent en dat je lievelingsgame ' + jeGame + ' is. ');

process.exit()




console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();
