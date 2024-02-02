
// Псевдомасив arguments і Array.from і ...rest

// const calculateTotalPrice = function () {
//     const args = Array.from(arguments);

//     let total = 0;

//     for(let hgh of args){
//         total += hgh;
//     }
//     return total;
// }

// const result = calculateTotalPrice(1, 2, 3);
// console.log(result);


// const calculateTotalPrice = function (...args) {    
//     let total = 0;

//     for(let hgh of args){
//         total += hgh;
//     }
//     return total;
// }

// const result = calculateTotalPrice(1, 2, 3);
// console.log(result);


// Напиши функцію filterNumbers(array [, number1, ...]) яка:
// першим аргументом приймає масив чисел
// після першого аргумента може бути довільна кількість інших аргументів які будуть числами,
// Функція повина повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого,
// для яких є аналог в оригінальному масив.

// const filterNumbers = function (array, ...args) {
//     const equalNumbers = [];
//     for(let number of args){
//         const isEqual = array.includes(number);
//         if (isEqual){
//             equalNumbers.push(number);
//         }
//     }
//     return equalNumbers;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

// Посилальний тип даних

// let number = 5;
// const number2 = number;

// number = 25;
// console.log(number);
// console.log(number2);

// // console.log(number === number2);
// // console.log('Hello' === 'Hello');
// const arr1 = [];
// const arr3 = arr1;

// arr1.push(10)
// console.log(arr1);
// console.log(arr3);


// console.log(arr1 === arr3);
// console.log([1, 2, 3] === [1, 2, 3]);

// Callback function

