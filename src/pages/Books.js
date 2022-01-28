import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import AddBook from '../components/AddBook';
import BookCard from '../components/BookCard';
import { fetchBook } from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(fetchBook());
  }, []);
  return (
    <>
      {
      books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))
      }
      <AddBook />
    </>
  );
}
