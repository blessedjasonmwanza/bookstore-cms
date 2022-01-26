import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import your Action Creators
import { addBook } from '../redux/books/books';

const dispatch = useDispatch();

export default function AddBook() {
  const submitBookToStore = (e) => {
    const form = e.target.elements;
    console.log(form);
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: form.book_title.value,
      category: form.book_category.value,
      author: '',
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <form className="add-book-form" onSubmit={(e) => submitBookToStore(e)}>
      <h2>ADD NEW BOOK</h2>
      <input placeholder="Book title" className="input-title" required />
      <select name="category" className="input-category" required>
        <option defaultValue>Category</option>
      </select>
      <button type="submit" className="add-book">ADD BOOK</button>
    </form>
  );
}
