import { addNewBook, fetchBooks, deleteBook } from '../../components/Api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const initialState = [];
export const addBook = (newBook) => async (dispatch) => {
  await addNewBook(newBook);
  dispatch({
    type: ADD_BOOK,
    payload: newBook,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteBook(payload.id);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

export const fetchBook = () => async (dispatch) => {
  const book = await fetchBooks();
  const bookList = Object.entries(book).map(([key, value]) => {
    const [bookEntries] = value;
    return {
      id: key,
      ...bookEntries,
    };
  });
  dispatch({
    type: FETCH_BOOKS,
    payload: bookList,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case FETCH_BOOKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
