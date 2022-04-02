import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Activities from '../components/Activities'

function ActivitiesAPI(){
    const [activities, setActivities] = useState([])
    const [query, setQuery] = useState('')
    const [error, setError] = useState('')

    function handleSearchCounty(e){
        e.preventDefault()
        setQuery(e.target.value)
    }

    async function getActivities(e){
        e.preventDefault()
        var response = await axios.get("https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=address/addressRegion eq '"+query+"'")
        setActivities([response.data])
        console.log([response.data])
    }

//    if (!.getActivities.length)return<h1>LOADING RESULTS..</h1>

    return(
        <div>
            <div className="searchBar">
                <input value={query} onChange={handleSearchCounty}/>
                <Button className="figureButton" onClick={getActivities}>Search by County</Button>                
            </div>

            <div>
                {activities.map(function(i, index){
                    return(
                        <div key={index}>
                            <ul>
                            {i.results.map(function(j, index){
                                return(
                                    <li key={index}>
                                        <Activities
                                            name={i.results[index].name}
                                            location={i.results[index].address.addressLocality}
                                            tags={i.results[index].tags+","}
                                        /> 
                                    </li>
                                )
                            })}
                             </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ActivitiesAPI