import React from "react";
import ActivitiesAPI from "../components/ActivitiesAPI";
import TravelVideo from "../components/TravelVideo";
import ActivitiesHero from "../components/ActivitiesHero.js"
import TopPicks from "../components/Top-Picks.js"

function ThingsToDo(){
    return(
               
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 col-sm-12 m-auto">
                    <ActivitiesHero />                    
                </div>
            </div>

            <div className="row">
                <div className="col-lg-10 col-sm-12 m-auto activity-text">
                    <h1>Things to do in Ireland</h1>
                    <p>Search for activities by county</p>
                    <ActivitiesAPI />
                    <br />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-10 col-sm-10 m-auto activity-text">
                    <h2>Need a litte inspiration for your visit?</h2>
                    <p>Watch the ten best places to visit in Ireland to help you prepare for you next trip.</p>
                    <br />
                    <TravelVideo />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="activity-text">
                        <h2>Here's our top picks!</h2>
                        <p>We've picked our top 3 picks for around the country:</p>                        
                    </div>
                    <TopPicks />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default ThingsToDo;