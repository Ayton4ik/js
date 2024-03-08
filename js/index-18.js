// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 90, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// const anyHardcorePlayers = players.every((player) => {
//     return player.timePlayed > 100;
// });
// console.log(anyHardcorePlayers);

// const numbers = [5, 10, 15, 20, 25];

// const totalSum = numbers.reduce((acc, numbers) => {
//     acc += numbers;
//     return acc;
// }, 0);
// console.log(totalSum);




// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary)
// const result = totalSalary.reduce((acc, salary) => {
//     acc += salary;
//     return acc;
// }, 0);
// console.log(result);




// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const allQuantity = cart.reduce((allQuantity, {price, quantity}) => {
//     // const {price, quantity} = product;
//     return allQuantity += quantity * price;
// }, 0);
// console.log(allQuantity);


// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);
// console.log(allTags);