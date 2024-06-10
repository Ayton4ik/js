/**
* 1. Напишіть функцію sum, яка приймає два аргументи та повертає їх суму.
* Результат функції запишіть в зміну та виведіть в консоль.
*
* 2. Напишіть функцію greet, яка приймає ім'я як аргумент та повертає рядок
* "Hello, [ім'я]". Результат функції вивести на сторінку
*
* 3. Напишіть функцію isEven, яка приймає число та повертає true, якщо воно
* парне, і false - якщо непарне. Результат вивести в консоль
*
* 4. Напишіть функцію squareArray, яка приймає масив чисел та повертає новий
* масив, де кожен елемент є квадратом відповідного елемента вхідного масиву.
* const numbers = [5, 12, 8, 20, 15, 7, 10, 3, 18, 25];
*
* 5. Створіть об'єкт person з властивостями name, age та методом introduce,
* який повертає рядок "My name is [name] and I am [age] years old".
* Перезапишіть властивість name та знову скористайтеся методом introduce.
*
* 6. Напишіть функцію isAdult, яка приймає об'єкт person та повертає true,
* якщо вік більше або дорівнює 18, і false - якщо менше.
*
* 7. Напишіть функцію cloneObject, яка приймає об'єкт та повертає його клон.
* Використайте розпилення.
*
* 8. Напишіть функцію findMax, яка приймає масив чисел та повертає найбільше
* число в масиві. Виконання без циклу
*
* 9. Напишіть функцію filterEvens, яка приймає масив чисел та повертає новий
* масив, що містить тільки парні числа.
*
* 10. Напишіть функцію sumArray, яка приймає масив чисел та повертає суму всіх
* елементів масиву.(reduce)
*
* 11. Створіть кнопку, яка при натисканні змінює текст параграфа на "Button
* clicked!".
*
* 12. Створіть форму з текстовим полем та кнопкою. При натисканні на кнопку
* виведіть значення текстового поля в консоль.
*/


//  1. Напишіть функцію sum, яка приймає два аргументи та повертає їх суму.
//  Результат функції запишіть в зміну та виведіть в консоль.

// const sum = function (num1, num2) {
//     const sumNum = num1 + num2;
//     return sumNum;
// };
// console.log(sum(5, 10));



//  2. Напишіть функцію greet, яка приймає ім'я як аргумент та повертає рядок
//  "Hello, [ім'я]". Результат функції вивести на сторінку

// const textRef = document.querySelector('.text-name');

// const greet = function (name) {
//     const helloName = `Hello, ${name}.`;
//     return textRef.textContent = helloName;
// }

// console()



// 3. Напишіть функцію isEven, яка приймає число та повертає true, якщо воно
// парне, і false - якщо непарне. Результат вивести в консоль


// const number = function(num) {
//     if(num % 2 === 0){
//         console.log(true);
//     } else{
//         console.log(false);
//     }
// };

// number(9);



// 4. 

// function squareArray(arr) {
// return arr.map(function(num) {
// return num * num;
// });
// }

// const numbers = [5, 12, 8, 20, 15, 7, 10, 3, 18, 25];
// const squaredNumbers = squareArray(numbers);

// console.log(squaredNumbers);



// 5. Створіть об'єкт person з властивостями name, age та методом introduce,
//  який повертає рядок "My name is [name] and I am [age] years old".
//  Перезапишіть властивість name та знову скористайтеся методом introduce.

// const person = {
//     name: "John",
//     age: 30,
//     introduce: function() {
//     return `My name is ${this.name} and I am ${this.age} years old`;
//     }
//     };
    
//     console.log(person.introduce());
    
//     person.name = "Alice";
    
//     console.log(person.introduce());



// 6. Напишіть функцію isAdult, яка приймає об'єкт person та повертає true,
//  якщо вік більше або дорівнює 18, і false - якщо менше.


// const isAdult = function (person) {
//     if(person >= 18){
//         console.log(true);
//     } else{
//         console.log(false);
//     }
// };

// isAdult(18);


// 7


// function cloneObject(obj) {
//     return { ...obj };
//     }
    
//     const originalObject = { a: 1, b: 2, c: 3 };
//     const clonedObject = cloneObject(originalObject);
    
//     console.log(clonedObject);



// 9. Напишіть функцію filterEvens, яка приймає масив чисел та повертає новий
//  масив, що містить тільки парні числа.

// const filterEvens = function (nums) {
//     const result = nums.filter((num)=>{return num % 2 === 0});
//     console.log(result);
//     return result;
// };

// const numbers = [5, 12, 8, 20, 15, 7, 10, 3, 18, 25];

// filterEvens(numbers)