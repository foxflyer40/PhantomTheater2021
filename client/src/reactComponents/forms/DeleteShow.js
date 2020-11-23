import React, { useState } from 'react';
// get the database
import { firestore } from '../firebase/firebase';
import { storage } from '../firebase/firebase';
import SingleShow from '../SingleShow/SingleShow'

// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}

function DeleteShow() {
   let [allShows, setAllShows] = useState("")


   // print list of all shows
   async function seeAllShows() {
      // get all data from shows collection
      const showSnapshot = await firestore.collection('shows').get()
      // create array of all shows
      const allShowsArray = showSnapshot.docs.map(collectAllIdsAndDocs)
      if (!allShows) {
         setAllShows(allShowsArray)
      }
   }
   seeAllShows()
   console.log(allShows)

   async function deleteThisShow() {
   

}


   return (
      <div>
         {/* map over all shows array
            take data for each show and pass as props to single show         
         */}
         { allShows ? allShows.map(show => {
            return <SingleShow
               id={show.Id}
               title={show.title}
               dates={show.dates}
               type={show.type}
               blurb={show.blurb}
               artist={show.displayName}
            ></SingleShow>
         }) : 'Loading'
         }
       
      </div>
   )
}

export default DeleteShow