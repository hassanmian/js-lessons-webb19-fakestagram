import * as firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAkBT4npuM9RMICPvNiIBHcWmO9YFK14GA",
  authDomain: "image-mock-data.firebaseapp.com",
  databaseURL: "https://image-mock-data.firebaseio.com",
  projectId: "image-mock-data",
  storageBucket: "image-mock-data.appspot.com",
  messagingSenderId: "719138525504",
  appId: "1:719138525504:web:454cade622591d1e4aeaa5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;