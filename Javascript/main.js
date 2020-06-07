// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBduXvvVxqMrC-2t1dcRNPGcVolm1X7Nsg',
  authDomain: 'contactform-17210.firebaseapp.com',
  databaseURL: 'https://contactform-17210.firebaseio.com',
  projectId: 'contactform-17210',
  storageBucket: 'contactform-17210.appspot.com',
  messagingSenderId: '155213390539',
  appId: '1:155213390539:web:317e59cbeb90525ae4314e',
  measurementId: 'G-21PYRPN0R0'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var location = getInputVal('location');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, location, email, phone, message);

  // show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
  document.querySelector('.alert').style.display = 'none';
  }, 3000);
}

// Function to get fet form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, location, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    location: location,
    email: email,
    phone: phone,
    message: message
  });
}
