import React from 'react'
import {useState,} from 'react'
import axios from 'axios'
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
        if([response.data.count]>0){
            setError("")
        }else{
            setError(query + " is not a valid County name")
        }
        console.log([response.data])
    }
    
    return(
        <div>
            <div className="searchBar">
                <input value={query} onChange={handleSearchCounty}/>
                <button className="figureButton" onClick={getActivities}>Search by County</button>                
            </div>

            <h1>{error}</h1>
            <div>
                {activities.map(function(i, index){
                    return(
                        <div key={index}>
                            {i.results.map(function(j, index){
                                return(
                                        <Activities key={index}
                                            name={i.results[index].name}
                                            location={i.results[index].address.addressLocality}
                                            tags={i.results[index].tags+","}
                                        />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ActivitiesAPI