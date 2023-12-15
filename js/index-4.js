/*
 * Пошук в рядку з методом includes()
 */

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';

// const string1 = 'Привіт, я Марк Цукерберг, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLocaleLowerCase().includes(blacklistedWord2.toLocaleLowerCase()));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// Завдання 2

//  Створити змінну, яка містить рядок з вашим ім'ям та прізвищем.
//  Використовуючи метод .length, вивести в консоль кількість символів у рядку.

// const MyName = 'Арсеній';
// console.log(MyName.length);

// Завдання 3

// Створити змінну, яка містить рядок з вашим ім'ям.
// Використовуючи метод .toUpperCase(), перетворити рядок у верхній регістр
//  та вивести результат в консоль.

// const MyName = 'Арсеній';
// console.log(MyName.toUpperCase());

// Завдання 4

// Створити змінну, яка містить рядок з вашим ім'ям.
//  Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.

// const MyName = 'Арсеній';
// console.log(MyName.charAt());

// Завдання 5

// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем.
//  Використовуючи метод .indexOf(), знайти і вивести в консоль позицію,
//   на якій знаходиться пробіл між ім'ям та прізвищем.

// const MyNameSurname = 'Михальчук Арсеній';
// console.log(MyNameSurname.indexOf(' '));

// Завдання 6

// Створити змінну, яка містить рядок з вашим ім'ям.
//  Використовуючи метод .replace(), замінити першу літеру
//   вашого імені на символ "@" та вивести результат в консоль.

// const MyName = 'Арсеній';
// console.log(MyName.replace('А','@'));

// Завдання 7

// Створити змінну, яка містить рядок зі словом "JavaScript".
//  Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".

// const js = 'JavaScript';
// console.log(js.substring(0, 4));

// Завдання 8

// Створи змінну яка буде зберігати рядок “Ваш баланс поповнено на 1”.
//  Додай в кінець рядка довільну кількість нулів. Довжину рядка дізнайся за допомогою властивості.

// const balance = 'Ваш баланс поповнено на 1';
// console.log(balance.length);
// const balance2 = balance.padEnd(30, '0');
// console.log(balance2);

// Завдання 9

// Створити разом з учнями скрипт, який буде отримувати від користувача
//  число (кількість хвилин) і буде виводити рядок в форматі часу як результат.
//   Наприклад 80 виведе 01:20 450 - 07:30. Можете використати наступні формули
        // const numberHours = отримане число / 60;
        // const days = Math.floor(numberHours / 24);
        // const hours = Math.floor(numberHours % 60);
        // const modHours = String(hours).padStart(2, 0);
        // const minutes = отримане число % 60;
        // const modMinutes = String(minutes).padStart(2, 0); 

const namber = prompt('Введіть кількість хвилин');
const numberHours = namber / 60;
const days = Math.floor(numberHours / 24);
const hours = Math.floor(numberHours % 60);
const modHours = String(hours).padStart(2, 0);
const minutes = namber % 60;
const modMinutes = String(minutes).padStart(2, 0); 
const result = `Ваша відповідь: ${modHours}:${modMinutes}`;
alert(result);