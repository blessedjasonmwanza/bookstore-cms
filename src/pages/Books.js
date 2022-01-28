import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import AddBook from '../components/AddBook';
import BookCard from '../components/BookCard';
import { fetchBook } from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const keys = [];
  useEffect(() => {
    dispatch(fetchBook());
  }, []);
  const bookList = books.map((book) => {
    if (!keys.includes(book.id)) {
      keys.push(book.id);
      return (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      );
    }
    return null;
  });
  return (
    <>
      {
      bookList
      }
      <div className="divider" />
      <AddBook />
    </>
  );
}
