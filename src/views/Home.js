import React from 'react';
import '../styles/Home.css';
import HomeCarousel from '../components/HomeCarousel';
import TravelVideo from '../components/TravelVideo';
import HomePageCards from '../components/HomePageCards';

function Home(){
    return(
       <div className="container-fluid home-page">
            <div className="row carousel-cards">
                <div className="col-lg-6 col-md-12 col-sm-12 home-carousel p-0">
                    <HomeCarousel/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 home-page-cards">
                    <HomePageCards/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 col-sm-10 p-0 m-auto">
                    <TravelVideo />
                </div>
            </div>
        </div>
    );
}

export default Home;