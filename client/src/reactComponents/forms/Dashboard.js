import React, { useState } from "react";
import { Button } from "react-bootstrap";
// get the database
import { firestore } from "../firebase/firebase";
import AllShows from './AllShows'
import AllProposals from './AllProposals'
import AdminForm from './AdminForm'




function Dashboard() {
   const [toggle, setToggle] = useState('shows')

   
   function editShow() {
      setToggle('shows')
      console.log(toggle)
   }

   function editProposal() {
      setToggle('proposals')
      console.log(toggle)
   }

   function addShow() {
      setToggle('add')
   }


   return (
      <div>
         <h2>Admin Dashboard</h2>
         <div className='className="d-flex align-items-space-around justify-content-center' >

            <Button onClick={editProposal} type='submit'>Proposals</Button>
            <Button onClick={editShow} type='submit'>Shows</Button>
            <Button onClick={addShow} type='submit'>Add a Show</Button>
            <hr />
            <div>
               { toggle === 'add' ? <AdminForm /> : 
                  toggle === 'shows' ? < AllShows /> : <AllProposals />}
               
               
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
