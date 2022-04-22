import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import "../App.css";
import MsDoyle from "../images/Doyle.png";

function Doyle(){
    const [visible, setVisible] = useState ("doyle");
    // the default useState is set to the css class of "doyle" where the img below is visible
    // once the component is animated into view it can be closed view a button. an onclick function
    // changes the useState of the visibility variable to a new css value where the component is no longer visible.
    
    function closeDoyle(){
        setVisible("doyle-close")
    }
    return(
        <div className={visible}>
            <div>
                <button className="doyle-button btn btn-sm" onClick={closeDoyle}>close</button>    
            </div>
            <div>
                <img src={MsDoyle} className="img-fluid" height="300"title="Doyle" alt="Doyle" />    
            </div>        
        </div>
    );
}

export default Doyle;