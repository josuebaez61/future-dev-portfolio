import firebase from "firebase";
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyD1H8tE-LrA2R1AsoakVOeWEPEB7wgga8Q",
    authDomain: "future-dev-portfolio.firebaseapp.com",
    databaseURL: "https://future-dev-portfolio-default-rtdb.firebaseio.com",
    projectId: "future-dev-portfolio",
    storageBucket: "future-dev-portfolio.appspot.com",
    messagingSenderId: "268779005207",
    appId: "1:268779005207:web:daeb97c5e17dbbd9fb4352"
});

export const getFirestore = () => {
    return firebase.firestore(app);
}