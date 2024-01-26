// const fnA = function(){
//     console.log('Hello');
// }

// fnA();


// Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug
//  Заголовок статті складається тільки з букв та пропусків


const slugify = function (string) {
    const slugTitle = string.toLocaleLowerCase().split(' ').join('-');
    return slugTitle
}

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
