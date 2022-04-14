import React from "react";
import "../App.css";
import HomeCarousel from "../components/HomeCarousel";
import HomePageCard1 from "../components/HomePageCard1";
import HomePageCard2 from "../components/HomePageCard2";
import HomeHero from "../components/Home-Hero";

function Home(){
    return(
       <div className="container-fluid home-page">
            <HomeHero />
            <div className="row">
                <div className="col-lg-12 m-auto home-carousel">
                    <HomeCarousel/>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-6 card-row ">
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