
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const BASE_URL = 'http://172.16.2.195:8080/nextgen_v1/api';
 
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get_all_books`);
        if (response.data.status === 'SUCCESS') {
          setBooks(response.data.result);
        } else {
          console.error('No books found:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
 
    fetchBooks();
  }, []);
 
  return (
    <div>
      <h2>All Books</h2>
      {loading ? (
        <p>Loading...</p>
      ) : books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.book_id}>
              <h3>{book.book_name}</h3>
              <p>Description: {book.book_description}</p>
              <p>Published: {book.book_published}</p>
              <p>Price: ${parseFloat(book.book_price).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
 
export default BookList;
 