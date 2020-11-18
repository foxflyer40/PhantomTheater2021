import React, { useState } from "react";
import { Button } from "react-bootstrap";
// get the database
import { firestore } from "../firebase/firebase";
import { useHistory } from 'react-router-dom'


// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};


function Dashboard() {

const history = useHistory()

function editShow() {
   history.push('/adminForm')
}


  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className='className="d-flex align-items-space-around justify-content-center' >
      <Button type='submit'>View/Edit Show Proposal</Button>
      <Button onClick={editShow} type='submit'>Add/Edit Existing Show</Button>
      <Button type='submit'>Add/Edit Artist</Button>
      </div>
    </div>
  );
}

export default Dashboard;
