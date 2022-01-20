import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import styles from './Books.module.css';

const CreateNewBook = (props) => {
  const { submitBookToStoreProps } = props;

  const [inputBook, setInputBook] = useState({ title: '', author: '' });

  const [inputBookCategory, setInputBookCategory] = useState('Category');

  const onChange = (e) => {
    setInputBook({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputBook.title.trim() && inputBook.author.trim()) {
      submitBookToStoreProps(inputBook.title, inputBook.author, inputBookCategory);
      setInputBook({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div className={styles.formSection}>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          className={styles.titleInput}
          name="title"
          value={inputBook.title}
          onChange={onChange}
          required
        />
        <input
          type="text"
          placeholder="Author"
          className={styles.titleInput}
          name="author"
          value={inputBook.author}
          onChange={onChange}
          required
        />
        <select
          className={styles.inputDropDown}
          value={inputBookCategory}
          onChange={(e) => {
            const bookCat = e.target.value;
            setInputBookCategory(bookCat);
          }}
        >
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button
          type="submit"
          className={styles.formButton}
        >
          <p>ADD BOOK</p>
        </button>
      </form>
    </div>
  );
};

CreateNewBook.propTypes = {
  submitBookToStoreProps: PropTypes.func.isRequired,
};

export default CreateNewBook;
