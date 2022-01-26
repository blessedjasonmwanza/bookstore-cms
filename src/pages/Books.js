import React from 'react';
import BookCard from '../components/BookCard';

export default function Books() {
  return (
    <>
      <BookCard />
      <form className="add-book-form">
        <h2>ADD NEW BOOK</h2>
        <input placeholder="Book title" className="input-title" required />
        <select name="category" className="input-category" required>
          <option defaultValue>Category</option>
        </select>
        <button type="submit" className="add-book">ADD BOOK</button>
      </form>
    </>
  );
}
