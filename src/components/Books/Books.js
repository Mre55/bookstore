import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import CreateNewBook from './CreateNewBook';
import styles from './Books.module.css';

const Books = () => {
  const initialBooks = [
    {
      id: uuidv4(),
      bookName: 'Sample Book One',
    },
    {
      id: uuidv4(),
      bookName: 'Sample Book Two',
    },
    {
      id: uuidv4(),
      bookName: 'Sample Book Three',
    },
  ];

  const [books, setBooks] = useState(initialBooks);

  const removeBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  const addBook = (title) => {
    const newBook = {
      id: uuidv4(),
      bookName: title,
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className={styles.main_page}>
      <BookList
        books={books}
        removeBookProps={removeBook}
      />
      <CreateNewBook addBookProps={addBook} />
    </div>
  );
};
export default Books;
