
// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import Loader from '../components/Loader';
import Img1 from '../assets/Book1.png';

function Home() {
  // Books list
  const [books, setBooks] = useState([]);
  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call delay
    setTimeout(() => {
      // Initial book data
      setBooks([
        { id: 1, title: 'Gilead', author: 'Marilynne Robinson', genre: 'Narrative Fiction', borrowed: false, image: "/images/Book1.png" },
        { id: 2, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', borrowed: true, image: "/images/Book2.png" },
        { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian', borrowed: false, image: "/images/Book1.png" },
        { id: 4, title: '1984', author: 'George Orwell', genre: 'Dystopian', borrowed: false, image: "/images/Book1.png" },
        { id: 5, title: '1984', author: 'George Orwell', genre: 'Dystopian', borrowed: false, image: "/images/Book1.png" },
        { id: 6, title: '1984', author: 'George Orwell', genre: 'Dystopian', borrowed: false, image: "/images/Book1.png" },
        { id: 7, title: '1984', author: 'George Orwell', genre: 'Dystopian', borrowed: false, image: "/images/Book1.png" },
        { id: 8, title: '1984', author: 'George Orwell', genre: 'Dystopian', borrowed: false, image: "/images/Book1.png" },
        { id: 9, title: '1984', author: 'George Orwell', genre: 'Dystopian', borrowed: false, image: "/images/Book1.png" },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Book List</h2>

      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            books={books}
            setBooks={setBooks}
          />
        ))
      )}
    </div>
  );
}

export default Home;