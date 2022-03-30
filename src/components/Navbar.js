import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import Ireland from '../images/Ireland-temp-logo.png'

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg">
            <Link to="/" className="navbar-logo">
                <img src={Ireland} className="navbar-brand" alt="Ireland Logo"></img>    
            </Link>
            
            <div class="container-fluid">     
                <Link to="/" className="nav-link ms-auto">Home</Link>
                <Link to="/thingstodo" className="nav-link">Things To Do</Link>
                <Link to="/placestostay" className="nav-link">Places To Stay</Link>                    
            </div>
        </nav>

    )
}

export default Navbar