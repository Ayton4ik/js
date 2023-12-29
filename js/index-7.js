// 4. Перепишіть код нижче використовуючи одну конструкцію switch. 
//     Результат виведіть на екран. Данні отримайте з prompt:
//         let a = значення prompt;
//         if (a === 0) {
//         message = 0;
//         }
//         if (a === 1) {
//         message = 1;
//         }

//         if (a === 2 || a === 3) {
//         message = '2,3';
//         }

// SWITCH

// let a = 3;
// let message

// switch (a){
//     case 0:
//         message = 0;
//         console.log(message);
//         break;
//     case 1:
//         message = 1;
//         console.log(message);
//         break;
//     case 2:
//         case 3:
//             message = '2,3';
//             console.log(message);
//             break;
// default:
//     console.log('Такого немає(((');
//     break;
// }

// 2. Перепишіть конструкцію if, використовуючи умовний оператор '?':
// let result;
// if (a + b < 4) {
// result = 'Нижче';
// } else {
// result = 'Вище';
// }

// const result = 5 + 2 < 4 ? 'Нижче': 'Вище';
// console.log(result);

// 2. Напиши скрипт який перевіряє можливість відкрити чат з користувачем. 
//     Для цього користувач має бути:
//                 другом
//                 онлайн
//                 без режиму не турбувати
//         const isOnline = false;
//         const isFriend = true;
//         const isDnd = false;

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd;
// console.log('Чи має користувач доступ до чату: ', canOpenChat);

// 5. Супертворчі завдання
//             Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 
// 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції.
//             - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//             - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//                          - 'Посилка буде відправлена сьогодні'
//                          - 'Вам передзвонит менеджер';

// let option = 1;
// let message;

// switch (option) {
//     case 1:
//         message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'; 
//         break;
//     case 2:
//         message = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00';
//         break
//     case 3:
//         message = 'Посилка буде відправлена сьогодні';
//         break
//     default:
//         message = 'Вам передзвонит менеджер';
//         break;
// }
// console.log(message);
