import React from "react";
import AccommodationAPI from "../components/AccommodationAPI";

function PlacesToStay(){
    return(
        <div className="container-lg">
            <section>
                <h1>Where to stay in Ireland</h1>
                <AccommodationAPI />
            </section>
        </div>
    );
}

export default PlacesToStay;