//------- Imports -------
import React from "react";
import "../formcss/seasonEvent.css";
import { Link } from "react-router-dom";

// -------- Season event component functionality and export

function SeasonEvent(props) {
  let showImage = (
    <img src={props.imageLg} alt="" style={{ width: 200 + "px" }} />
  );
  let numberOfShows = props.dates.length;


  function changeDate(date) {
    //----------function changing military time string to regular time
    let newTime;
    // ---------sepparating string at T
    let dateFix = date.split("T");

    console.log(dateFix);

    let startDate = dateFix[0];
    let year = startDate.split("-")[0];
    let month = startDate.split("-")[1];
    let day = startDate.split("-")[2];

    let endDate = month + "/" + day + "/" + year;
    console.log(endDate);

    let time = dateFix[1];

    let hours = time.split(":")[0];
    let minutes = time.split(":")[1];

    if (hours > 12) {
      newTime = hours - 12 + ":" + minutes + " PM";
    }

    let finalDate = endDate + " " + newTime;

    return finalDate;
  }

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

      
      {numberOfShows >= 1 ? <p className="date">{changeDate(props.dates[0])}</p> : console.log()}
      {numberOfShows >= 2 ? <p className="date">{changeDate(props.dates[1])}</p> : console.log()}
      {numberOfShows >= 3 ? <p className="date">{changeDate(props.dates[2])}</p> : console.log()}
      {numberOfShows >= 4 ? <p className="date">{changeDate(props.dates[3])}</p> : console.log()}

      <p className="date">{props.dates[4]}</p>
      <Link to="Reserve">
        <button className="season_button">Reserve</button>
      </Link>
      <div className="line"></div>
    </div>
  );
}

export default SeasonEvent;
