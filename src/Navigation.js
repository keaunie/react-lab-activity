import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
	return (
		<div style={{padding: "50px", backgroundColor: "black"}}>
			<Link to="/" style={{textDecoration: "none", paddingRight: "50%", color: "white", fontSize: "30px"}}>Home</Link>
			<Link to="/about" style={{textDecoration: "none", color: "white", fontSize: "30px"}}>About</Link>
		</div>


	);
};
export default Navigation;