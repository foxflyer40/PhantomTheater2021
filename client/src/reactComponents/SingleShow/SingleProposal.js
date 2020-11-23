import React from 'react'



export default function SingleShow(props) {
   return (
      <div>
         {/* {props.id} */}
         {/* <br /> */}
         {/* <h4>{props.title}</h4> */}
{/*        
         <br />
         <br /> */}
        <h4> {props.artist} </h4>
         
        <h5>   {props.description} </h5>
         {/* {props.contactName}*/}
         <br /> 
         {props.phone}
         <br />
         {props.email}
         <br />
         <button id='btnDelete' onClick={() => props.deleteThisShow(props.id)}>-Delete-</button>
         <button id='btnEdit' onClick={() => props.editThisShow(props.id)}>- Edit -</button>
         <hr />

      </div>
   )
}




