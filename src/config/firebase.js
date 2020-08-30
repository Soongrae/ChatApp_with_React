import * as firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDYnn8knuu0dfDFrKxreTLaJJ9POmaawCw",
    authDomain: "chatapp-again3.firebaseapp.com",
    databaseURL: "https://chatapp-again3.firebaseio.com",
    projectId: "chatapp-again3",
    storageBucket: "chatapp-again3.appspot.com",
    messagingSenderId: "729504287961",
    appId: "1:729504287961:web:c898af41b5261c0c4a42c8"
}

firebase.initializeApp(firebaseConfig)

export default firebase