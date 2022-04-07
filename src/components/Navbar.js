import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import Ireland from '../images/Ireland-temp-logo.png';

function Navbar(){
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-lg">
                    <Link to="/" className="navbar-brand" tabindex="0">
                        <img src={Ireland} className="navbar-brand" alt="Ireland Logo"></img>    
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" className="nav-link" tabindex="1">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/thingstodo" className="nav-link" tabindex="2">Activities</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/placestostay" className="nav-link" tabindex="3">Accommodation</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/covid" className="nav-link" tabindex="4">COVID-19</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;