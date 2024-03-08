// const fnA = function (cb) {
//     const a = 5;
//     const b = 10;
//     cb(a)
// }

// const fnB = function (number) {
//     console.log(number);
// }

// console.log(fnA(fnB));


// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// numbers.forEach(function(number) {
//     total += number;
//     console.log(number);
// })

// console.log(total);


// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// numbers.forEach(function(number){
//     if (number % 2 === 0){
//         total += number;
//     }
// })

// console.log(total);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// // const playerNames = players.map((player) => {
// //     return player.name
// // });
// // console.log(playerNames);


// const playerIdToUpdate = 'player-3';

// const upatedPlayers = players.map((player) => {
//     if (player.id === playerIdToUpdate){
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100
//         };
//     }else {
//         return {
//             ...player
//         };
//     };
// });
// console.log(upatedPlayers);

// Порахувати загальну кількість товарів в кошику

// const cart = [
// { label: 'Apples', price: 100, quantity: 2 },
// { label: 'Bananas', price: 120, quantity: 3 },
// { label: 'Lemons', price: 70, quantity: 4 },
// ];

// let totalAmount = 0;
// cart.forEach((item) => {
//     totalAmount += item.price * item.quantity;
// });
// console.log(totalAmount);

// const newCart = cart.map((item) => {
//     return {
//         ...item,
//         quantity: item.quantity + 1
//     }
// });
// console.log(newCart);



// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter((number) => {
//     return number <= 10;
// });
// console.log(filteredNumbers);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// const getOnlinePlayers = function (players) {
//     const onlinePlayers = players.filter((player) => {
//         return player.online;
//     });
//     return onlinePlayers;
// };

// console.log(getOnlinePlayers(players));