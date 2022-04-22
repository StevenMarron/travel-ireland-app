import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Collapse } from "bootstrap";
// Collapse was required for the responsive navbar to collapse and uncollapse on smaller screens
import Ireland from "../images/travel-ireland-logo.png";
// Images are imported and given a name via an import command, this name is then cited in img tags

function Navbar(){
    return(
        <header className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    {/* Bootstrap navbar utilised as a component on the site, making use of the router set up in App.js */}
                    <div className="container-lg">
                        <div className="col-lg-6">
                            <Link to="/" className="navbar-brand" tabIndex="0">
                                <img src={Ireland} className="navbar-brand" width="80" height="auto" alt="Travel Ireland logo." />
                                {/* {Ireland} references the imported image, by placing this img in Link tags, it can be used to route users back to the home page using the "/" path*/}
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-list">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" tabIndex="1">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/thingstodo" className="nav-link" tabIndex="2">Activities</Link>
                                {/* Path names taken from the router in App.js */}
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
            </div>
        </header>
    );
}

export default Navbar;