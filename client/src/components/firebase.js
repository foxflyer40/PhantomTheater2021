
import firebase from 'firebase/app'
import 'firebase/firestore'


// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/storage'

// configure firebase
const firebaseConfig = {
   apiKey: 'process.env.REACT_APP_API_KEY',
   authDomain: "phantom-database-ee13a.firebaseapp.com",
   databaseURL: "https://phantom-database-ee13a.firebaseio.com",
   projectId: "phantom-database-ee13a",
   storageBucket: "phantom-database-ee13a.appspot.com",
   messagingSenderId: "915188435781",
   appId: "1:915188435781:web:f47068e4ba636fb18a4c2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);














// set firebase as window accessible 
window.firebase = firebase;

//export the database
export const firestore = firebase.firestore();

// use firebase internal timestamps
firestore.settings({ timestampsInSnapshots: true });

// export the component
export default firebase;


