import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import { connect, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { addBook, removeBook } from '../../redux/books/booksActions';

import BookList from './BookList';
import CreateNewBook from './CreateNewBook';
import { fetchUsers, postBooks, deleteBooks } from '../../redux/books/booksActions';

import styles from './Books.module.css';

const Books = (props) => {
  const { fetchUsers, userData } = props;
  useEffect(() => {
    fetchUsers();
  }, []);

  const dispatch = useDispatch();

  const removeBookFromStore = (id) => {
    dispatch(deleteBooks(id));
  };

  const submitBookToStore = (title, category) => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(postBooks(newBook));
  };

  return (
    <div className={styles.main_page}>
      <BookList
        books={userData}
        removeBookProps={removeBookFromStore}
      />
      <CreateNewBook submitBookToStoreProps={submitBookToStore} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.booksReducer.users,
});

const mapDispatch = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

Books.propTypes = {
  userData: PropTypes.instanceOf(Object).isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatch)(Books);
