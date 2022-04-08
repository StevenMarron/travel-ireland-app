import React from 'react'
import {Link} from 'react-router-dom'
import LoughCrew from '../images/Lough Crew.jpg'
import '../App.css'

function HomePageCard1(){
    return(
        <div className="card-container">
            <div className="row home-page-card">
                <Link to="/thingstodo">
                    <img src={LoughCrew} className="card-image" title="Lough Crew Cairns" alt="Lough Crew Cairns"></img>
                </Link>    

                <div className="col-md-6 col-sm-12 card-body">
                    <h2 className="card-title">Things to Do!</h2>
                        <p className="card-text">
                            There's no shortage of things to do on this little green island of ours!
                            Be sure to sample some of the local food and drink as you explore it.
                        </p>
                        <p className="card-text">
                            Check out some of the activities on offer on our
                        </p>
                        <Link to="/thingstodo" >
                            <button className="home-card-button">
                                Activities page
                            </button>
                        </Link>
                </div>            
            </div>
        </div> 
    )
}

export default HomePageCard1