import React from 'react'
import CovidCasesAPI from "../components/CovidCasesAPI";
import Doyle from '../components/Doyle'

function Covid(){
    return(
        <div className="container-lg">
            <h1>Covid Page</h1>
            <div className="row fadein">
                <div className="col-lg-10 col-sm-12 m-auto">
                <CovidCasesAPI />  
                </div>             
            </div>
            <div className="doyle">
                <Doyle/>
            </div>
        </div>
    );
}

export default Covid;