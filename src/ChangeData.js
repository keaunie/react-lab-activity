import React, { useState } from 'react';

const EditBookPrice = () => {
  const [bookId, setBookId] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('book_id', bookId);
      formData.append('book_price', bookPrice);

      const response = await fetch('http://elnidoleatherback.com/nu/nextgen_v1/api/edit_book_price', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json(); // Parse response body as JSON

      console.log(responseData); // Inspect the response data

      if (responseData.status === 'SUCCESS') {
        setResponseMessage('Book Price Updated Successfully.');
      } else {
        setResponseMessage('Failed to Update Book Price.');
      }
    } catch (error) {
      setError('Failed to update book price.');
    }
  };

  return (
    <div>
      <h2>Edit Book Price</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book ID:</label>
          <input
            type="text"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Book Price:</label>
          <input
            type="number"
            value={bookPrice}
            onChange={(e) => setBookPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default EditBookPrice;

