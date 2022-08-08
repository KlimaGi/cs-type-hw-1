/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
type Drink = {
  name: string,
  price: number
};
const drinks: Drink[] = [
  { name: 'lemonade', price: 50 },
  { name: 'lime', price: 10 },
  { name: 'water', price: 4 },
];

const sortedByPrice:
Drink[] = drinks.sort((a, b) => a.price - b.price);
console.log('sortedByPrice', sortedByPrice);
}
console.groupEnd();

console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  // type ItemObj = {
  //   [key: string]: number,
  // };

  // const solution = (itemObj: ItemObj, itemName: string, itemValue: number): ItemObj => ({
  //   ...itemObj,
  //   [itemName]: itemValue,
  // });

  // type SolutionArgs = [ItemObj, string, number];

  // const solutionArgs1: SolutionArgs = [{}, "Brutus", 300];
  // const solutionArgs2: SolutionArgs = [{ piano: 500 }, "Brutus", 400];
  // const solutionArgs3: SolutionArgs = [{ piano: 500, stereo: 300 }, "Caligula", 440];

  // const result1: ItemObj = solution(...solutionArgs1);
  // const result2: ItemObj = solution(...solutionArgs2);
  // const result3: ItemObj = solution(...solutionArgs3);

  // console.log(solutionArgs1, result1);
  // console.log(solutionArgs2, result2);
  // console.log(solutionArgs3, result3);
}
{
type Item = {
  [key: string] : number,
};
type AddItem = (obj: Item, str: string, numb: number) => Item;

const addName: AddItem = (obj, str, number) => ({
  ...obj,
  [str]: number,
});

console.log('addName({}, "Brutus", 300)', addName({}, 'Brutus', 300));
console.log('addName({ piano: 500 }, "Brutus", 400)', addName({ piano: 500 }, 'Brutus', 400));
console.log('addName({ piano: 500, stereo: 300 }, "Caligula", 440)', addName({ piano: 500, stereo: 300 }, 'Caligula', 440));
}
console.groupEnd();
