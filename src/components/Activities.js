import React from "react";

function Activities(props){
    return(
        <div>
            <h2>Activity: {props.name}</h2>
            <p>Area: {props.location}</p>
            <p>tags: {props.tags}</p>
            <br />
        </div>
    )
}

export default Activities;