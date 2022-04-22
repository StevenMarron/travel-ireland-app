import React from "react";
import CovidCasesAPI from "../components/CovidCasesAPI";
import Doyle from "../components/Doyle";
import CovidHero from "../components/CovidHero";
import CovidTip from "../components/CovidTip";

function Covid(){
    return(
        <section className="container-fluid">
            <div className="col-lg-10 col-sm-12 m-auto ">
                <CovidHero />
            </div>
            <div className="col-lg-10 col-sm-12 covid-tips">
                <CovidTip />
            </div>
            <section className="row covid-cases-api">
                <CovidCasesAPI />              
            </section>
            <div className="doyle">
                <Doyle />
            </div>
        </section>
    );
}

export default Covid;