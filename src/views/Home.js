import React from 'react';
import '../App.css';
import HomeCarousel from '../components/HomeCarousel';
import HomePageCard1 from '../components/HomePageCard1';
import HomePageCard2 from '../components/HomePageCard2';
import HomeHero from '../components/Home-Hero';
import HomeInfo from '../components/HomeInfo';

function Home(){
    return(
       <div className="container-fluid">

            
            <div className="row">
                <div className="col-lg-12 m-auto">
                    <HomeHero/>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-sm-12 m-auto">
                    <HomeInfo/>
                </div>
            </div>
             
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 m-auto home-carousel">
                    <HomeCarousel/>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-6 col-md-12 col-sm-12 card-row ">
                    <HomePageCard1/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 card-row">
                    <HomePageCard2/>
                </div>                  
            </div>
        </div>
    );
}

export default Home;