import React from 'react';
import AddBook from '../components/AddBook';
import BookCard from '../components/BookCard';

export default function Books() {
  // List (Dummy)to demonstrate books interactions that are to come from the API
  const books = [
    <BookCard key="1" />,
    <BookCard key="2" />,
    <BookCard key="3" />,
  ];
  return (
    <>
      { books }
      <AddBook />
    </>
  );
}
