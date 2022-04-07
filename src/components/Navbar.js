import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import { Collapse } from "bootstrap";
import Ireland from '../images/travel-ireland-logo.png';

function Navbar(){
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-lg">
                    <Link to="/" className="navbar-brand" tabIndex="0">
                        <img src={Ireland} className="navbar-brand" width="80" height="auto" alt="Ireland Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" tabIndex="1">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/thingstodo" className="nav-link" tabIndex="2">Activities</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/placestostay" className="nav-link" tabIndex="3">Accommodation</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/covid" className="nav-link" tabIndex="4">COVID-19</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;