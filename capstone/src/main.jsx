// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { BooksProvider } from './context/BooksContext';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ThemeProvider>
        <BooksProvider>
          <App />
        </BooksProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}