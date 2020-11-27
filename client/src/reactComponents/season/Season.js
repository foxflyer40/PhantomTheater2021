// ----------------Imports -----------------------
import React, {useState} from "react";
import "./Season.css";
import Calendar from "../images/calendar.jpg";
import { firestore } from "../firebase/firebase";
import SeasonEvent from '../forms/SeasonEvent';




const collectAllIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};


// ------- Season function with calendar and show titles and dates
function Season() {
  
let [allShows, setAllShows] = useState(null)


async function seeAllShows(){

  const showsRef = firestore.collection('shows')
  const showSnapshot = await showsRef.where('status', '!=', 'proposal').get()


const allShowsArray = showSnapshot.docs.map(collectAllIdsAndDocs)
if (!allShows) {
  console.log('allShowsArray =', allShowsArray)
  setAllShows(allShowsArray)
}

}

seeAllShows()
console.log('line 35')


  return (
    <div className="season_container">
      <h1>Season Page!</h1>
      { allShows ? allShows.map(show => {

        return <SeasonEvent
        key = {show.id}
        id = {show.id}
        title={show.title}
        dates={show.dates}
        type ={show.type}
        blurb = {show.blurb}
        artist = {show.displayName}
        imageLg = {show.imageLg}
        ></SeasonEvent>
 
      }) : 'loading'
      
      }

    </div>
  );
}

//------export the component---------
export default Season;
