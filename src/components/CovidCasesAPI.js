import React from "react";
import { useState, useEffect } from "react";
// React hooks are utilised to request and process data from external APIs
import axios from "axios";
// axios dependancy was installed in order to make external API calls
import Highcharts from "highcharts/highstock";
import BarChart from "highcharts-react-official";
// Highcharts were installed via npm and the specific type of chart for the API representation was imported

function CovidCasesAPI(){
    const [cases, setCases] = useState([]);
    const [county, setCounty] = useState([]);
    const [population, setPopulation] = useState([]);

    // each variable needed for the barchart required it's own useState array to populate with information
    
    const config={
            chart: {
                type: 'bar',
                height: 800,
                backgroundColor: '#dbfeff'
                // Some styling for the barchart is handled within the config of the component itself
            },
            title: {
                text: 'Covid-19 Cases vs. Population per County'
            },
            subtitle: {
                text: 'Source: <a href="https://covid-19.geohive.ie/datasets/4779c505c43c40da9101ce53f34bb923_0/api" target="blank">Covid-19.geohive.ie</a>'
                // Provided reference to API dataset data is retreived from
            },
            xAxis: {
                categories: county,
                labels:{
                    step: 1
                },
                title: {
                    text: 'Counties'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (Census 2016)',
                    align: 'low'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    },
                series: {
                    padding:5
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -20,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#ffffff',
                shadow: true
                // Determines the position of the graph legend
            },
            credits: {
                enabled: false
                // prevents credits to highcharts watermark appearing on char
            },
            series: [{
                name: 'Confirmed Covid Cases',
                data: cases,
                color: '#ffa500'
                // sets name, info type and color of bar in barchart
            }, {
                name: 'Population (Census 2016)',
                data: population,
                color: '#069754'
            }]
        }

    useEffect(() => {
        const dummyConst = async function (){
            // The useEffect function required the API request to be wrapped in a function variable or it would crash
            // The const I used was named dummyConst as it was not called itself after its use, merely a means to retrieve and set the useState variables above
            let response = await axios.get("https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Covid19CountyStatisticsHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=ConfirmedCovidCases,PopulationProportionCovidCases,TimeStampDate,CountyName,PopulationCensus16&outSR=4326&f=json")
            let formattedDataCounty = response.data.features.map(function(i, index){
                return response.data.features[index].attributes.CountyName
                // Returns the county name at index
            })
            let formattedCases = response.data.features.map(function(i, index){
                return response.data.features[index].attributes.ConfirmedCovidCases
                // Returns confirmed number of covid cases at index
            })
            let formattedPopulation = response.data.features.map(function(i, index){
                return response.data.features[index].attributes.PopulationCensus16
                // Returns population data based off of the 2016 Irish Census
            })
            setCases(formattedCases);
            // Sets case numbers at array index
            setCounty(formattedDataCounty);
            // Sets county at array index
            setPopulation(formattedPopulation);
            // Sets population at array index
        }
            const useEffectData = dummyConst()
    }, []);
    // add array as a second dependancy of the UseEffect hook to ensure it only runs once

    return(
        <section className="container-lg">
            <div className="row">
                <div className="col-lg-10 m-auto">
                    <BarChart highcharts={Highcharts} options={config} />
                    {/* Barchart component populated by useEffect function returned as the output for this component */}
                </div>
            </div>
        </section>
    );
}

export default CovidCasesAPI;