var firebaseConfig = {
    /* Your Personal Configurations */
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();



function allowNotification() {

    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Permission');

            messaging.getToken({ vapidKey: 'YOUR_VAPID_KEY' }).then((currentToken) => {
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
