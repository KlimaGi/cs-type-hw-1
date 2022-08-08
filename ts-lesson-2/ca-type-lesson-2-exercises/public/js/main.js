"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks = [
        { name: 'lemonade', price: 50 },
        { name: 'lime', price: 10 },
        { name: 'water', price: 4 },
    ];
    const sortedByPrice = drinks.sort((a, b) => a.price - b.price);
    console.log('sortedByPrice', sortedByPrice);
}
console.groupEnd();
console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
}
{
    const addName = (obj, str, number) => ({
        ...obj,
        [str]: number,
    });
    console.log('addName({}, "Brutus", 300)', addName({}, 'Brutus', 300));
    console.log('addName({ piano: 500 }, "Brutus", 400)', addName({ piano: 500 }, 'Brutus', 400));
    console.log('addName({ piano: 500, stereo: 300 }, "Caligula", 440)', addName({ piano: 500, stereo: 300 }, 'Caligula', 440));
}
console.groupEnd();
//# sourceMappingURL=main.js.map