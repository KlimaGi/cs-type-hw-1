/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/*
  Funkcijos aprašomos tokiu būdu:
    * apibūdinami(aprašomi tipais) visi funkcijos parametrai
    * nurodomas funkcijos iškvietimo grąžinimo tipas
*/

// Funkcija aprašoma deklaruojant
const addNumbers = (num1: number, num2: number): number => num1 + num2;

// Funkcijos tipas aprašytas prieš funkcijos deklaravimą
/*
  Aprašius funkciją tipu nebereikia įvardinti tipų deklaruojant funkciją.
  funkcijų tipai yra deklaruojami atskirai, kuomet:
    * norima funkcijos tipą pritaikyti ne vienai funkcijai
    * funkcijos parametrų ar grąžinimo tipas yra sudėtingi
*/
type BinaryStringBuilder = (str1: string, str2: string) => string;

const joinStrings: BinaryStringBuilder = (str1, str2) => `${str1} ${str2}`;

const createInitials: BinaryStringBuilder = (str1, str2) => str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();

const sum: number = addNumbers(5, 7);
const joinedString: string = joinStrings('Penediktas', 'Tušinis');
const initials: string = createInitials('Penediktas', 'Tušinis');

console.log({
  sum,
  joinedString,
  initials,
});

/*
    * void - funkcijos grąžinimo tipas nebus reikalaujamas
*/

function printRedText(text: string): void {
  console.log(`%c ${text}`, 'color: #ee0000');
}

printRedText('printRed funkcijos argumentas');

console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
{
  const multiply = (a: number, b: number): number => a * b;

  const power = (base: number, power: number): number => base ** power;

  const squareRoot = (number: number): number => number ** (1 / 2);

  const root = (base: number, nthRoot: number): number => base ** (1 / nthRoot);

  const printBlueText = (text: string): void => console.log(`%c${text}`, 'color: #0000ee');

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();

console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
{
type MathOperations = (num1 : number, num2: number) => number;
type MathOperationsWithOneNum = (num1 : number) => number;
type TextPrinter = (str: string) => void;

const multiply : MathOperations = (a, b) => a * b;

const power: MathOperations = (base, power) => base ** power;

const squareRoot: MathOperationsWithOneNum = (number) => number ** (1 / 2);

const root: MathOperations = (base, nthRoot) => base ** (1 / nthRoot);

const printBlueText: TextPrinter = (text) => console.log(`%c${text}`, 'color: #0000ee');

const num1: number = 16;
const num2: number = 4;

console.log({
  [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
  [`power(${num1}, ${num2})`]: power(num1, num2),
  [`squareRoot(${num1})`]: squareRoot(num1),
  [`root(${num1}, ${num2})`]: root(num1, num2),
});
printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
