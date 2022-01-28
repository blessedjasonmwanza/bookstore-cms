import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeBook } from '../redux/books/books';

export default function BookCard(props) {
  const dispatch = useDispatch();
  const { id, title, category } = props;
  const remove = (e) => {
    e.preventDefault();
    const bookid = e.target.getAttribute('bookid');
    dispatch(removeBook({ id: bookid }));
  };
  return (
    <section className="book-card">
      <div className="title-section">
        <span className="category">
          {category}
        </span>
        <h2 className="book-title">{title}</h2>
        <span className="actions">
          <Link to="/comments">Comments</Link>
          |
          <Link to="/remove" bookid={id} onClick={(e) => remove(e)}>Remove</Link>
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

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
