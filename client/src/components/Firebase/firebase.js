
import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


const config = {
   apiKey: "AIzaSyC32BYfJa6MVeFxrCqnToHtY-jXTnyvX5Q",
   authDomain: "phantom-theater.firebaseapp.com",
   databaseURL: "https://phantom-theater.firebaseio.com",
   projectId: "phantom-theater",
   storageBucket: "phantom-theater.appspot.com",
   messagingSenderId: "639829835229",
   appId: "1:639829835229:web:380419746959a2c613ca34"
}


firebase.initializeApp(config)
const database = firebase.database()
const ref = database.ref()

async function read() {

   let myVar = await ref.once('value')
      
   return myVar
}

read()

export default firebase



