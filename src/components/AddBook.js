import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const newBook = {
      id: uuidv4(),
      title: form.book_title.value,
      category: form.book_category.value,
      author: '',
    };
    dispatch(addBook(newBook));
  };
  return (
    <form className="add-book-form" onSubmit={(e) => submitBookToStore(e)}>
      <h2>ADD NEW BOOK</h2>
      <input name="book_title" placeholder="Book title" className="input-title" required />
      <select name="book_category" className="input-category" required>
        <option defaultValue>Category</option>
      </select>
      <button type="submit" className="add-book">ADD BOOK</button>
    </form>
  );
}
