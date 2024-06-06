import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
	return (
		<div style={{padding: "50px", backgroundColor: "black"}}>
			<Link to="/" style={{textDecoration: "none", paddingRight: "25%", color: "white", fontSize: "30px"}}>Home</Link>
			<Link to="/booklist" style={{textDecoration: "none", paddingRight: "25%", color: "white", fontSize: "30px"}}>Book List</Link>
			<Link to="/book" style={{textDecoration: "none", color: "white", fontSize: "30px"}}>Book</Link>
			<Link to="/changedata" style={{textDecoration: "none", color: "white", fontSize: "30px"}}>ChangeData</Link>
		</div>


	);
};
export default Navigation;