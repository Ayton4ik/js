// const fnA = function() {
//     console.log('Hello');
// }

// fnA();


// Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug
//  Заголовок статті складається тільки з букв та пропусків


// const slugify = function (string) {
//     const slugTitle = string.toLocaleLowerCase().split(' ').join('-');
//     return slugTitle;
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

// const fnA = function (a=10, b=15) {
//     console.log(a);
//     console.log(b);
//     return a + b;
// }

// console.log(fnA(100, 200));


// console.log(fnB());

// function fnB () {
//     return 10;
// }

// Задача 1

// Напиши функцію calculateTotalPrice(items)
// яка приймає масив цін і повертає їх сумму

// const calculateTotalPrice = function (items) {
//     let sum = 0;
//     for (let number of items){
//         sum += number;
//     }
//     return sum;
// }
 
// console.log(calculateTotalPrice([1, 2, 3])); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600

// Задача 2

// Напиши функцію logItems(items) для перебора і логування массива
// 

// const logItems = function (items) {
//     for(let i of items){
//         console.log(i);
//     }
// }
 
// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

// Задача 3

// Напиши скрипт пошуку логіна
// Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
// Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (logins, loginsToFind) {
//     const message = logins.includes(loginsToFind) /*77+78 один код(перенесино шоб був читабельним)*/ 
//     ? `Користувач ${loginsToFind} знайдено.` : `Користувач ${loginsToFind} не знайдено.`;
//     return message;
// }
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

// Задача 4

// Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний.
// Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».

// const changeCase = function (string) {
//     let reversStr = '';
//     for (let character of string){
//         if (character === character.toLowerCase()){
//             reversStr += character.toUpperCase();
//         } else {
//             reversStr += character.toLowerCase();
//         }
//     }
//     return reversStr;
// }

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

