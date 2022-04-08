import React from 'react'
import {Link} from 'react-router-dom'
import WicklowRuin from '../images/Wicklow Ruin.jpg'
import '../App.css'

function HomePageCard2(){
    return(
        <div className="card-container">
            <div className="row home-page-card">
                <Link to="/placestostay">
                    <img src={WicklowRuin} className="card-image" title="Lough Crew Cairns" alt="Lough Crew Cairns"></img>
                </Link>    
                
                <div className="col-md-6 col-sm-12 card-body">
                    <h2 className="card-title">Places to Stay!</h2>
                        <p className="card-text">
                            As lovely as Ireland's historical ruins are,
                            we suggest browsing for a more comfortable form of
                            accomodation for your stay!
                        </p>
                        <p className="card-text">
                            Find your next stay on our
                        </p>
                        <Link to="/placestostay" >
                            <button className="home-card-button">
                                Accomodation page
                            </button>
                        </Link>
                </div>              
            </div>
        </div> 
    )
}

export default HomePageCard2