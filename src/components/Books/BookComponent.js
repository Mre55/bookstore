import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './Books.module.css';
import status from '../../images/statusProgressNew.png';

const BookComponent = (props) => {
  const { book, removeBookProps, id } = props;

  // console.log('book title coming from API is ', book.title.split(','));
  const bookTitleSplited = book.title.split(',');
  return (
    <li className={styles.book_section}>
      <div className={styles.book_section_left}>
        <span className={styles.bookCategory}>{ book.category }</span>
        <span className={styles.bookTitle}>{ bookTitleSplited[0] }</span>
        <span className={styles.bookAuthor}>{ bookTitleSplited[1] }</span>
        <div className={styles.bookCommentEdit}>
          <span>Comments</span>
          <span className={styles.commentVerticalLine} />
          <span>Edit</span>
        </div>
      </div>
      <div className={styles.statusProgress}>
        <img src={status} alt="stauts section" width={280} />
      </div>
      <span className={styles.statusVerticalLine} />
      <button
        onClick={() => removeBookProps(id)}
        type="button"
        className={styles.bookRemoveBtn}
      >
        <p>REMOVE</p>
      </button>
    </li>
  );
};

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired,
  removeBookProps: PropTypes.func.isRequired,
};

export default BookComponent;
