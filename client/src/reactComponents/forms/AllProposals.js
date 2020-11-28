import React, { useState } from 'react'
import { firestore } from '../firebase/firebase'
import { storage } from '../firebase/firebase';
import { useHistory } from 'react-router-dom'
import SingleProposal from './SingleProposal'

// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}


export default function AllProposals() {

   let [allProposals, setAllProposals] = useState(null)
   const history = useHistory()

   async function seeAllProposals() {
      // get all data from shows collection
      const proposalRef = firestore.collection('shows')
      const proposalSnapshot = await proposalRef.where('status', '==', 'Proposal').get()

      // create array of all proposals
      const allProposalsArray = proposalSnapshot.docs.map(collectAllIdsAndDocs)
      if (!allProposals) {
         console.log('allProposalsArray = ', allProposalsArray)
         setAllProposals(allProposalsArray)
      }
   }
   seeAllProposals()

   async function handleDelete(id) {
      console.log('delete function fired')
      const allProposalIn = allProposals
      await firestore.doc(`shows/${id}`).delete()
      const newProposalIn = allProposalIn.filter(show => show.id !== id)
      setAllProposals(newProposalIn)
   }

   async function handleEdit(id) {
      console.log('Edit function fired', id)
      history.push(`/EditShow#${id}`)
   }


   return (
      <div>
         { allProposals ? allProposals.map(proposal => {
            return <SingleProposal
               key={proposal.id}
               deleteThisShow={handleDelete}
               editThisShow={handleEdit}
               id={proposal.id}
               // title={proposal.title}
               artist= {`Artist: ${proposal.artist}`} 
               // contactName={proposal.contactName}
               phone={`Phone: ${proposal.phone}`}
               email={`Email:  ${proposal.email}`}
               description={`Show Description: ${proposal.description}`}
            ></SingleProposal>
         }) : 'Loading'
         }
      </div>
   )
}
