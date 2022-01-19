import axios from 'axios';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
// export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
// export const removeBook = (payload) => ({
//   type: REMOVE_BOOK,
//   payload,
// });

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest);
  axios
    .get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cYciEyhr60x1UGcMTeCO/books')
    .then((response) => {
      // console.log('coming values response ', Object.values(response.data));
      // console.log('coming keys response ', Object.keys(response.data));
      // const [ke, val] = response.data;
      // console.log('ke is ', ke, 'val is ', val);
      // console.log('coming all response ', response.data);
      const users = Object.values(response.data).map((x) => x[0]);
      // const users = Object.values(response.data).map((x) => x[0]);
      // const users = response.data;
      // const usersKeys = Object.keys(response.data).map((x) => x[0]);
      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      const errorMsg = error.Message;
      dispatch(fetchUsersFailure(errorMsg));
    });
};

export const postBooks = (newBook) => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cYciEyhr60x1UGcMTeCO/books', {
    item_id: newBook.item_id,
    title: newBook.title,
    category: newBook.category,
  })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
};
