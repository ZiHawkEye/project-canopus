import React from 'react';
// import logo from '../assets/Logo.svg';

class Navbar extends React.Component {
	
	render() {
		return (
            <nav className="navbar">
            {/* <div className="logo">
                <img src={logo} alt="Logo"/>
            </div> */}
                <div className="navlinks">
                    <ul>
                        <li><a href="/" className="btn">Home</a></li>
                        <li><a href="notes" className="btn">Notes</a></li>
                        <li><a href="blog" className="btn">Blog</a></li>
                        <li><a href="about" className="btn">About</a></li>
                    </ul>
                </div>
            </nav>
		);
	}
}

export default Navbar;