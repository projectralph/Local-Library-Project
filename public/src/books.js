function findAuthorById(authors, id) {
  return authors.find(authors => authors.id === id);
}


function findBookById(books, id) {
  return books.find(books => books.id === id);
}


function partitionBooksByBorrowedStatus(books) {
  const available = books.filter((book) => book.borrows[0].returned);
  const borrowed = books.filter((book) => !book.borrows[0].returned);
  return [borrowed, available];}

  
function getBorrowersForBook(book, accounts) {
 let borrowBook = book.borrows.map((borrow) => {
   let accountInfo = findAuthorById(accounts, borrow.id);
   accountInfo.returned = borrow.returned
   return accountInfo
 }).slice(0,10)
 return borrowBook
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
