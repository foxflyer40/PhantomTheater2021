import React, { useState } from 'react'
import { firestore } from '../firebase/firebase'

function ProposalForm() {

   let [title, setTitle] = useState({})
   let [artist, setArtist] = useState({})
   let [description, setDescription] = useState({})
   let [dates, setDates] = useState({})
   let [contactName, setContactName] = useState({})
   let [phone, setPhone] = useState({})
   let [email, setEmail] = useState({})

   let showProposal = {
      title: title,
      description: description,
      dates: dates,
   }

   let artistProposal = {
      artist: artist,
      contactName: contactName,
      phone: phone,
      email: email
   }

   async function submitProposal(event) {
      event.preventDefault()
      firestore.collection('artists').doc().set(artistProposal)
      firestore.collection('shows').doc().set(showProposal)
      event.target.title.value = ''
      event.target.artist.value = ''
      event.target.description.value = ''
      event.target.dates.value = ''
      event.target.contactName.value = ''
      event.target.phone.value = ''
      event.target.email.value = ''
   }



   return (
      <div>
         <form id='ProposalForm' onSubmit={submitProposal} >
            <label>
               Show Title
            <input type='text' name='title' onChange={evt => setTitle(evt.target.value)}></input>
            </label>

            <br />

            <label>
               Artist
            <input type='text' name='artist' onChange={evt => setArtist(evt.target.value)}></input>
            </label>

            <br />

            <label>
               Description of show:
                     <input type='text' name='description' onChange={evt => setDescription(evt.target.value)}></input>
            </label>

            <br />

            <label>
               Dates Requested
            <input type='text' name='dates' onChange={evt => setDates(evt.target.value)}></input>
            </label>

            <br />

            <label>
               Contact Name
                     <input type='text' name='contactName' onChange={evt => setContactName(evt.target.value)}></input>
            </label>

            <br />

            <label>
               phone
            <input type='text' name='phone' onChange={evt => setPhone(evt.target.value)}></input>
            </label>

            <br />

            <label>
               email
            <input type='text' name='email' onChange={evt => setEmail(evt.target.value)}></input>
            </label>

            <br />

            <input type='submit' value='submit' ></input>

         </form>
      </div>
   )
}

export default ProposalForm


