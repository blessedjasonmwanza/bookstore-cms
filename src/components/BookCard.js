import React from 'react';
import { Link } from 'react-router-dom';

export default function BookCard() {
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
          <Link to="/remove">Remove</Link>
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
