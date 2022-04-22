import React from 'react'
import '../App.css'

function HomeHero(){
    return(
        <div className="home-hero-image">
            <div className="home-hero-text">
                <h2>Welcome to</h2>
                <h1>Travel Ireland</h1>
            </div>
        </div>
        // The home hero image is a div with a two parts. The inner div contains the home-hero-text which will overlay
        // on top of the hero Image, the outer div is given a custom css class in which the background image is imported.
    )
}

export default HomeHero