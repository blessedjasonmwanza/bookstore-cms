import React from 'react';

export default function AddBook() {
  return (
    <form className="add-book-form">
      <h2>ADD NEW BOOK</h2>
      <input placeholder="Book title" className="input-title" required />
      <select name="category" className="input-category" required>
        <option defaultValue>Category</option>
      </select>
      <button type="submit" className="add-book">ADD BOOK</button>
    </form>
  );
}
