import React, { useState } from 'react';
// get the database
import { firestore } from '../firebase/firebase';

// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}


function Admin() {
   let [title, setTitle] = useState({})
   let [type, setType] = useState({})
   let [blurb, setBlurb] = useState({})

   let show = [title, type, blurb]


   // write to shows collection
   async function enterNewShow(event) {
      event.preventDefault()
      console.log('new show fired')
      
      // docRef and .add return a new id# assigned to a new blank entry in the db
      const docRef = await firestore.collection('shows').add(show)
      // use the new docRef to get the blank db item
      const doc = await docRef.get()

      // connect the new entry with the id returned 
      const newShow = collectAllIdsAndDocs(doc)
   }

   function handleSubmit(event) { // combine these two functions
      event.preventDefault()
      // form sets state onChange - 
      // read state
      console.log(title, ' / ', type, ' / ', blurb)

      // make object for insertion in db


      // pass it to enterNewShow to go to db
   }

   return (
      <div>
         <form id='adminForm' onSubmit={handleSubmit}>
            <label>
               Show Title:
            <input
                  type='text'
                  name='titleIn'
                  onChange={evt => setTitle(evt.target.value)}
               ></input>
            </label>

            <br />

            <label>
               Show Blurb:
            <input
                  type='text'
                  name='blurbIn'
                  onChange={evt => setBlurb(evt.target.value)}
               ></input>
            </label>

            <br />

            <label>
               Type:
            <input
                  type='text'
                  name='typeIn'
                  onChange={evt => setType(evt.target.value)}
               ></input>
            </label>
            <br />
            <input type='submit' value="submit" ></input>
         </form>
      </div>
   )
}

export default Admin