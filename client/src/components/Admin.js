import React, { useState } from 'react';
// get the database
import { firestore } from './firebase';

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
   async function enterNewShow() {
      console.log('new show fired')
      //on click of submit add values to form input

      // docRef and .add return a new id# assigned to a new blank entry in the db
      const docRef = await firestore.collection('shows').add(show)
      // use the new docRef to get the blank db item
      const doc = await docRef.get()

      // connect the new entry with the id returned 
      const newShow = collectAllIdsAndDocs(doc)
   }

   function handleSubmit(event) {
      event.preventDefault()
      // recieve input from form
      const target = event.target
      const value = target.value
      const name = target.name

      console.log(name)

      // make object for insertion in db
   }

   return (
      <div>
         <form id='adminForm' >
            <label>
               Show Title:
            <input
                  type='text'
                  name='titleIn'
                  onSubmit={handleSubmit}
               ></input>
            </label>

            <br />

            <label>
               Show Blurb:
            <input
                  type='text'
                  name='blurbIn'
                  onSubmit={handleSubmit}
               ></input>
            </label>

            <br />

            <label>
               Type:
            <input
                  type='text'
                  name='typeIn'
               ></input>
            </label>
            <br />
            <input type='submit' value="submit" ></input>
         </form>
      </div>
   )
}

export default Admin