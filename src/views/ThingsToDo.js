import React from 'react'
import ActivitiesAPI from '../components/ActivitiesAPI'
import TravelVideo from '../components/TravelVideo';

function ThingsToDo(){
    return(
        <div className="container">
            <div className="col-lg-8 col-sm-10">
                <h1>Things to do in Ireland</h1>
                <p>Search for activities by county</p>
                <ActivitiesAPI/>
            </div>

            <div className="col-lg-8 col-sm-10 m-auto">
                <h2>Need a litte inspiration for your visit?</h2>
                <br/>
                <TravelVideo />
            </div>
            <br/>
        </div>
    )
}

export default ThingsToDo