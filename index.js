// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// if (require.main === module) {
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
//   });
// }

// module.exports = app;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World2!');
});

module.exports = app; // Export the app for Vercel
