import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
	return (
		<Router>
			<div style={{
				textAlign: "center",
				backgroundColor: "black",
				paddingTop: "1%",
				paddingBottom: "100%"
			}}>
				<Navigation />
				<hr />
					<Routes>
						<Route exact path='/' element={<HomePage />} />
					</Routes>
					<Routes>
						<Route exact path='/about' element={<AboutPage />} />
					</Routes>
			</div>
		</Router>
	);
}

export default App;