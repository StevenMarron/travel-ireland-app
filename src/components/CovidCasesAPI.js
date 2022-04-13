import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import Highcharts from 'highcharts/highstock';
import BarChart from 'highcharts-react-official';

function CovidCasesAPI(){
    const [cases, setCases] = useState([]);
    const [county, setCounty] = useState([])
    const [population, setPopulation] = useState([])
    
    const config= {
            chart: {
                type: 'bar',
                height: 800
            },
            title: {
                text: 'Covid-19 Cases vs. Population per County'
            },
            subtitle: {
                text: 'Source: <a href="https://covid-19.geohive.ie/datasets/4779c505c43c40da9101ce53f34bb923_0/api">Covid-19.geohive.ie</a>'
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
                    text: 'Population',
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
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Confirmed Covid Cases',
                data: cases,
                color: '#ffa500'
            }, {
                name: 'Population',
                data: population,
                color: '#069754'
            }]
        }

    useEffect(() => {
        const dummyConst = async function (){
            var response = await axios.get("https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Covid19CountyStatisticsHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=ConfirmedCovidCases,PopulationProportionCovidCases,TimeStampDate,CountyName,PopulationCensus16&outSR=4326&f=json")
            var formattedDataCounty = response.data.features.map(function(i, index){
                return response.data.features[index].attributes.CountyName   
            })
            var formattedCases = response.data.features.map(function(i, index){
                return response.data.features[index].attributes.ConfirmedCovidCases 
            })
            var formattedPopulation = response.data.features.map(function(i, index){
                return response.data.features[index].attributes.PopulationCensus16
            })
            setCases(formattedCases)
            setCounty(formattedDataCounty)
            setPopulation(formattedPopulation)
            // console.log(response);
        }
            const useEffectData = dummyConst()
    }, [])

    return(
        <div>
            <section>
                <BarChart highcharts={Highcharts} options={config}/>
            </section>
        </div>
    );
}

export default CovidCasesAPI;