import React, { useState } from 'react'

import { firestore } from '../firebase/firebase'
import { storage } from '../firebase/firebase'



export default function SingleShow(props) {
   return (
      <div>
         {props.id}
         <br />
         {props.title} {' - '}
         {props.dates}
         <br />
         {props.artist}
         <br />
         {props.type}
         <br />
         {props.blurb}
         <br />
         <button id='btnDelete' onClick={() => props.deleteThisShow(props.id)}>Delete</button>
         <hr />

      </div>
   )
}




