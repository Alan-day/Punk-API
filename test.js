const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

// Write a function to filter books by year, The function should take two parameters and return the filtered books array
// Call the filterBooksByYear function and pass in the books array and a year
// Map the filtered array to get an array of book titles
// Log the recent book titles

const filterBooksByYear = (booksArray, year) => {
  const newArray = booksArray.filter((book) => {
    if (book.year == year) {
      return book;
    }
  });
  return newArray.map((book) => {
    return book;
  });
};

console.log(filterBooksByYear(books, 1925));
