import React from 'react';
const HomePage = () => {
	return (
		<div style={{paddingLeft: "20%", paddingRight: "20%", paddingTop: "2%"}}>
			<div style={{ boxShadow: "0 4px 8px 0 rgba(255,253,254,0.8)", backgroundColor: "black", padding: "2%", borderRadius: "20px"}}>
				<h1 style={{ color: "white" }}>HomePage</h1>
				<h3 style={{ color: "white" }}>Name: Kyo Watanabe</h3>
				<h3 style={{ color: "white" }}>Roll number: need to know basis</h3>
				<table style={{color: "white", alignContent: "center", marginLeft: "auto", marginRight: "auto"}}>
					<tr>
					<td style={{paddingRight: '50px', fontSize: "30px"}}>Subject</td>
					<td style={{fontSize: "30px"}}>Time</td>
					</tr>

					<tr>
					<td style={{paddingRight: '50px'}}>Recess</td>
					<td>8:00 am - 10:00 am</td>
					</tr>

					<tr>
					<td style={{paddingRight: '50px'}}>Break Time</td>
					<td>10:00 am - 12:00 pm</td>
					</tr>

					<tr>
					<td style={{paddingRight: '50px'}}>Lunch</td>
					<td>12:00 pm - 2:00 pm</td>
					</tr>

					<tr>
					<td style={{paddingRight: '50px'}}>Siesta</td>
					<td>2:00 pm - 4:00 pm</td>
					</tr>
				</table>
			</div>
		</div>
		);
	};
export default HomePage;