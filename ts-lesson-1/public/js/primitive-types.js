"use strict";
const firstName = 'Bea';
const age = 29;
const numbers = [2, 15, 76, 45, 2, 5, 91];
const thing1 = {
    name: 'Book',
    price: 51,
};
const things = [
    { name: 'Book1', price: 51 },
    { name: 'Book2', price: 32 },
    { name: 'Book3', price: 40 },
];
const friend1 = {
    name: 'Oscar',
    age: 32,
};
const friends = [
    { name: 'Zari', age: 27 },
    { name: 'Edy', age: 33 },
    { name: 'Vili', age: 63 },
];
const title = 'Vermontas';
const subTitle = 'Kavinė - Baras';
const peopleCount = 5;
const maxPeopleCount = 26;
const isOpen = true;
const openTime = '12:00';
const closeTime = '02:00';
const security = null;
console.log({
    title: [title, typeof title],
    subTitle: [subTitle, typeof subTitle],
    peopleCount: [peopleCount, typeof peopleCount],
    maxPeopleCount: [maxPeopleCount, typeof maxPeopleCount],
    isOpen: [isOpen, typeof isOpen],
    openTime: [openTime, typeof openTime],
    closeTime: [closeTime, typeof closeTime],
    security: [security, typeof security],
});
console.groupEnd();
//# sourceMappingURL=primitive-types.js.map