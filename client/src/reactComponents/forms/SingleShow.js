// ------ Imports ---
import React from "react";
import "../formcss/singleShow.css";

//  ---- Single show component functionality and export ----

export default function SingleShow(props) {
  let numberOfShows = props.dates.length;

  function changeDate(date) {
    //------- changing the military time string to normal tim

    let newTime;
    ///sepparating the string at the T.
    let dateFix = date.split("T");

    
    console.log(dateFix);
    let startDate = dateFix[0];
    let year = startDate.split("-")[0];
    let month = startDate.split("-")[1];
    let day = startDate.split("-")[2];

    let endDate = month + "/" + day + "/" + year;
    console.log(endDate);

    /// targetting second item of the dateFix array (which is the time)
    let time = dateFix[1];
    // hours is the first index item of the time array which was split at the :
    let hours = time.split(":")[0];
    let minutes = time.split(":")[1];

    // if hours are a higher number than 12 (milt time)  then subtract 12 to convert to normal time
    if (hours > 12) {
      newTime = hours - 12 + ":" + minutes + " PM";
    } else {
      // otherwise the time will just print the number if it is lower than 12
      newTime = hours + ":" + minutes;
    }

    let finalDate = endDate + " " + newTime;

    return finalDate;
  }
  
  return (
    <div className="single_show">
      {/* {props.id} */}
      {/* {numberOfShows} */}
      {/* {today} */}
      <h4>{props.title}</h4>

      {numberOfShows >= 1 ? changeDate(props.dates[0]) : console.log()}
      <br />
      {numberOfShows >= 2 ? changeDate(props.dates[1]) : console.log()}
      <br />
      {numberOfShows >= 3 ? changeDate(props.dates[2]) : console.log()}
      <br />
      {numberOfShows >= 4 ? changeDate(props.dates[3]) : console.log()}
      <br />
      {numberOfShows >= 5 ? changeDate(props.dates[4]) : console.log()}
      <br />
      {numberOfShows >= 6 ? changeDate(props.dates[5]) : console.log()}

      {numberOfShows >= 6 ? props.dates[5] : console.log()}
      <br />
      {props.artist}
      <br />
      {props.type}
      <br />
      <p className="blurb">{props.blurb}</p>
      <br />
      <div className="buttons">
        <button
          id="btnDelete"
          className="show_button"
          onClick={() => props.deleteThisShow(props.id)}
        >
          -Delete-
        </button>

        <button
          id="btnEdit"
          className="show_button"
          onClick={() => props.editThisShow(props.id)}
        >
          - Edit -
        </button>
      </div>
      {/* <button id='btnAddDates' className="show_button" onClick={() => props.addDatesThisShow(props.id) }> add Dates</button> */}
      <div className="line"></div>
      <br />
    </div>
  );
}

