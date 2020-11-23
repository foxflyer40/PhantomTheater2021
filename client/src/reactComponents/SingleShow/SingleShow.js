import React from 'react'



export default function SingleShow(props) {
   return (
      <div>
         {/* {props.id} */}
         <br />
         <h4>{props.title}</h4> 
         {props.dates}
         <br />
         {props.artist}
         <br />
         {props.type}
         <br />
         {props.blurb}
         <br />
         <button id='btnDelete' onClick={() => props.deleteThisShow(props.id)}>-Delete-</button>
         <button id='btnEdit' onClick={() => props.editThisShow(props.id)}>- Edit -</button>
         <hr />

      </div>
   )
}




