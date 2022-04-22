import React from "react";
import "../App.css";
import HomeCarousel from "../components/HomeCarousel";
import HomePageCard1 from "../components/HomePageCard1";
import HomePageCard2 from "../components/HomePageCard2";
import HomeHero from "../components/Home-Hero";
import HomeInfo from "../components/HomeInfo";

function Home(){
    return(
       <div className="container-fluid">
           {/* container-fluid bootstrap class was used to create responsive container for home page */}
            <div className="row">
                <div className="col-lg-12 m-auto">
                    {/* m-auto centers the col div */}
                    <HomeHero/>
                    {/* Home-hero component imported and placed at top of home page */}
                </div>
            </div>
            <div className="row fadein">
                {/* fade-in css animation class applies animation to home info component as a whole */}
                <div className="col-lg-12 m-auto">
                    <HomeInfo/>
                </div>
            </div>
            <div className="row fadein">
                <div className="col-lg-12 m-auto">
                    <HomeCarousel/>
                </div>
            </div>
            <div className="row fadein">
                <div className="col-lg-6 card-row ">
                    {/* Each card takes up 6 out of the possible 12 length of bootstrap row */}
                    <HomePageCard1 />
                </div>
                <div className="col-lg-6 card-row">
                    <HomePageCard2 />
                </div>                  
            </div>
        </div>
    );
}

export default Home;
// Home component exported, ready for import into the App.js file as a view