// const playList = {
//     name: 'myPlayList',
//     raiting: 10,
//     tracks: ['track-1', 'track-2', 'track-3'],
// }

// console.log(playList);

// console.log(playList.name);
// console.log(playList['name']);

// Задача 1

// Створіть об'єкт "person" з властивостями "name", "age", "gender".

// const person = {
//     name: 'Арсеній',
//     age: 14,
//     gender: 'male'
// }

// person.age += 1;
// person.university = 'Verhovina';
// console.log(person);

// const playlist = {
//     name: 'Плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     changeName(newName){
//         this.name = newName;
//     },
//     addTrack(track){
//         this.tracks.push(track);
//     },
//     updateRating(newRating){
//         this.rating = newRating;
//     },
//     getTrackCount(){
//         return this.tracks.length;
//     }
// }

// console.log(playlist);
// playlist.changeName('Супер плейлист');

// playlist.addTrack('трек-4');

// playlist.updateRating(10);

// console.log(playlist.getTrackCount());

// console.log(playlist);

// Задача 1

// Створіть об'єкт "person" з властивостями "name", "age", "gender".
//  Додайте до об'єкту метод, який буде виводити на екран повідомлення
//  про особистість зі значеннями всіх властивостей.

// const person ={
//     name: 'Arsenii',
//     age: 14,
//     gender: 'male',
//     getPersonData(){
//         console.log(`Ваше ім'я ${this.name}, ваш вік ${this.age}, ваша стать ${this.gender}`);
//     }
// }
// person.getPersonData();


// const students = [
//     {
//     name: 'student-1',
//     age: 15,
//     gender: 'male',
//     grade: 9,
//     },
//     {
//     name: 'student-2',
//     age: 16,
//     gender: 'female',
//     grade: 10,
//     },
//     {name: 'student-3',
//     age: 16,
//     gender: 'male',
//     grade: 8,
//     },
//     ]
    
    
    
//     const getAverageGrade = function (students){
//     let totalGrade = 0;
//     for (let student of students) {
//     totalGrade += student.grade
    
//     console.log(student);
//     }
    
//     const averageGrade = totalGrade / students.length;
//     return averageGrade;
//     }
    
//     console.log(getAverageGrade(students));