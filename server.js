const http = require('http');
const app = require('./app');
// const sequelize = require('./lib/database')

const port = +process.env.PORT || 8000;
app.set('port', port);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");

//     http.createServer(app).listen(port, () => {
//       console.log(`The server is listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });

  http.createServer(app).listen(port, () => {
    console.log(`The server is listening on port ${port}`);
  });

  
