import React from "react";
import AccommodationAPI from "../components/AccommodationAPI";

function PlacesToStay(){
    return(
        <section className="container-fluid">
            <section className="container-lg">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Where to stay in Ireland</h1>
                    </div>
                </div>
            </section>
            <AccommodationAPI />
            {/* AccomodationAPI is imported to the PlacesToStay view component underneath a title inside a seperate div */}
        </section>
    );
}

export default PlacesToStay;