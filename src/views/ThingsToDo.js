import React from 'react'
import Activities from '../components/Activities'
import ActivitiesAPI from '../components/ActivitiesAPI'

function ThingsToDo(){
    return(
        <div>
            <h1>Things To Do Page</h1>
            <ActivitiesAPI/>
            <Activities />            
        </div>
    )
}

export default ThingsToDo