

const firebaseConfig = {
    apiKey: "AIzaSyD5wSvrZXq9FFfJ0SoDxGfp6kVQ7VEyNFA",
    authDomain: "start-45a39.firebaseapp.com",
    databaseURL: "https://start-45a39-default-rtdb.firebaseio.com",
    projectId: "start-45a39",
    storageBucket: "start-45a39.appspot.com",
    messagingSenderId: "377019727798",
    appId: "1:377019727798:web:5c56be02bc821e6ec88b17"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("account").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var holdername = getElementVal("holdername");
    var holderdob = getElementVal("dobInput");
  
    saveMessages(holdername, holderdob);
  
    //   enable alert
    window.location.href = "tok2.html"; // Replace with your actual page URL
}
  
  const saveMessages = (holdername, holderdob) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      HolderName: holdername,
      Dob: holderdob,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };