
// src/pages/Home.jsx
import React, { useState, useEffect, useContext } from 'react';
import BookCard from '../components/BookCard';
import Loader from '../components/Loader';
import { useTheme } from "../context/ThemeContext";
import { BooksContext } from '../context/BooksContext';

function Home() {
  // Loading state
  const [loading, setLoading] = useState(true);
  const { books, setBooks } = useContext(BooksContext);

  const { theme } = useTheme();
  const pageStyle = {
    backgroundColor: theme === "light" ? "#F3FBE6" : "#18235D",
    minHeight: "100vh",
    padding: "2rem",
    width: "1685px"
  }
  const gridStyle = {
    display:"grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    marginTop: "20px"
  }
  useEffect(() => {
    // Simulate an API call delay
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={pageStyle}>
      <h2>Book List</h2>

      <div style={gridStyle}>
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
    </div>
  );
}

export default Home;
