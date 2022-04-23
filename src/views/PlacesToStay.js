import React from "react";
import AccommodationAPI from "../components/AccommodationAPI";

function PlacesToStay(){
    return(
        <section>
            <section id="accommhero" className="container-fluid">
                <section className="container-lg">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="main-heading text-light">Accommodation in Ireland</h1>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid">
                <section className="container-lg">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Where to stay in Ireland</h2>
                        </div>
                    </div>
                </section>
                <AccommodationAPI />
                {/* AccomodationAPI is imported to the PlacesToStay view component underneath a title inside a separate div */}
            </section>
        </section>
    );
}

export default PlacesToStay;