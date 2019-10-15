// enable offline data
db.enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // probably multible tabs open at once
            console.log('persistance failed');
        } else if (err.code == 'unimplemented') {
            // lack of browser support for the feature
            console.log('persistance not available');
        }
    });

// patient_info listener
db.collection('med_records').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            renderMed_id(change.doc.data(), change.doc.id);
            var msg = 'Incoming Medical Readings';
            // displayNotification(msg);
        }
    });
});



// Patient form
const form2 = document.querySelector('#emails_form');
if (form2) {
    // form2.addEventListener('submit', evt => {
    //     evt.preventDefault();

    //     db.collection('moniter_emails').onSnapshot(snapshot => {
    //         snapshot.docChanges().forEach(change => {
    //             db.collection('moniter_emails').doc(change.doc.id).delete();
    //             console.log(change.doc.id + " Deleted Successfully");
    //         });
    //     });

    //     const patient_info = {
    //         email: form2.email.value,
    //     };
    //     console.log(patient_info);

    //     db.collection('moniter_emails').add(patient_info)
    //         .catch(err => console.log(err));
            
    //     location.assign("/records?email='"+form2.email.value+"'");
    // });
}//end if-form

