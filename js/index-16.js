// Розпрошеня об'єктів
// Object.prototype.assing()

// const a = { x: 1, y: 2};
// const b = { x: 5, c: 5};

// const c = { ...a, ...b };
// console.log(c);




// Деструктуризація об'єкту

// const playlist = {
//     name: 'Мій плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3
// }

// const {name, rating, tracks, trackCount} = playlist;

// // Деструктуризація масиву

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//     }
// };

// const {model, make} = car;
// const {year, features, safety: {airbags, antilock_brakes, stability_control}} = car;
// const {airbags, antilock_brakes, stability_control} = safety;
// console.log(model, antilock_brakes);

// Задача 1

// Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком
//  та використовує деструктуризацію для повернення рядка, що містить
//  інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".

// const person = {
// name: 'Nelli',
// surname: 'Laroy',
// age: 25
// };
// const personInfo = function({name, surname, age}){
//     return `Мене звати ${name} ${surname} і мені ${age} років`
// }
// console.log(personInfo(person));

// Задача 2

// Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента (ім'я,
//  прізвище, оцінки за три предмети) та використовує деструктуризацію для повернення
//  середньої оцінки студента.

// const student = {
// name: 'Bruce',
// surname: 'Lee',
// grades: [4, 5, 3]
// };

// const calculateAverageGrade = function({name, surname, grades}){
//     let averageGrade = 0;
//     for (const grade of grades){
//         averageGrade += grade;
//     };
//     return `Середній бал ${name} ${surname} буде ${averageGrade / grades.length}`;
// }
// console.log(calculateAverageGrade(student));

// Задача 3

// Напишіть функцію, яка отримує масив об'єктів з інформацією про товари
//  (назва, ціна, кількість) та використовує деструктуризацію для обчислення
//  загальної вартості товарів.

// const items = [
// { name: 'Футболка', price: 250, quantity: 2 },
// { name: 'Джинси', price: 800, quantity: 1 },
// { name: 'Кросівки', price: 1200, quantity: 1 }
// ];

// const calculateTotalCost = function(products){
//     let totalCost = 0;
//     for (const product of products){
//         totalCost += product.price * product.quantity;
//     }
//     return totalCost;
// }

// console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500

// Задача 4

// Напишіть функцію, яка отримує об'єкт зі списком електронних адрес (поле "emails")
//  та використовує деструктуризацію для повернення першої адреси в цьому списку.

// const person = {
// name: 'John',
// emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
// };
// const getFirstEmail = function({emails: [firstEmail]}){
//     return firstEmail;
// }

// console.log(getFirstEmail(person)); // 'john@gmail.com'