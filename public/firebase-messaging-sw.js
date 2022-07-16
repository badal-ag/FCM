importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js");

var firebaseConfig = {
    /* Personal Configs */
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
