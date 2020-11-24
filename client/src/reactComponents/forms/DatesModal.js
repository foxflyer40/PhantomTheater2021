import React from 'react'
import { Alert } from 'react-bootstrap'


const DatesModal = (props) => {


   const submitForm = (event) => {
     props.closeModal()
   }

   


   return (
      <div>
         <form onSubmit={submitForm}>
            Modal Window
             {props.numOfShows}
             <input type='submit' />
         </form>
      </div>




   )
}



export default DatesModal