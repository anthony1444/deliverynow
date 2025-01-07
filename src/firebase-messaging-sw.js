self.addEventListener('push', function (event) {
    console.log(event);
    
    const data = event.data?.json() || {};
    const title = data.notification?.title || 'Notification';
    const options = {
      body: data.notification?.body || 'You have a new message!',
      icon: data.notification?.icon || '/assets/icons/icon-512x512.png',
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });
  
  self.addEventListener('notificationclick', function (event) {
    event.notification.close();
  
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then((clientList) => {
        if (clientList.length > 0) {
          return clientList[0].focus();
        }
        return clients.openWindow('/');
      })
    );
  });
  