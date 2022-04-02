import React from 'react'

function Activities(props){
    return(
        <div>
            <h2>Activity:</h2><h3> {props.name}</h3>
            <h2>Area: </h2><h3> {props.location}</h3>
            <h2>tags: </h2><h3>{props.tags}</h3>
            <br/>
        </div>
    )
}

export default Activities