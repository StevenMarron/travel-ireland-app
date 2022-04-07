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
        setAccomm([response.data]);
        console.log([response.data]);
    }
    return(
        <div>
            <section>
                <label>Enter a county to search for accommodation</label><br />
                <input id="search" value={query} onChange={handleSearch} />
                <button className="search" onClick={hotelSearch}>Search</button>
            </section>
            <section>
                    {accomm.map(function(i, index){
                        return(
                            <div className="row" key={index}>
                                <p>Number of results: {i.results.length}</p>
                                {i.results.map(function(j, index){
                                    return(
                                        <div className="col-md-4 position-relative" key={index}>
                                            <Accommodation image={i.results[index].image.url} name={i.results[index].name} tags={i.results[index].tags} addressLocality={i.results[index].address.addressLocality} addressRegion={i.results[index].address.addressRegion} url={i.results[index].url} telephone={i.results[index].telephone} />
                                            <p className="count">{index + 1}</p>
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