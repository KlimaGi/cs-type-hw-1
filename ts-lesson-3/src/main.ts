/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const numbers = [2, 5, 67, 17, 9];

  const lastItemIndex = (arr: number[]): number => arr.indexOf(arr[arr.length - 1]);
  console.log('lastItemIndex', lastItemIndex(numbers));
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  const words: string[] = ['some', 'moon', 'shore', 'wave'];

  const indexList = (arr: any[]): void => arr.forEach((__, index) => console.log(index));
  indexList(words);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const words: string[] = ['some', 'moon', 'shore', 'wave'];

  const valuesList = (arr: any[]): void => arr.forEach((item) => console.log(item));
  valuesList(words);
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const words: string[] = ['some', 'moon', 'shore', 'wave'];

  const printData = (arr: any[]): void => arr.forEach((item, index) => console.log(`[${index}] => ${item}`));
  printData(words);
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const words: string[] = ['some', 'moon', 'shore', 'wave'];

  const printReverseData = (arr: any[]): void => {
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      console.log(`[${i}] => ${arr[i]}`);
    }
  };
  printReverseData(words);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const words: string[] = ['some', 'moon', 'shore', 'wave'];
  const indexInLine = (arr: any[]): string => arr.map((__, index) => index).join(' ');
  console.log('indexInLine', indexInLine(words));
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  const numbs: number[] = [-111, 2, -9, 48];
  const valuesInLine = (arr: any[]): string => arr.map((item) => item).join(' ');
  console.log('valuesInLine', valuesInLine(numbs));
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  const numbs: number[] = [-111, 2, -9, 48];
  const dataInLine = (arr: any[]): string => arr.map((item, index) => `[${index}]=>${item}`).join(' ');
  console.log('dataInLine', dataInLine(numbs));
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  const numbs: number[] = [-111, 2, -9, 48];
  const pow2 = (arr: number[]): number[] => arr.map((item) => item * 2);
  console.log('pow2', pow2(numbs));
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  const numbs: number[] = [-111, 2, -9, 48];
  const square = (arr: number[]): number[] => arr.map((item) => item * item);
  console.log('square', square(numbs));
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  const numbs: number[] = [-111, 2, -9, 48];
  const powIndex = (arr: number[]): number[] => arr.map((item, index) => item * index);
  console.log('powIndex', powIndex(numbs));
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  const numbs: number[] = [-111, 2, -9, 48];
  const positiveNums = (arr: number[]): number[] => arr.filter((item) => item > 0);
  console.log('positiveNums', positiveNums(numbs));
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  const numbs: number[] = [-111, 2, -9, 48];
  const negativeNums = (arr: number[]): number[] => arr.filter((item) => item < 0);
  console.log('negativeNums', negativeNums(numbs));
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  const numbs: number[] = [-111, 2, -9, 48];
  const evenNums = (arr: number[]): number[] => arr.filter((item) => item % 2 === 0);
  console.log('evenNums', evenNums(numbs));
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  const numbs: number[] = [-111, 2, -9, 48];
  const oddNums = (arr: number[]): number[] => arr.filter((item) => item % 2 !== 0);
  console.log('oddNums', oddNums(numbs));
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  const numbs: number[] = [-111, 2, -9, 48];
  const makePositiveNums = (arr: number[]): number[] => arr.map((item) => {
    if (item < 0) return item * (-1);
    return item;
  });
  console.log('makePositiveNums', makePositiveNums(numbs));
}
console.groupEnd();
