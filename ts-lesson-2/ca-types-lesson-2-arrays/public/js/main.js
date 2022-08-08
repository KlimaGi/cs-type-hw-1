"use strict";
const numbers = [1, 2, 3, 4, 5, 6];
const names = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
const people = [{
        id: '39304075689',
        name: 'Verundijus',
        surname: 'Bauda',
        age: 51,
    }, {
        id: '39304075689',
        name: 'Ryja',
        surname: 'Žaneirytė',
        age: 41,
        height: 1.65,
        weight: 55,
    }, {
        id: '39304075689',
        name: 'Brudas',
        surname: 'Veilokas',
        age: 11,
        height: 1.45,
        weight: 45,
    }];
const printStrings = (strings) => {
    const printString = (str) => console.log(str);
    strings.forEach(printString);
};
const sumNumbers = (nums) => {
    const numberSumReducer = (sum, num) => sum + num;
    return nums.reduce(numberSumReducer, 0);
};
const createPeopleArray = (p1, p2) => [p1, p2];
console.group('Panaudojimo pavyzdžiai:');
{
    console.group('printStrings');
    {
        printStrings(names);
    }
    console.groupEnd();
    console.group('sumNumbers');
    {
        const result = sumNumbers(numbers);
        console.log({
            numbers,
            result,
        });
    }
    console.groupEnd();
    console.group('createPeopleArray');
    {
        const couple = createPeopleArray(people[0], people[2]);
        console.log(couple);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('Užduotys');
{
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        const numbs = [1, -8, -6, 7, 5, 1];
        const addPositiveNumbers = (arr) => {
            const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
            return arr.reduce(positiveNumberReducer, 0);
        };
        console.log({
            numbs,
            sumOfPositiveNumbers: addPositiveNumbers(numbs),
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
    {
        const firstLetters = (arr) => [...arr].map((item) => item[0]).join('');
        console.log('firstLetters', firstLetters(['Lietuviškas', 'Nepriklausomas', 'Kanalas']));
        console.log('firstLetters', firstLetters(['Lietuvos', 'Respublikos', 'Televizija']));
        console.log('firstLetters', firstLetters(['Loughing', 'Out', 'Loud']));
    }
    console.groupEnd();
    console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri sudaugintų visus number masyvo skaičius');
    {
        const powNums = (arr) => {
            const isZero = arr.some((num) => num === 0);
            let result = 0;
            if (!isZero)
                result = arr.reduce((acc, curr) => acc * curr);
            return result;
        };
        console.log('powNums', powNums([1, 7, 8]));
        console.log('powNums', powNums([98, 74, 5, 0]));
        console.log('powNums', powNums([17, 10, 5]));
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map