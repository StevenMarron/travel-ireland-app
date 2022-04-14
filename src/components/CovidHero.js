import React from 'react'
import CovidHeroImage from '../images/covid-19.png'

function CovidHero(){
    return(
        <img src={CovidHeroImage}
        className="img-fluid"
        alt="Covid Hero Image"></img>
    )
}

export default CovidHero