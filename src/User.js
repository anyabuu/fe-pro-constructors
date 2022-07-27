import { Book } from './Book.js';

/**
 * @param {string} name
 * @param {Date} date
 * @constructor
 * @property {string} name
 * @property {Date} date
 * @property {Book[]} myBooks
 * @property {User[]} friends
 * @property {Book[]} likes
 */
export function User(name, date) {
  this.name = name;
  this.date = date;

  this.myBooks = [];
  this.friends = [];
  this.likes = [];

  this.addToFriends = function (newFriend) {
    const setUserArr = new Set(this.friends);
    const setFriendArr = new Set(newFriend.friends);

    if (setUserArr.has(newFriend)) {
      setUserArr.delete(newFriend);
      this.friends = [...setUserArr];
      setFriendArr.delete(this);
      newFriend.friends = [...setFriendArr];
    } else {
      this.friends.push(newFriend);
      newFriend.friends.push(this);
    }
  };

  this.likeBook = function (book) {
    const setLikedBooks = new Set(this.likes);
    const setLikedUsers = new Set(book.likedUsers);

    if (setLikedBooks.has(book)) {
      setLikedBooks.delete(book);
      this.likes = [...setLikedBooks];
      setLikedUsers.delete(this);
      book.likedUsers = [...setLikedUsers];
    } else {
      this.likes.push(book);
      book.likedUsers.push(this);
    }
  };

  this.removeFriend = this.addToFriends;

  this.unlikeBook = this.likeBook;

  Object.defineProperty(this, 'friendsNames', {
    get() {
      let res = this.friends.map(function ({ name }) {
        return name;
      });

      return res.join(', ');
    },
  });

  Object.defineProperty(this, 'likedBooks', {
    get() {
      let res = this.likes.map(function ({ title }) {
        return title;
      });

      return res.join(', ');
    },
  });

  Object.defineProperty(this, 'publishedBooks', {
    get() {
      let res = this.myBooks.map(function (item) {
        return item.title;
      });

      return res.join(', ');
    },
  });
}
