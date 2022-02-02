function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
let bookBorrowed = 0; // since we are adding we want to start by intializing a variable with 0 first 
 books.forEach((books) => {
   if(!books.borrows[0].returned === true)// then we want to go through the array and see what is returned or not 
 bookBorrowed++;
 }); //if the book hasn't been returned add 1
 return bookBorrowed//lastly return the full amount 
}

function getMostCommonGenres(books) {
  const bookGenre = books.reduce((acc, book) => {
    const {genre} = book
    if(!acc[genre]) { 
      acc[genre] = {
      name: genre, count : 1
    }
  } else acc[genre].count++
  return acc}, {})
  return Object.values(bookGenre).sort((a, b) => b.count - a.count).splice(0, 5)
}
  
function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
  }).sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0,5)

}

function getMostPopularAuthors(books, authors) {
  let result = []
  authors.forEach((author) => {
let bookAuthor = books.filter((book) => book.authorId === author.id)
let authBorrow = bookAuthor.reduce((bookTotal, book) => bookTotal + book.borrows.length, 0)
result.push({
  name: author.name.first + " " + author.name.last, 
  count: authBorrow
})
  })
  return result.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0, 5)
}
  

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
