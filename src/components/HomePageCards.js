import React from 'react'
import {Link} from 'react-router-dom'
import LoughCrew from '../images/Lough Crew.jpg'
import WicklowRuin from '../images/Wicklow Ruin.jpg'
import '../styles/HomePageCard.css'

function HomePageCards(){
    return(
        <div className="card-container">
            <div className="row home-page-card">
                <div className="col-lg-4 col-sm-12">
                    <Link to="/thingstodo">
                        <img src={LoughCrew} className="card-image" title="Lough Crew Cairns" alt="Lough Crew Cairns"></img>
                    </Link>    
                </div>

                <div className="col-md-6 col-sm-12 card-body">
                    <h2 className="card-title">Things to Do!</h2>
                    <p className="card-text">There's no shortage of things to do on this little green island of ours!</p>
                    <p>Check out some of the activities on offer on our</p>
                    <Link to="/thingstodo" >
                        <button className="home-card-button">
                            Activities page!
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row home-page-card">
                <div className="col-md-6 col-sm-12 card-body">
                    <h2 className="card-title">Places to Stay!</h2>
                        <p className="card-text">
                            As lovely as Ireland's historical ruins are,
                            we suggest browsing for a more comfortable form of
                            accomodation for your stay!
                        </p>
                        <p>
                            Find your next stay on our
                        </p>
                        <Link to="/placestostay" >
                            <button className="home-card-button">
                                Accomodation page!
                            </button>
                        </Link>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <Link to="/placestostay">  
                        <img src={WicklowRuin} className="card-image" title="Lough Crew Cairns" alt="Lough Crew Cairns"></img>
                    </Link>
                </div>                
            </div>
        </div> 
    )
}

export default HomePageCards