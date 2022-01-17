import React from 'react';

import styles from './Books.module.css';

const Books = () => (
  <div className={styles.main_page}>
    <ul className={styles.book_section_container}>
      <li className={styles.book_section}>
        Sample Book One
        <br />
        <br />
        <button type="button">Remove</button>
      </li>
      <li className={styles.book_section}>
        Sample Book Two
        <br />
        <br />
        <button type="button">Remove</button>
      </li>
      <li className={styles.book_section}>
        Sample Book Three
        <br />
        <br />
        <button type="button">Remove</button>
      </li>
    </ul>

    <h3>ADD NEW BOOK</h3>
    <form>
      <label htmlFor="book-input" className="grid-item">
        <input id="book-input" type="text" placeholder="Book title" />
      </label>
      <label htmlFor="book-dropdown" className="grid-item">
        <select id="book-dropdown">
          <option value="" disabled selected>Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
      </label>
      <button type="button" className="grid-item">ADD BOOK</button>
    </form>
  </div>
);
export default Books;
