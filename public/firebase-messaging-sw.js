importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyDDQQ7yrte7jiqIcCLvKnqzsafEfdqhD2A",
    authDomain: "tutorhuntz-testing.firebaseapp.com",
    projectId: "tutorhuntz-testing",
    storageBucket: "tutorhuntz-testing.appspot.com",
    messagingSenderId: "712233401124",
    appId: "1:712233401124:web:0c231b0d7cf99a827711b1",
    measurementId: "G-3KNJCL6R9L"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();