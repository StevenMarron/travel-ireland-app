import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import Ireland from '../images/Ireland-temp-logo.png';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-lg">
            <Link to="/" className="navbar-logo">
                <img src={Ireland} className="navbar-brand" alt="Ireland Logo"></img>    
            </Link>
            </div>
            <div className="container-lg">     
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/thingstodo" className="nav-link">Activities</Link>
                <Link to="/placestostay" className="nav-link">Accommodation</Link>
                <Link to="/covid" className="nav-link">COVID-19</Link>
            </div>

        </nav>
    );
}

export default Navbar;