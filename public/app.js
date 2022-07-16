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



function allowNotification() {

    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Permission');

            messaging.getToken({ vapidKey: 'BLyqPjt8wGKV1HWPFXiFuZnH7iRumhQUcPMCHQDviXs86uBw4kRzA0XfQu1BSV7ZMMz4Sxt_es0BmmGLIeAJCew' }).then((currentToken) => {
                if (currentToken) {
                    console.log("Token Received")
                    console.log(currentToken)
                } else {
                    console.log('No registration token available.');
                }
            }).catch((err) => {
            console.log(err);
            });
        }
    })

}