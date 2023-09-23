import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
                <div className="container">
                    <a className="navbar-brand size" href="/" style={{ color: 'rgb(255, 255, 255)' }}>
                        <i className="hover" style={{ color: 'yellow' }}>Portfo</i>
                        <b className="lio" style={{ color: 'red' }}>.lio</b>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/" style={{ color: 'rgb(255, 255, 255)' }}>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link a" to="/skills" style={{ color: 'rgb(255, 255, 255)' }}>Skills</Link></li>
                            <li className="nav-item"><Link className="nav-link a" to="/Projects" style={{ color: 'rgb(255, 255, 255)' }}>Project's</Link></li>
                            <li className="nav-item"><Link className="nav-link a" to="/services" style={{ color: 'rgb(255, 255, 255)' }}>Services</Link></li>
                            <li className="nav-item"><Link className="nav-link a" to="/about" style={{ color: 'rgb(255, 255, 255)' }}>About</Link></li>
                            <li className="nav-item"><Link className="nav-link a" to="/contact" style={{ color: 'rgb(255, 255, 255)' }}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;