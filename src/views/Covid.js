import React from "react";
import CovidCasesAPI from "../components/CovidCasesAPI";
import Doyle from "../components/Doyle";

function Covid(){
    return(
        <section className="container">
            <section className="container">
                <div className="row">
                <div className="col-lg-8">
                    <h1>COVID-19 cases in Ireland</h1>
                    <p>Listed by county.</p>
                    </div>
                </div>
            </section>
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