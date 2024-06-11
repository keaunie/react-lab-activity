import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import BookList from './BookList.js';
import Book from './Book';
import ChangeData from './ChangeData.js';
import ChangeDesc from './ChangeDesc.js';





function App() {
	return (
		<Router>
			<div style={{
				textAlign: "center",

				paddingTop: "1%",
				paddingBottom: "100%"
			}}>
				<Navigation />
				<hr />
				<Routes>
					<Route exact path='/' element={<HomePage />} />
				</Routes>
				<Routes>
					<Route exact path='/booklist' element={<BookList />} />
				</Routes>
				<Routes>
					<Route exact path='/book' element={<Book />} />
				</Routes>
				<Routes>
					<Route exact path='/changedata' element={<ChangeData />} />
				</Routes>
				<Routes>
					<Route exact path='/changedesc' element={<ChangeDesc />} />
				</Routes>

			</div>
		</Router>
	);
}

export default App;