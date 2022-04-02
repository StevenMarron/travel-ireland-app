import React from "react";
import {useState} from "react";
import axios from "axios";
import Accommodation from "./Accommodation";

function AccommodationAPI(props){
    const [query, setQuery] = useState("");
    const [accomm, setAccomm] = useState([]);
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
            });
        console.log([[response.data]]);
        setAccomm([response.data]);
    }
    return(
        <div>
            <section>
                <label>Enter a county to search for accommodation</label><br />
                <input id="search" value={query} onChange={handleSearch} /><br />
                <button onClick={hotelSearch}>Search</button>
            </section>
            <section>
                    {accomm.map(function(i, index){
                        return(
                            <div key={index}>
                                {i.results.map(function(j, index){
                                    return(
                                        <div key={index}>
                                            <Accommodation tags={i.results[index].tags} name={i.results[index].name} addressRegion={i.results[index].address.addressRegion} url={i.results[index].url} telephone={i.results[index].telephone} /> 
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
            </section>
        </div>
    );
}

export default AccommodationAPI;