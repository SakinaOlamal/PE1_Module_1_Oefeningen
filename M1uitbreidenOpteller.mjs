import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = "33";
let getal2 = 10;
console.log("Getal 1: " + (getal1));
console.log("Getal 2: " + (getal2));

let som = getal1 + getal2;
console.log("Som: " +  getal1 + " + " + getal2 + " = " + (getal1 + getal2));

let verschil = getal1 - getal2;
console.log("Verschil: " +  getal1 + " - " + getal2 + " = " + (getal1 - getal2));

let product = getal1 * getal2;
console.log("Product: " +  getal1 + " * " + getal2 + " = " + (getal1 * getal2));

let deling = getal1 / getal2;
console.log("Deling: " +  getal1 + " / " + getal2 + " = " + (getal1 / getal2));

process.exit();


