import React from "react";
import {useState} from "react";
import axios from "axios";
import CovidCases from "../components/CovidCases";

function CovidCasesAPI(props){
    const [query, setQuery] = useState("");
    const [cases, setCases] = useState([]);
    function handleCasesSearch(e){
        e.preventDefault();
        setQuery(e.target.value);
    }
    async function covidCasesSearch(e){
        e.preventDefault();
        let response = await axios.get("https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Covid19CountyStatisticsHPSCIrelandOpenData/FeatureServer/0/query?where=CountyName%20%3D%20'" + query + "'%27&outFields=*&outSR=4326&f=json");
        setCases([response.data]);
        console.log([[response.data]]);
    }
    return(
        <div>
            <section>
                <label>Enter a county to view the number of cases</label><br />
                <input id="search" value={query} onChange={handleCasesSearch} />
                <button className="search" onClick={covidCasesSearch}>Search</button>
            </section>
            <section>
                    {cases.map(function(i, index){
                        return(
                            <div className="row" key={index}>
                                {i.features.map(function(j, index){
                                    return(
                                        <div className="col-md-4 position-relative" key={index}>
                                            <CovidCases />
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

export default CovidCasesAPI;