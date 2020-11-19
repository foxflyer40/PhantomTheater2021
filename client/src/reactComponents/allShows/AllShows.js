import React from 'react';
// get the database
import { firestore } from '../firebase/firebase';
import { storage } from '../firebase/firebase'

// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}





function AllShows() {

   // print list of all shows
   async function seeAllShows() {
      // get all data from shows collection
      const showSnapshot = await firestore.collection('shows').get()
      // create array of all shows
      const allShows = showSnapshot.docs.map(collectAllIdsAndDocs)
      // use for each to iterate over show array and print out details
      allShows.forEach(show => {
         // set array values to useable vars
         let showId = show.id
         let showTitle = show.title
         let showType = show.type
         let showBlurb = show.blurb
         // create dom elements to add to list
         //not needed
         let allShowsList = document.getElementById('all-shows-list')
         let displayId = document.createElement('h6')
         let displayTitle = document.createElement('h3')
         let displayType = document.createElement('h4')
         let displayBlurb = document.createElement('h5')
         let displayBreak = document.createElement('br')
         // connect variables and dom elements
         displayId.textContent = showId
         displayTitle.textContent = showTitle
         displayType.textContent = showType
         displayBlurb.textContent = showBlurb
         // append the dislpay to the container
         //not needed
         // allShowsList.appendChild(displayId)
         // allShowsList.appendChild(displayTitle)
         // allShowsList.appendChild(displayType)
         // allShowsList.appendChild(displayBlurb)
         // allShowsList.appendChild(displayBreak)
      })
   }
seeAllShows()
   return (
      <div>

         <div id='all-shows-list'>All Shows</div>

      </div>
   )
}

export default AllShows