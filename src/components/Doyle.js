import React from 'react';
import {useState} from 'react'
import '../App.css'
import MsDoyle from '../images/Doyle.png'

function Doyle(){
    const [visible, setVisible] = useState ("doyle")
    
    function closeDoyle(){
        setVisible("doyle-close")
    }
    return(
        <div className={visible}>
            <div>
                <button className="doyle-button btn btn-sm" onClick={closeDoyle}>close</button>    
            </div>
            <div>
            <img src={MsDoyle} className="img-fluid" height="300"title="Doyle" alt="Doyle" ></img>      
            </div>        
        </div>

    )
}

export default Doyle;