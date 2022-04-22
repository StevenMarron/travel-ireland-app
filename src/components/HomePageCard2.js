import React from "react";
import { Link } from "react-router-dom";
import WicklowRuin from "../images/Wicklow Ruin.jpg";
import "../App.css";
import App from "../App";
// Styling information imported from App.css file

function HomePageCard2(){
    return(
        <div className="card-container">
            <div className="row home-page-card">
                <Link to="/placestostay">
                    <img src={WicklowRuin} className="card-image" title="Lough Crew Cairns" alt="Lough Crew Cairns" />
                </Link>
                <div className="col-md-6 card-body">
                    <h2 className="card-title">Places to stay</h2>
                    <p className="card-text">As lovely as Ireland's historical ruins are, we suggest browsing for a more comfortable form of accomodation for your stay.</p>
                    <p className="card-text">Use our search feature to find the perfect accommodation for your next stay.</p>
                    <Link to="/placestostay" style={{ textDecoration: 'none' }}>
                            <button className="home-card-button">Search accomodation</button>
                    </Link>
                    {/* Link to other pages embedded in button */}
                </div>
            </div>
        </div> 
    );
}

export default HomePageCard2;