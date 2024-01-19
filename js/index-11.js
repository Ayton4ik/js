// Методи split() і join()

// const str = 'Hello!';
// const arrStr = str.split('');
// console.log(arrStr);

// const reversArr = arrStr.join('');
// console.log(reversArr);

// Методи: 1)push(Додає у кінець масиву);
//         2)pop(Видаляє з кінця масиву);
//         3)shift(Видаляє з початоку масиву);
//         4)unshift(Додає на початок масиву);

// Метод slice()
// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];
// const sliceNames = names.slice(2, 3);
// console.log(sliceNames);

// Метод concat()

// const arr1 = [5, 2, 6];
// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];
// const concatetArrs = arr1.concat(names);
// console.log(concatetArrs);

// Метот splice()

// Видалення
// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];
// const spliceName = names.splice(1, 1);
// console.log(spliceName);
// console.log(names);

// Додавання
// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];
// names.splice(4, 0, 'Marina', 'Egor');
// console.log(names);

// Заміна
// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];
// names.splice(2, 1, 'Marina');
// console.log(names);

// Задача 1

// Напиши скрипт, який об"єднує всі елементи массива в один рядок.
// Елементів може бути довільна кількість.
// Нехай елементи массива  в рядку будут розділені комою.
 
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = friends.join(', ');
// console.log(string);

// Повинно вийти 'Mango,Poly,Kiwi,Ajax'

// Задача 2

// Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
//  Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».

// const str = 'JavaScript';
// let reversStr = '';
// const strArr = str.split('');
// for (let character of strArr){
//     if (character === character.toLowerCase()){
//         reversStr += character.toUpperCase();
//     } else {
//         reversStr += character.toLowerCase();
//     }
// }
// console.log(reversStr);

// Задача 3

//  Робимо slug в URL з назви стратті (приклад на dev.to)
//  Заголовок статті складається тільки з букв та пропусків
//  - Нормалізуємо рядок
//  - Разбиваємо по словах
//  - Зшиваємо в рядок з розділителями
//  - Ченінг
// https://dev.to/devsatasurion/is-tailwind-css-accessible-52dc
// Повинно вийти top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';
// console.log(title);
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
// const titleArr = normalizedTitle.split(' ');
// console.log(titleArr);
// const string = titleArr.join('-');
// console.log(string);

// Задача 4

// Напиши скрипт який рахує суму елементів двух масивів.

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let result = 0;
// const array12 = array1.concat(array2);
// console.log(array12);

// for (const number of array12){
//     result += number;
// }
// console.log(result);