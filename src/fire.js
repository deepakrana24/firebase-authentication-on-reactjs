import firebase from 'firebase/app'
import 'firebase/auth'
const app= firebase.initializeApp({

    apiKey: "AIzaSyBfultPaKkU-dnRZJQsLNFan5IZfbnYDFk",
    authDomain: "reactjs-firebase-cbb4d.firebaseapp.com",
    projectId: "reactjs-firebase-cbb4d",
    storageBucket: "reactjs-firebase-cbb4d.appspot.com",
    messagingSenderId: "259475226653",
    appId: "1:259475226653:web:c5bf006b7fa3bae3f586f4",
    measurementId: "G-5VXGMD6ZDD"
})
        
      
export const auth = app.auth()
export default app