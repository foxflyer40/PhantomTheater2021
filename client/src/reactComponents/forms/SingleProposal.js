import React from 'react'
import "../formcss/singleProposal.css"


export default function SingleShow(props) {
   return (
      <div className="single_proposal">
         {/* {props.id} */}
         {/* <br /> */}
         {/* <h4>{props.title}</h4> */}
{/*        
         <br />
         <br /> */}
        <h4> {props.artist} </h4>
         <p>Show Description:</p>
        <h5>   {props.description} </h5>
         {/* {props.contactName}*/}
   
         {props.phone}
         <br />
         {props.email}
         <br />
         <button id='btnDelete' className="proposal_button" onClick={() => props.deleteThisShow(props.id)}>-Delete-</button>
         <button id='btnEdit' className="proposal_button" onClick={() => props.editThisShow(props.id)}>- Edit -</button>
         <hr />

      </div>
   )
}




