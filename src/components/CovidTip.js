import React from "react";
import '../App.css'

function CovidTip(props){
    return(
        <div className="covid-tips-text">
            <h2>COVID-19 Tips</h2>
            <ul>
                <p>
                To prevent the spread of COVID-19:
                </p>
                <li>
                Maintain a safe distance from others (at least 1 metre), even if they dont appear to be sick.
                </li>
                <li>
                Wear a mask in public, especially indoors or when physical distancing is not possible.
                </li>
                <li>
                Choose open, well-ventilated spaces over closed ones. Open a window if indoors.
                </li>
                <li>
                Clean your hands often. Use soap and water, or an alcohol-based hand rub.
                </li>
                <li>
                Get vaccinated when its your turn. Follow local guidance about vaccination.
                </li>
                <li>
                Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
                </li>
                <li>
                Stay home if you feel unwell.
                </li>
            </ul>
            <h3>For more information on current Covid-19 restrictions and guidelines please visit: <a href="https://www.citizensinformation.ie/en/covid19/living_with_covid19_plan.html" target="blank">https://www.citizensinformation.ie/en/covid19/living_with_covid19_plan.html</a></h3>
            <br></br>
            <h3>Covid-19 case numbers can be seen displayed below for your reference</h3>
        </div>
    )
}

export default CovidTip;