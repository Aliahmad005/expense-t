

export default function serviceworker() {
  let swUrl = './sw.js';

  navigator.serviceWorker
    .register(swUrl)
    .then(response => {
      console.log('Response done:', response);
    })
    .catch(error => {
      console.error('Error registering service worker:', error);
    });
}

