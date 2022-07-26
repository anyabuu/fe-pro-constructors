import { Author } from './Author.js';
import { User } from './User.js';

/**
 * @param {string} title
 * @param {Date} year
 * @param {User} publicationBy
 * @param {Author[]} authors
 * @constructor
 * @property {string} title
 * @property {Date} year
 * @property {Author[]} authors
 * @property {User[]} likedUsers
 * @property {User} publicationBy
 */
export function Book(title, year, publicationBy, authors) {
  this.title = title;
  this.year = year;
  this.publicationBy = publicationBy;
  this.authors = authors;
  this.likedUsers = [];

  authors.map(function (item) {
    item.books.push(this);
  }, this);

  publicationBy.myBooks.push(this);

  Object.defineProperty(this, 'suggestedBooks', {
    get() {
      let result = authors.reduce(function (acc, curr) {
        acc.push(
          curr.books.map(function (item) {
            return item.title;
          })
        );

        return acc;
      }, []);

      let set = new Set(result.flat());

      if (set.has(this.title)) {
        set.delete(this.title);
      }

      return [...set].join(', ');
    },
  });

  Object.defineProperty(this, 'suggestedPublicators', {
    get() {
      let result = authors.reduce(function (acc, curr) {
        console.log(curr.name);

        acc.push(
          curr.books.map(function (item) {
            if (item.publicationBy.name !== curr.name) {
              return item.publicationBy.name;
            }
          })
        );

        return acc;
      }, []);

      return [...new Set(result.flat())].join(', ');
    },
  });
}
