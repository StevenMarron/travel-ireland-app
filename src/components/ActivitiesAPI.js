import React from "react";
import { useState } from "react";
import axios from "axios";
import Activities from "../components/Activities";

function ActivitiesAPI(){
    const [activities, setActivities] = useState([]);
    // useState array stores returned data from API call
    const [query, setQuery] = useState("");
    // query is set by the user input
    const [error, setError] = useState("");
    // error useState set to no output by default, which will change if an input error occurs, outlined below

    function handleSearchCounty(e){
        e.preventDefault()
        // e.preventDefault() prevents the search function from being carried out automatically
        setQuery(e.target.value)
    }

    async function getActivities(e){
        // async functions return a javascript promise 
        e.preventDefault()
        var response = await axios.get("https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=address/addressRegion eq '" + query + "'")
        // await means the function is paused until the async promise is resolved and continues when it has the result of the function or an error occurs
        // query is added into API call URL at point that sets a search parameter as set out by the API documents
        setActivities([response.data])
        // setActivities populates the response.data into the activities array
        // console.log([response.data])
        if([response.data.count] > 0){
            setError("");
        }else{
            setError("'" + query + "' is not a valid county name. Try inputting in this format: 'Louth'");
        }
        // The error useState is set to a sentence containing the inputted query and a suggestion for inputting in the correct format if the response.data.count is 0
    }
    return(
        <div>
            <div className="searchBar">
                <input value={query} onChange={handleSearchCounty}/>
                <button className="search" onClick={getActivities}>Search</button>
                {/* The input and button tags take in user queries, set in the handleSearchCounty function and triggers API calls in the getActivities function  */}
            </div>
            <p className="error">{error}</p>
            {/* The error is output under the query input field, it is blank unless an error occurs */}
            <div>
                {activities.map(function(i, index){
                    // map functions are required to loop through returned data from API calls
                    return(
                        <div className="row" key={index}>
                            {/* a row class is added to style the results of the API call with bootstrap */}
                            {i.results.map(function(j, index){
                                // a second map function loops through an array of results from the API calls
                                return(
                                    <div className="col-lg-6 col-sm-12 activity-card" key={index}>
                                        {/* each list of data requires an index key */}
                                        <Activities 
                                            name={i.results[index].name}
                                            location={i.results[index].address.addressLocality}
                                            telephone={i.results[index].telephone}
                                            website={i.results[index].url}
                                            tags={i.results[index].tags+","}
                                            // The selected data is output to props in the Activity component
                                            // the results[index] gets the associated information for that particular index in the array
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