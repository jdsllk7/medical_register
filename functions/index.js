const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
var db = admin.firestore();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {

    const data = {
        data: request.query.name, 
    };
    console.log(request.query.name + " has deployed");

    db.collection('test_data').add(data)
        .catch(err => console.log(err));

    var name = request.query.name || "Unknown vol"
    response.send("Hi " + name);
});