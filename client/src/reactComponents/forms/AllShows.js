import React, { useState } from 'react';
// get the database
import { firestore } from '../firebase/firebase';
import { storage } from '../firebase/firebase';
import SingleShow from './SingleShow'
import { useHistory } from 'react-router-dom'
import DatesModal from './DatesModal'

// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}

function AllShows() {
   const [modal, setModal] = useState(false)
   let [allShows, setAllShows] = useState(null)
   const history = useHistory()

   // print list of all shows
   async function seeAllShows() {
      // get all data from shows collection
      const showsRef = firestore.collection('shows')
      const showSnapshot = await showsRef.where('status', '==', 'Booked').get()
    
      // create array of all shows
      const allShowsArray = showSnapshot.docs.map(collectAllIdsAndDocs)
      if (!allShows) {
         console.log('allShowsArray = ', allShowsArray)
         setAllShows(allShowsArray)
      }
   }
   seeAllShows()

   async function handleDelete(id) {
      console.log('delete function fired')
      const allShowsIn = allShows
      await firestore.doc(`shows/${id}`).delete()
      const newShowsIn = allShowsIn.filter(show => show.id !== id)
      setAllShows(newShowsIn)
   }

   async function handleEdit(id) {
      console.log('Edit function fired', id)
      history.push(`/EditShow#${id}`)
   }

   async function addDatesThisShow(id) {
      setModal(true)
     
      console.log('addDates for ', id)
      console.log('modal = ', modal)
   }



   return (
      <div>
         { allShows ? allShows.map(show => {
           
            return <SingleShow
               key={show.id}
               deleteThisShow={handleDelete}
               editThisShow={handleEdit}
               id={show.id}
               title={show.title}
               dates={show.dates}
               type={show.type}
               blurb={show.blurb}
               artist={show.displayName}
               addDatesThisShow={addDatesThisShow}
            ></SingleShow>            
         }) : 'Loading'
         }
         <div id='modal' style={{ visibility: modal ? 'visible' : 'hidden' }} >

            
         <DatesModal ></DatesModal>
            </div>
         
      </div>
   )
}

export default AllShows