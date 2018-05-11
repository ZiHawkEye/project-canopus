import React from 'react';
// import logo from '../assets/Logo.svg';

function Navbar() {
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

            <div className="register">
                <ul>
                    <li><a href="signup" className="btn">Sign Up</a></li>
                    <li><a href="login" className="btn">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;