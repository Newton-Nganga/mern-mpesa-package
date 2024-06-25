 //const Mpesa = require('mern-mpesa-package');
import Mpesa from 'mern-mpesa-package';
console.log("into it");
const mpesa = new Mpesa({
  consumerKey: 'rCgF2c2PtNtJZmv1gmEs9e0Wz6aZtYpCcTA2QfCkwvS4AL2X',
  consumerSecret: 'gMcldTtlYyMGNz4TRQdFK2RCiZnJhOYOGCkeP5VwlPAwWLiOVJMNpk3juRwKPplS',
  environment: 'sandbox', // or 'production'
});

(async () => {
  await mpesa.init();

  try {
    const response = await mpesa.c2b({
      shortCode: '600977',
      responseType: 'Completed',
      confirmationUrl: '/confirmation',
      validationUrl: 'validation',
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();
