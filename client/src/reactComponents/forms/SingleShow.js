import React from 'react'




export default function SingleShow(props) {
   let numberOfShows = props.dates.length
// let today = new Date()

   return (
      <div>
         {/* {props.id} */}
         {numberOfShows}
         {/* {today} */}
         <h4>{props.title}</h4>
        
         {numberOfShows >= 1 ? props.dates[0] : console.log()}
         <br />
         {numberOfShows >= 2 ? props.dates[1] : console.log()}
         <br />
         {numberOfShows >= 3 ? props.dates[2] : console.log()}
         <br />
         {numberOfShows >= 4 ? props.dates[3] : console.log()}
         <br />
         {numberOfShows >= 5 ? props.dates[4] : console.log()}
         <br />
         {numberOfShows >= 6 ? props.dates[5] : console.log()}
       
         
         {props.artist}
         <br />
         {props.type}
         <br />
         {props.blurb}
         <br />
         <br />
         <button id='btnDelete' onClick={() => props.deleteThisShow(props.id)}>-Delete-</button>

         <button id='btnEdit' onClick={() => props.editThisShow(props.id)}>- Edit -</button>

         <button id='btnAddDates' onClick={() => props.addDatesThisShow(props.id) }> add Dates</button>
         <hr />

      </div>
   )
}




