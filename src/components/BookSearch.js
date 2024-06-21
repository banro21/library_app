import React, { useState } from 'react';
import { books } from '../data/books';
import styles from './BookSearch.module.css';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(
    book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.bookSearch}>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.bookGrid}>
        {filteredBooks.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <img src={book.image} alt={book.title} className={styles.bookImage} />
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.bookAuthor}>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
