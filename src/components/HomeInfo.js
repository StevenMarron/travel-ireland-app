import React from 'react'
import '../App.css'
import TravelIreland from '../images/travel-ireland-logo.png'

function HomeInfo(){
    return(
        <div className="container-fluid home-info-row">
            <div className="row">
                <div className="col-lg-4 col-sm-12 m-auto">
                    <img src={TravelIreland} className="img-fluid home-info-image" title="Travel Ireland Logo" alt="Travel Ireland Logo" ></img> 
                </div>
                {/* The first column of a bootstrap row renders on the left on a large screen when the col numbers amount to 12 or less
                The divs then change to occupy full width on smaller screens and the first col is positioned on top of the second */}

                <div className="col-lg-6 col-sm-12 m-auto">
                    <div className="home-info-text">
                        {/* the home-info-text class is used for styling in the App.css file */}
                        <h2>Come find your next adventure with us!</h2>
                        <p>
                            Ireland might be small, but it's mighty!
                            <br/>
                            We offer a broad range of activities from golfing to arts and crafts all across the country.
                            This site makes it easy for you to find inspiration for your next trip, whether you're a visitor
                            or a native! Using our activity and accomodation services, provided by Failte Ireland, you're sure
                            to find something to entertain you on your travels. Happy searching!
                        </p>                    
                    </div>                                
                </div>
            </div>
        </div>

    )
}

export default HomeInfo