import React from 'react'
import { Alert } from 'react-bootstrap'
import ShowTimeInput from './ShowTimeInput'

const DatesModal = (props) => {

   console.log(props.numOfShows)

   const submitForm = (event) => {
      props.closeModal()
   }

   return (
      <div>
         <form onSubmit={submitForm}>
            {props.numOfShows >= 1 ? <ShowTimeInput></ShowTimeInput> : console.log('here')}
            {props.numOfShows >= 2 ? <ShowTimeInput></ShowTimeInput> : console.log('here')}
            {props.numOfShows >= 3 ? <ShowTimeInput></ShowTimeInput> : console.log('here')}
            {props.numOfShows >= 4 ? <ShowTimeInput></ShowTimeInput> : console.log('here')}
            {props.numOfShows >= 5 ? <ShowTimeInput></ShowTimeInput> : console.log('here')}
            {props.numOfShows >= 6 ? <ShowTimeInput></ShowTimeInput> : console.log('here')}
            <input type='submit' />
         </form>
      </div>
   )
}

export default DatesModal