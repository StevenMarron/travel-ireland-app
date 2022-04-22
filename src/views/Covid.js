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
            {/* Hero image component for covid page imported  */}

            <div className="col-lg-10 col-sm-12 covid-tips">
                <CovidTip />
            </div>
            {/* Component comprised of covid 19 tip list imported */}

            <section className="row covid-cases-api">
                <CovidCasesAPI />              
            </section>
            {/* UseEffect API auto-loads barchart with county Covid-19 numbers compared to population */}

            <div className="doyle">
                <Doyle />
            </div>
            {/* A pop-up of Mrs.Doyle from Father Ted transitions onto the screen from the bottom right with a reminder to wash your hands */}
        </section>
    );
}

export default Covid;