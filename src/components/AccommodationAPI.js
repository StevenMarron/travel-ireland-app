import React from "react";
import { useState } from "react";
import axios from "axios";
import Accommodation from "./Accommodation";

function AccommodationAPI(props){
    const [query, setQuery] = useState("");
    // query set by input field
    const [accomm, setAccomm] = useState([]);
    // useState array stores returned data from API response
    const [error, setError] = useState("");

    function handleSearch(e){
        e.preventDefault();

        setQuery(e.target.value);
    }
    async function hotelSearch(e){
        e.preventDefault();
        let response = await axios.get("https://failteireland.azure-api.net/opendata-api/v1/accommodation", 
            {
                params: {
                    $filter: "address/addressRegion" + " eq " + "'" + query + "'"
                }
                // params appends query to search parameters for API call
            });
        if([response.data.count] <= 0){
            setError("Your entry '" + query + "' is not a valid county. Please try again.");
        } else{
            setError("");
        }
        // If the API returns no results the error useState will change to a string
        setAccomm([response.data]);
    }
    return(
        <section className="container-lg">
            <section>
                <label>Enter a county to search for accommodation</label><br />
                <input id="search" value={query} onChange={handleSearch} />
                {/* query value is sent to handleSearch function which sets the query useState */}
                <button className="search" onClick={hotelSearch}>Search</button>
                {/* onClick event triggers hotelSearch API function */}
                <p className="error">{error}</p>
                {/* displays error useState*/}
            </section>
            <section>
                    {accomm.map(function(i, index){
                        // map function loops through results
                        return(
                            <div className="row" key={index}>
                                <p>Number of results: {i.results.length}</p>
                                {/* outputs number of results based on length of API response */}
                                {i.results.map(function(j, index){
                                    // loops through results of API
                                    return(
                                        <div className="col-lg-4 position-relative" key={index}>
                                            <Accommodation image={i.results[index].image.url} name={i.results[index].name} tags={i.results[index].tags} addressLocality={i.results[index].address.addressLocality} addressRegion={i.results[index].address.addressRegion} url={i.results[index].url} telephone={i.results[index].telephone} />
                                            <p className="count">{index + 1}</p>
                                        </div>
                                        // sets results of API up as props for Accomodation component
                                    );
                                })}
                            </div>
                        );
                    })}
            </section>
        </section>
    );
}

export default AccommodationAPI;