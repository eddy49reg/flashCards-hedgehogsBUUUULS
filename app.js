require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ssr = require('./middleware/ssr');
const Authentication = require('./views/Authentication');

const app = express();

const PORT = 3000;

const authenticationRoute = require('./routes/authentication.route');
const mainRoute = require('./routes/main.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authenticationRoute);
app.use('/main', mainRoute);
// app.use('/cars', carsRoute);

// app.get('/', (req, res) => {
//   res.end();
// });

// app.get('/authentication', (req, res) => {
//   res.renderComponent(Authentication);
// });

app.listen(PORT, () => {
  console.log(`Сервер запущу на ${PORT}щу`);
});
