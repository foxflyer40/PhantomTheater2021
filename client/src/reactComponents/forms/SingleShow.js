import React from 'react'



export default function SingleShow(props) {
   return (
      <div>
         {/* {props.id} */}
        
         <h4>{props.title}</h4>
          <br />
         {props.dates}
         <br />
         {props.artist}
         <br />
         {props.type}
         <br />
         {props.blurb}
         <br />
         <br />
         <button id='btnDelete' onClick={() => props.deleteThisShow(props.id)}>-Delete-</button>

         <button id='btnEdit' onClick={() => props.editThisShow(props.id)}>- Edit -</button>

         <button>add Dates</button>
         <hr />

      </div>
   )
}




