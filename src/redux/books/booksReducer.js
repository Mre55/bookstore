// import { v4 as uuidv4 } from 'uuid';

// import {
//   ADD_BOOK,
//   REMOVE_BOOK,
// } from './booksActions';

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './booksActions';

// const initialState = [
//   {
//     id: uuidv4(),
//     bookName: 'Sample Book One',
//   },
//   {
//     id: uuidv4(),
//     bookName: 'Sample Book Two',
//   },
//   {
//     id: uuidv4(),
//     bookName: 'Sample Book Three',
//   },
// ];

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return [...state, action.payload];
//     case REMOVE_BOOK:
//       return state.filter((book) => book.id !== action.payload);
//     default:
//       return state;
//   }
// };

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
