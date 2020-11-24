// ----------------Imports -----------------------
import React from "react";
import "./Season.css";
import Calendar from "../images/calendar.jpg";

// ------- Season function with calendar and show titles and dates
function Season() {
  return (
    <div className="season_container">
      <h1>Season Page!</h1>
      <div className="calendar_container">
      <div className="calendar_season">
        <img src={Calendar} />
      </div>
      <ul className="season_list">
        <li>
          <a href="#">Show Title!</a>20/20/2020
        </li>
        <li>
          <a href="#">Show Title!</a> 20/20/2020
        </li>
        <li>
          <a href="#">Show Title!</a> 20/20/2020
        </li>

        <li>
          <a href="#">Show Title!</a> 20/20/2020
        </li>
        <li>
          <a href="#">Show Title!</a> 20/20/2020
        </li>
        <li>
          <a href="#">Show Title!</a> 20/20/2020
        </li>

        <li>
          <a href="#">Show Title!</a> 20/20/2020
        </li>
        <li>
          <a href="#">Show Title!</a> 20/20/2020
        </li>
        <li>
          <a href="#">Show Title!</a> 20/20/2020
        </li>
      </ul>
    </div>
    </div>
  );
}

//------export the component---------
export default Season;
