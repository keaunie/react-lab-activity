import React, { useState } from 'react';
const Book = () => {
	const [bookId, setBookId] = useState('');
	const [bookData, setBookData] = useState('');
	const [error, setError] = useState(null);
	const [bookName, setBookName] = useState('');
	const [bookDesc, setBookDesc] = useState('');
	const [bookPub, setBookPub] = useState('');
	const [bookPrice, setBookPrice] = useState('');
	const [button, setButton] = useState('');
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleLogin = async (e) => {
		e.preventDefault();
		setError('');
		setBookData(null);
		const formData = new FormData();
		formData.append('book_id', bookId);
		formData.append('book_name', bookName);
		formData.append('book_description', bookDesc);
		formData.append('book_published', bookPub);
		formData.append('book_price', bookPrice);
		formData.append('button', button);
		try {
			var response = '';
			if (button === 'add') {
				response = await fetch('http://172.16.2.195:8080/nextgen_v1/api/insert_book', {
					method: 'POST',
					body: formData,
				});
			} else if (button === 'getlist') {
				response = await fetch('http://172.16.2.195:8080/nextgen_v1/api/get_all_books', {
					method: 'GET',
					body: formData,
				});
				setLoading(false);
				setBooks(response.data.result);
				
			}
			if (!response.ok) {
				const text = await response.text();
				throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
			}
			const data = await response.json();
			if (data.status === 'SUCCESS') {
				setBookData(data.result);
			} else {
				setError(data.message);
			}
		} catch (error) {
			console.error('Fetch error:', error);
			setError(`An error occurred: ${error.message}`);
		}
	};

	return (



		<div className="container">

			<header className="App-header">
				<h1>Book</h1>

				<form onSubmit={handleLogin} className="login-form">
					<div className="form-group">
						<label htmlFor="book_id">Book ID:</label>
						<input
							type="text"
							id="book_id"
							value={bookId}
							onChange={(e) => setBookId(e.target.value)}
						// required

						/>
					</div>
					{/* <div className="form-group">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div> */}
					<div className="form-group">
						<label htmlFor="book_name">Name:</label>
						<input
							type="text"
							id="book_name"
							value={bookName}
							onChange={(e) => setBookName(e.target.value)}
						// required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="book_description">Description:</label>
						<input
							type="text"
							id="book_description"
							value={bookDesc}
							onChange={(e) => setBookDesc(e.target.value)}
						// required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="book_published">Date Published:</label>
						<input
							type="text"
							id="book_published"
							value={bookPub}
							onChange={(e) => setBookPub(e.target.value)}
						// required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="book_price">Price:</label>
						<input
							type="text"
							id="book_price"
							value={bookPrice}
							onChange={(e) => setBookPrice(e.target.value)}
						// required
						/>
					</div>
					<button type="submit" htmlFor="getlist" onClick={(e) => setButton('login')}>Get List</button>
					<button type="submit" htmlFor="add" onClick={(e) => setButton('add')}>Add Book</button>




				</form>
				{error && <p className="error-message">{error}</p>}
				{/* {bookData && (
					<div className="user-data">
						<h2>User Data</h2>
						<p><strong>User ID:</strong> {bookData.bookId}</p>
						<p><strong>First Name:</strong> {bookData.fname}</p>
						<p><strong>Last Name:</strong> {bookData.lname}</p>
						<p><strong>Email:</strong> {bookData.email}</p>
						<p><strong>Contact:</strong> {bookData.contact}</p>
						<p><strong>IMEI:</strong> {bookData.imei}</p>
					</div>
				)} */}

				
			</header>
		</div>



	);

};
export default Book;