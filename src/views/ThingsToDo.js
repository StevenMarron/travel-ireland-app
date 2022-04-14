import React from "react";
import ActivitiesAPI from "../components/ActivitiesAPI";
import TravelVideo from "../components/TravelVideo";
import ActivitiesHero from "../components/ActivitiesHero.js"

function ThingsToDo(){
    return(
               
        <div className="container">
              <div>
                <ActivitiesHero />
            <div className="row">
                <div className="col-lg-8">
                    </div>
                    <h1>Things to do in Ireland</h1>
                    <p>Search for activities by county</p>
                    <ActivitiesAPI />
                    <br />
                    </div>
                </div>
                 <div className="col-lg-8">
                <h2>Need a litte inspiration for your visit?</h2>
                <p>Watch the ten best places to visit in Ireland to help you prepare for you next trip.</p>
                <br />
                <TravelVideo />
            </div>
            <br />
        </div>
    );
}

export default ThingsToDo;