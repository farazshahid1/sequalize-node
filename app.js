// A typical Express webservice. All JSON, all the time. Logging with Morgan.

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const Package = require('./models/packageMember.model')
const routes = require('./routes');
const sequelize = require('./lib/database');




const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes)
// A catch-all route for anything the webservice does not define.
app.get('*', (req, res) => res.status(404).send({
  message: 'Nothing to see here',
}));

(async () => {
  try {
    await sequelize.sync({
      force:true
       //Reset db every time
   } );
  } catch (error) {
    console.error(error)
  }
})();
module.exports = app;