import React, { useState } from "react";
import { Button } from "react-bootstrap";
// get the database
import { firestore } from "../firebase/firebase";
import { useHistory } from 'react-router-dom'
import AllShows from './AllShows'
import AllProposals from './AllProposals'




function Dashboard() {
   const [toggle, setToggle] = useState('shows')

   const history = useHistory()

   function editShow() {
      setToggle('shows')
      console.log(toggle)
   }

   function editProposal() {
      setToggle('proposals')
      console.log(toggle)
   }


   return (
      <div>
         <h2>Admin Dashboard</h2>
         <div className='className="d-flex align-items-space-around justify-content-center' >

            <Button onClick={editProposal} type='submit'>Proposals</Button>
            <Button onClick={editShow} type='submit'>Shows</Button>
            <hr />
            <div>
               {toggle === 'shows' ? < AllShows /> : <AllProposals />}
               
               
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
