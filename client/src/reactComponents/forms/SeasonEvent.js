import React from 'react'
import "../formcss/seasonEvent.css"
import {Link} from "react-router-dom"

function SeasonEvent(props) {
    let showImage = <img src={props.imageLg} alt="" style={{ width: 200 + 'px' }} />
    return (
        <div className="season_container">
            <h3> {props.title} </h3>
            <br />
            {showImage}
            <br />
            {props.artist}
            <br />
            <p className="blurb">{props.blurb}</p>
            <br />
            <p className="date">{props.dates[0]}</p>
            <p className="date">{props.dates[1]}</p>
            <p className="date">{props.dates[2]}</p>
            <p className="date">{props.dates[3]}</p>
            <p className="date">{props.dates[4]}</p>
               <Link to="Reserve"><button className="season_button">Reserve</button></Link> 
            <div className="line"></div>
        </div>

    )
}

export default SeasonEvent
