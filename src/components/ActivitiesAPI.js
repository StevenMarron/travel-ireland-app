import React from "react";
import { useState } from "react";
import axios from "axios";
import Activities from "../components/Activities";

function ActivitiesAPI(){
    const [activities, setActivities] = useState([]);
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    function handleSearchCounty(e){
        e.preventDefault()
        setQuery(e.target.value)
    }
    async function getActivities(e){
        e.preventDefault()
        var response = await axios.get("https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=address/addressRegion eq '" + query + "'")
        setActivities([response.data])
        console.log([response.data])
        if([response.data.count] > 0){
            setError("");
        }else{
            setError("'" + query + "' is not a valid county name. Try inputting in this format: 'Louth'");
        }
        //console.log(response);
    }
    return(
        <div>
            <div className="searchBar">
                <input value={query} onChange={handleSearchCounty}/>
                <button className="search" onClick={getActivities}>Search</button> 
            </div>
            <p className="error">{error}</p>
            <div>
                {activities.map(function(i, index){
                    return(
                        <div className="row" key={index}>
                            {i.results.map(function(j, index){
                                return(
                                    <div className="col-lg-6 col-sm-12 activity-card" key={index}>
                                        <Activities 
                                            name={i.results[index].name}
                                            location={i.results[index].address.addressLocality}
                                            telephone={i.results[index].telephone}
                                            website={i.results[index].url}
                                            tags={i.results[index].tags+","}
                                        />                                                  
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ActivitiesAPI;