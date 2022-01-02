import React from 'react';
import "../Stylings/Navbar.css";

function Navbar() {
    return (
        <nav id="navbar">

            <a href="#">
                Homepage
            </a>

            <a href="#">
                Previous Page
            </a>

            <select>
                <option>Pick asdasd</option>
                <option>asdfs</option>
            </select>

            <a href="#">
                Random Page
            </a>

            <a href="#">
                Next Page
            </a>

        </nav>
    );
}

export default Navbar;