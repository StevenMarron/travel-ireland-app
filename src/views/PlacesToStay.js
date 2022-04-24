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
                            <p>Looking for accommodation during your visit to the Emerald Isle?</p>
                            <p>Your search stops here. The 'Travel Ireland' app can help you find the right spot no matter which county you're visiting. Try it today! Enter the name of the county you're visiting and hit "Search". Our list of accommodation will guide on the 50 best places to stay. Use the number on each result as a reference when sharing. Every listing includes the name of the <em>stay</em>, its location, the type Accommodation, a web address for further information and a phone number should you wish to contact the owners.</p>
                        </div>
                    </div>
                </section>
                <AccommodationAPI />
                <br />
                {/* AccomodationAPI is imported to the PlacesToStay view component underneath a title inside a separate div */}
            </section>
        </section>
    );
}

export default PlacesToStay;