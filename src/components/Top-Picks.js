import React from "react";
import '../App.css'

function TopPicks(){
    return(
        <section className="container-fluid">
            <div className="row">
                <div className="col-lg-10 col-sm-12 m-auto top-pick">
                    <div className="top-pick-text">
                        <h2><u>Guinness Storehouse: Entrance Ticket</u></h2>
                        <h4><i>Highlights</i></h4>
                        <p>- Take a self-guided tour of Dublins most popular attraction</p>
                        <p>- Visit the Gravity Bar and admire 360-degree views of the city</p>
                        <p>- Enjoy a complimentary pint of Guinness</p><br></br>
                        <br />
                    </div>
                </div>
                <div className="col-lg-10 col-sm-12 m-auto top-pick">
                    <div className="top-pick-text">
                        <h2><u>Cliffs of Moher</u></h2>
                        <h4><i>Highlights</i></h4>
                        <p>- Enjoy a fully guided tour through the Burren along the Wild Atlantic Way</p>
                        <p>- Experience the majestic Cliffs of Moher</p>
                        <p>- See medieval castles, dry stone walls and the beautiful, stone Burren landscape</p><br></br>
                        <br />
                    </div>
                </div>
                <div className="col-lg-10 col-sm-12 m-auto top-pick">
                    <div className="top-pick-text">
                        <h2><u>Glendalough and Kilkenny Daytrip</u></h2>
                        <h4><i>Highlights</i></h4>
                        <p>- Explore medieval Kilkenny which was once the capital of Ireland</p>
                        <p>- See location sites from movies such as "P.S. I Love You" and "Braveheart"</p>
                        <p>- Enjoy the beautiful view of Glendalough and the Wicklow Mountains</p>
                        <p>- Visit a sheepdog farm and watch a sheepdog herd with his master</p><br></br>
                        <br />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TopPicks;