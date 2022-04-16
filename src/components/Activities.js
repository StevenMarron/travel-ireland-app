import React from "react";
import '../App.css'

function Activities(props){
    return(
            <div className="activity-content">
                <h2 className="activity-content-h2">{props.name}</h2>
                <h3>Location: {props.location}</h3>
                <h4>Phone: {props.telephone}</h4>
                <h4>Webiste: <a href={props.website} target="_blank">{props.website}</a></h4>
                <p className="activity-content-p">tags: {props.tags}</p>          
            </div>

    )
}

export default Activities;