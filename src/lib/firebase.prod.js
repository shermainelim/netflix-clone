import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDEJe7I_xkOAZRq2Oe7s3skkqBZ7Vgu33k",
  authDomain: "netflixclone-2420d.firebaseapp.com",
  projectId: "netflixclone-2420d",
  storageBucket: "netflixclone-2420d.appspot.com",
  messagingSenderId: "994237361156",
  appId: "1:994237361156:web:06577eaa2eb97f2d3c9951",
  measurementId: "G-Y68496YMZT",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
