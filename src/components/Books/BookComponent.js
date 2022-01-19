import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './Books.module.css';

const BookComponent = (props) => {
  // const { book, removeBookProps, id } = props;
  const { book } = props;

  return (
    <li className={styles.book_section}>
      { book.title }
      <br />
      { book.category }
      <br />
      <br />
      {/* <button onClick={() => removeBookProps(book)} type="button"> */}
      <button type="button">
        Remove
      </button>
    </li>
  );
};

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  // id: PropTypes.string.isRequired,
  // removeBookProps: PropTypes.func.isRequired,
};

export default BookComponent;
