import React, { useState } from 'react'
import ShowTimeInput from './ShowTimeInput'

const DatesModal = (props) => {
   let [numOfShows, setNumOfShows] = useState(0)
 
   const submitForm = (event) => {
      props.closeModal()
   }

   return (
      <div>
         <span>
         <input
            type='number'
            name='numberOfShows'
            onChange={(evt) => setNumOfShows(evt.target.value)}
            style={{width: 25}}>
            </input> Number of shows</span>
         <form onSubmit={submitForm}>
            {numOfShows >= 1 ? <ShowTimeInput></ShowTimeInput> : console.log()}
            {numOfShows >= 2 ? <ShowTimeInput></ShowTimeInput> : console.log()}
            {numOfShows >= 3 ? <ShowTimeInput></ShowTimeInput> : console.log()}
            {numOfShows >= 4 ? <ShowTimeInput></ShowTimeInput> : console.log()}
            {numOfShows >= 5 ? <ShowTimeInput></ShowTimeInput> : console.log()}
            {numOfShows >= 6 ? <ShowTimeInput></ShowTimeInput> : console.log()}
            <input type='submit' />
         </form>
      </div>
   )
}

export default DatesModal