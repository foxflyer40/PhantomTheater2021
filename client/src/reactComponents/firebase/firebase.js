import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// import 'firebase/database'
// import 'firebase/storage'

// configure firebase
const app =  firebase.initializeApp({
   apiKey: 'AIzaSyC-QSpHlepjOuyJHG8pp7sT6Gp8WVzDM9A',
   authDomain: 'phantom-auth-test.firebaseapp.com',
   databaseURL: 'https://phantom-auth-test.firebaseio.com',
   projectId: 'phantom-auth-test',
   storageBucket: 'phantom-auth-test.appspot.com',
   messagingSenderId: '784040185097',
   appId: '1:784040185097:web:71819b25d547914b6ad7d8'
});




// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);




// set firebase as window accessible 
// window.firebase = firebase;

//export the database
export const firestore = app.firestore();

// use firebase internal timestamps
firestore.settings({ timestampsInSnapshots: true });

// export the component
export default app;

export const auth = app.auth()


