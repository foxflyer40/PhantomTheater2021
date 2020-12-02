// ------ Imports --- 
import React from "react";
import "../formcss/singleShow.css";


//  ---- Single show component functionality and export ---- 

export default function SingleShow(props) {
  let numberOfShows = props.dates.length;

  //------- changing the military time string to normal tim 
  props.dates.forEach((date) => {
    let newTime;
    ///sepparating the string at the T.
    let dateFix = date.split("T");
    console.log(dateFix.length)

    if (dateFix.lenght > 0) {
      console.log(dateFix);

      /// targetting second item of the dateFix array (which is the time)
      let time = dateFix[1];
      // hours is the first index item of the time array which was split at the :
      let hours = time.split(":")[0];

      // if hours are a higher number than 12 (milt time)  then subtract 12 to convert to normal time
      if (hours > 12) {
        newTime = hours - 12;
      } else {
        // otherwise the time will just print the number if it is lower than 12
        newTime = hours;
      }

      console.log(newTime);
      return newTime;
    }
  });



  return (
    <div className="single_show">
      {/* {props.id} */}
      {/* {numberOfShows} */}
      {/* {today} */}
      <h4>{props.title}</h4>

      {numberOfShows >= 1 ? props.dates[0] : console.log()}
      {numberOfShows >= 1 ? <br /> : console.log()}

      {numberOfShows >= 2 ? props.dates[1] : console.log()}
      {numberOfShows >= 2 ? <br /> : console.log()}

      {numberOfShows >= 3 ? props.dates[2] : console.log()}
      {numberOfShows >= 3 ? <br /> : console.log()}

      {numberOfShows >= 4 ? props.dates[3] : console.log()}
      {numberOfShows >= 4 ? <br /> : console.log()}

      {numberOfShows >= 5 ? props.dates[4] : console.log()}
      {numberOfShows >= 5 ? <br /> : console.log()}

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
