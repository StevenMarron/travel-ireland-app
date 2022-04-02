import React from 'react'
import LoughCrew from '../images/Lough Crew.jpg'
import WicklowRuin from '../images/Wicklow Ruin.jpg'
import '../styles/HomePageCard.css'

function HomePageCards(){
    return(
        <div>
            <div className="row home-page-card">
                <div className="col-lg-4 col-sm-12">
                <img src={LoughCrew} className="card-image" title="Lough Crew Cairns" alt="Lough Crew Cairns"></img>
                </div>

                <div className="col-md-6 col-sm-12 card-body">
                    <h2 className="card-title">Things To Do!</h2>
                    <p className="card-text">There's no shortage of things to do on this little green island of ours!</p>
                </div>
            </div>

            <div className="row home-page-card">
                <div className="col-md-6 col-sm-12 card-body">
                    <h2 className="card-title">Things To Do!</h2>
                    <p className="card-text">
                        As lovely as Ireland's historical ruins are,
                        we suggest browsing for a more comfortable form of
                        accomodation for your stay!
                        </p>
                </div>

                <div className="col-lg-4 col-sm-12">
                <img src={WicklowRuin} className="card-image" title="Lough Crew Cairns" alt="Lough Crew Cairns"></img>
                </div>                
            </div>
        </div> 
    )
}

export default HomePageCards