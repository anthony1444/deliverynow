self.addEventListener('push', function(event) {
  // Asegúrate de que el evento tiene datos
  const data = event.data ? event.data.json() : {}; // Si no hay datos, se asigna un objeto vacío

  console.log('Datos de la notificación recibidos:', data);  // Imprime los datos recibidos en la consola del service worker

  // Verifica que los datos de la notificación son completos
  if (data.title && data.body) {
    // Definir las opciones de la notificación
    const options = {
      body: data.body, // El cuerpo de la notificación
      icon: 'assets/icons/icon-192x192.png', // Ruta del icono de la notificación
      badge: 'assets/icons/badge.png', // Opcional: un badge para la notificación
      actions: [
        {
          action: 'open_url',
          title: 'Abrir',
          icon: 'assets/icons/open-icon.png',
        }
      ]
    };

    // Mostrar la notificación
    event.waitUntil(
      self.registration.showNotification(data.title, options) // Mostrar la notificación con título y opciones
    );

    // Enviar los datos a los clientes (páginas abiertas)
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage(data);  // Enviar los datos (title, body) al cliente
      });
    });
  } else {
    console.log('Faltan datos de la notificación:', data);  // Si faltan datos
  }
});
