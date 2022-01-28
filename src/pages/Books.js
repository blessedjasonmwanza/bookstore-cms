import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import AddBook from '../components/AddBook';
import BookCard from '../components/BookCard';

export default function Books() {
  const books = useSelector((state) => state.booksReducer);
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
