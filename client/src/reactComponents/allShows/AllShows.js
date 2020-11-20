import React, { useState } from 'react';
// get the database
import { firestore } from '../firebase/firebase';
import { storage } from '../firebase/firebase';
import SingleShow from '../SingleShow/SingleShow'

// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}

function AllShows() {
   let [allShows, setAllShows] = useState(null)


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
  

 async function  handleDelete(id) {
      console.log('function fired')
    const allShowsIn = allShows
    
    await firestore.doc(`shows/${id}`).delete()
      const newShowsIn = allShowsIn.filter(show => show.id !== id)
    setAllShows(newShowsIn)
    

   }

   return (
      <div>
           { allShows ? allShows.map(show => {
            return <SingleShow
               deleteThisShow={handleDelete}
               id={show.id}
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

export default AllShows