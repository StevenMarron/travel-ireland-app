import React from "react";
import '../App.css'
import ActivitiesAPI from "./ActivitiesAPI";

function Activities(props){
    // props are passed to the Activites function from the ActivitiesAPI component
    return(
            <div className="activity-content">
                <h2 className="activity-content-h2">{props.name}</h2>
                <h3>Location: {props.location}</h3>
                <h4>Phone: {props.telephone}</h4>
                <h4>Webiste: <a href={props.website} target="_blank">{props.website}</a></h4>
                {/* target="_blank" ensures the website link opens in a new tab */}
                <p className="activity-content-p">tags: {props.tags}</p>
                {/* props are referenced using the props. prepended to the title of the information assigned in the ActivitiesAPI component           */}
            </div>

    )
}

export default Activities;