import React from 'react';
import { PropTypes } from 'prop-types';

import BookComponent from './BookComponent';
import styles from './Books.module.css';

const BookList = (props) => {
  // const { removeBookProps, books } = props;
  const { books } = props;

  return (
    <ul className={styles.book_section_container}>
      {books.map((book) => (
        <BookComponent
          key={book}
          // id={book.id}
          book={book}
          // removeBookProps={removeBookProps}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  // removeBookProps: PropTypes.func.isRequired,
  books: PropTypes.instanceOf(Object).isRequired,
};

export default BookList;
