import React, { createContext, useState } from 'react';
import Book1 from '../assets/Book1.png';
import Book2 from '../assets/Book2.png';
import Book3 from '../assets/Book3.png';
import Book4 from '../assets/Book4.png';
import Book5 from '../assets/Book5.png';
import Book6 from '../assets/Book6.png';
import Book7 from '../assets/Book7.png';
import Book8 from '../assets/Book8.png';
import Book9 from '../assets/Book9.png';
import Book10 from '../assets/Book10.jpg';
import Book11 from '../assets/Book11.jpeg';
import Book12 from '../assets/Book12.jpeg';

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([
    { id: 1, title: 'Gilead', author: 'Marilynne Robinson', genre: 'Narrative Fiction', borrowed: false, image: Book1 },
    { id: 2, title: 'Dracula', author: 'Bram Stoker', genre: 'Gothic Horror', borrowed: true, image: Book2 },
    { id: 3, title: 'Never Let Me Go', author: 'Kazuo Ishiguro', genre: 'Science Fiction', borrowed: false, image: Book3 },
    { id: 4, title: 'Hush, Hush', author: 'Becca Fitzpatrick', genre: 'Young Adult', borrowed: false, image: Book4 },
    { id: 5, title: 'Animal farm', author: 'George Orwell', genre: 'Allegory', borrowed: false, image: Book5 },
    { id: 6, title: 'Lord of the Flies', author: 'William Golding', genre: 'Philisophical Fictions', borrowed: false, image: Book6 },
    { id: 7, title: 'The Amazing Spider-Man, kraven\'s last Hunt', author: 'J. M. DeMatteis ', genre: 'Graphic Novel', borrowed: false, image: Book7 },
    { id: 8, title: 'The Devil In the White City', author: 'Erik Larson', genre: 'True Crime', borrowed: false, image: Book8 },
    { id: 9, title: 'The way of Kings', author: 'Brandon Sanderson', genre: 'Fantasy Fiction', borrowed: false, image: Book9 },
    { id: 10, title: 'Jujutsu Kaisen Volume 11', author: 'Gege Akutami', genre: 'Dark Fantasy', borrowed: false, image: Book10 },
    { id: 11, title: 'Haikyu!! Vol. 19', author: 'Haruichi Furudate', genre: 'Graphic Novel', borrowed: false, image: Book11 },
    { id: 12, title: 'The Maze Runner', author: 'James Dashner', genre: 'Apocalyptic and post-apocalyptic fiction', borrowed: false, image: Book12 },
  ]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
}
