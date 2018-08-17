// const person = {
//     name: 'Jay',
//     age: 26,
//     location:{
//         city:'Pali',
//         temp: 23
//     }
// };


// const {name = 'anonymous', age} = person;
// const {city, temp:temperature} = person.location;

// console.log(name, age, city, temperature);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const item = ['coffee', '2', '2.5', '2.75'];

const [order, ,medium] = item;

console.log(`A medium sized ${order} costs ${medium}`);