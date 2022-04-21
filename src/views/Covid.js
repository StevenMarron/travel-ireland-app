import React from "react";
import CovidCasesAPI from "../components/CovidCasesAPI";
import Doyle from "../components/Doyle";
import CovidHero from "../components/CovidHero";
import CovidTip from "../components/CovidTip";

function Covid(){
    return(
        <section className="container">
            <section className="container">
                <div className="row">
                <div className="col-lg-8">
                    <h1>COVID-19 in Ireland</h1>
                    </div>
                </div>
            </section>
            <div>
                <CovidHero />
            </div>
            <div>
                <CovidTip />
            </div>
            <div>
                <h2><u>COVID-19 cases in Ireland</u></h2>
                <p>Listed by county:</p>
            </div>
            <section className="row">
                <CovidCasesAPI />              
            </section>
            <div className="doyle">
                <Doyle />
            </div>
        </section>
    );
}

export default Covid;