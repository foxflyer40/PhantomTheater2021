// ----------------Imports -----------------------
import React from "react";
import "./Season.css";
import Calendar from "../images/calendar.jpg";
import { firestore } from "../firebase/firebase";
import { useHistory} from 'react-router-dom'

const collectAllIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};


// ------- Season function with calendar and show titles and dates
function Season() {
  
let [allshows, setAllShows] = useState(null)
const history = useHistory()

async function seeAllShows(){

  const showsRef = firestore.collection('shows')
  const showSnapshot = await showsRef.where('status', '!=', 'proposal').get


const allShowsArray = showSnapshot.docs.map(collectAllIdsAndDocs)
if (!allShows) {
  console.log('allShowsArray =', allShowsArray)
  setAllShows(allShowsArray)
}

}




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
