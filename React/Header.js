import React from "react";
import "./Header.css"; // This should match the case and location of the file

function Header() {
    return (
        <header className="d-flex justify-content-between align-items-center px-5 py-3">
            <h1 className="name">Poetry and Prose</h1>
            <nav className="navigation">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="poetry.html">Poetry</a>
                <a href="../prose/prose.html">Prose</a>
            </nav>
        </header>
    );
}

export default Header;
