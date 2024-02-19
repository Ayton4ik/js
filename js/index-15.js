// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys){
//     console.log(key);

//     feedback[key];
// }

// const values = Object.values(feedback);
// console.log(values);
// for (const value of values){
//     console.log(value);
// }

// console.log(feedback);

// const friends = [
//     {
//     name: 'Mango',
//     online: false
//     },
//     {
//     name: 'Kiwi',
//     online: true
//     },
//     {
//     name: 'Poly', 
//     online: false 
//     },
//     { 
//     name: 'Ajax', 
//     online: false 
//     },
// ];

// for (const friend of friends){
//     console.log(friend);
// }    
    
// console.table(friends);

// const findFriendByName = function (friends, name) {
//     for (const friend of friends){
//     console.log(friend.name);
//     if (friend.name === 'Poly'){
//         console.log('')
//     }
//     }   
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

// console.log(numbers);

// const fnA = function (...rest) {
//     console.log(rest);
// };

// fnA(10);
// fnA(10, 20);
// fnA(25, 35, 45);

/*
* Працюємо з колекцією товарів в кошику:
* - getItems()
* - add(product)
* - remove(productName)
* - clear()
* - countTotalPrice()
* - increaseQuantity(productName)
* - decreaseQuantity(productName)
*
* { name: '🍎', price: 50 }
* { name: '🍇', price: 70 }
* { name: '🍋', price: 60 }
* { name: '🍓', price: 110 }
*/

// const cart = {
//     items: [],
//     getItems() {
//         console.log(this.items);
//     },
//     add(product) {
//         for (const item of this.items){
//             if (item.name === product.name){
//                 item.quantity += 1;
//                 return;
//             }
//         };
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };
//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         let index;
//         for (const item of this.items){
//             if (item.name === productName){
//                 index = this.items.indexOf(item);
//                 this.items.splice(index, 1);
//             }
//         }
//         return this.items;
//     },
//     clear() {},
//     countTotalPrice() {},
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// };
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍎', price: 50 });
// console.log(cart);
// console.log(cart.getItems());
// console.log(cart.remove('🍎'));
// console.log(cart.remove('🍋'));