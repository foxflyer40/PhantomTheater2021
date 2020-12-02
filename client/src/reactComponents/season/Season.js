// ----------------Imports -----------------------
import React, { useState } from "react";
import "./Season.css";
import Calendar from "../images/calendar.jpg";
import { firestore } from "../firebase/firebase";
import SeasonEvent from '../forms/SeasonEvent';
import Stage from "../images/stage.jpg";



const collectAllIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};


// ------- Season function with calendar and show titles and dates
function Season() {

  let [allShows, setAllShows] = useState(null)


  async function seeAllShows() {

    const showsRef = firestore.collection('shows')
    const showSnapshot = await showsRef.where('status', '!=', 'Proposal').get()


    const allShowsArray = showSnapshot.docs.map(collectAllIdsAndDocs)
    if (!allShows) {
      console.log('allShowsArray =', allShowsArray)
      setAllShows(allShowsArray)
    }

  }

  seeAllShows()

  return (
    <div className="season_container">
      <h1>Season 2019</h1>
      { allShows ? allShows.map(show => {

        return <SeasonEvent
          key={show.id}
          id={show.id}
          title={show.title}
          dates={show.dates}
          type={show.type}
          artist={show.artist}
          blurb={show.blurb}
          artist={show.displayName}
          // imageLg={show.imageLg}
          imageLg={Stage}
        > </SeasonEvent>

      }) : 'loading'

      }
      
    </div>
  );
}

//------export the component---------
export default Season;


