

export default async function getData() {
  const res = await fetch('https://us-central1-tmec-api.cloudfunctions.net/api')
  const data = await res.json()
  return data
}

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCaiunrBtZxLS0R-JOTBeoFszIA-FXn_Rc",
    authDomain: "tmec-api.firebaseapp.com",
    databaseURL: "https://tmec-api.firebaseio.com",
    projectId: "tmec-api",
    storageBucket: "tmec-api.appspot.com",
    messagingSenderId: "932955553981",
    appId: "1:932955553981:web:8de876516018d8671eb7d4",
    measurementId: "G-94QBB7T91N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();