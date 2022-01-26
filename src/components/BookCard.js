import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const dispatch = useDispatch();

export default function BookCard() {
  const remove = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('bookId');
    dispatch(removeBook(id));
  };
  return (
    <section className="book-card">
      <div className="title-section">
        <span className="category">
          Category
        </span>
        <h2 className="book-title">Book Title</h2>
        <span className="actions">
          <Link to="/comments">Comments</Link>
          |
          <Link to="/remove" bookId="123" onClick={(e) => remove(e)}>Remove</Link>
          |
          <Link to="/edit">Edit</Link>
        </span>
      </div>
      <div className="progress-section">
        <span className="progress-bar" />
        <span className="progress-status">
          <span className="progress-metric">65%</span>
          <span className="status">Completed</span>
        </span>
      </div>
      <div className="chapter-section">
        <span className="current-chapter">CURRENT CHAPTER</span>
        <span className="chapter">Chapter</span>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </section>
  );
}
