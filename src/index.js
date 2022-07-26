import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';


const user = new User('John', new Date(2020, 1, 1));
const user2 = new User('user2', new Date(2020, 1, 1));
const friend = new User('friend1', new Date(2021, 1, 2));
const friend2 = new User('friend2', new Date(2021, 1, 2));


const billy = new Author('Billy', new Date(1944, 1, 1));
const jonny = new Author('Jonny', new Date(1944, 1, 1));


const book1984 = new Book('1984', new Date(1949, 5, 8), user, [billy, jonny]);
const smth = new Book('Smth book', new Date(2000, 5, 8), user2, [billy]);
const lola = new Book('lola', new Date(2000, 5, 8), friend, [billy]);

console.log(billy)
console.log(jonny)

console.log(book1984.suggestedBooks)
console.log(book1984.suggestedPublicators)


// console.log(book1984.user)
//
// console.log(user)
//
//
// user.addToFriends(friend)
// user.addToFriends(friend2)
//
// console.log(user)
//
// user.unlikeBook(book1984)
//
// console.log(user.friendsNames)
//
// console.log(user.likedBooks)



