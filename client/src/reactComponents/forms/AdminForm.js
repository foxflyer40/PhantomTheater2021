import React, { useState } from 'react';
// get the database
import { firestore } from '../firebase/firebase';


function AdminForm() {
   // create state for show information
   let [title, setTitle] = useState({})
   let [type, setType] = useState({})
   let [blurb, setBlurb] = useState({})

   // construct object from state to pass to db
   let show = { title: title, type: type, blurb: blurb }

   // write current state to shows collection
   async function enterNewShow(event) {
      event.preventDefault()
      // get the collection 'shows' | .doc creates new entry with auto ID | .set(show) fills new entry with show object built from state values set by form
      console.log('show before: ', show)
      firestore.collection('shows').doc().set(show)
      event.target.titleIn.value = ''
      event.target.blurbIn.value = ''
      event.target.typeIn.value = ''
      console.log('show after: ', show)
   }

   // form sets state on input change and fires enterNewShow on submit
   return (
      <div>
         <form id='adminForm' onSubmit={enterNewShow}>
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

export default AdminForm