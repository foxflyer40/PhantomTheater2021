import React from 'react';
// get the database
import { firestore } from '../firebase/firebase';
import { storage } from '../firebase/firebase'

// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}
