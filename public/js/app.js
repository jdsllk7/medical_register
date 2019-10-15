if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log())
    .catch(err => console.log());
}


// Notification.requestPermission(status => {
//   // console.log('Notification Permission Status', status);
// });

// var msg = 'Incoming Medical Data!';
//   displayNotification(msg);
function displayNotification(msg) {

  const options = {
    body: 'View Data?',
    icon: '/icon',
    vibrate: [100, 50, 100],
    data: { primaryKey: 1 },
    actions: [
      { action: 'yes', title: '\tYES' },
      { action: 'close', title: 'NO' }
    ]
  };

  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration()
      .then(reg => {
        // reg.clear
        reg.showNotification(msg, options);
      });
  }
}//ene displayNotification() 