require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ssr = require('./middleware/ssr');

const app = express();

const PORT = 3000;

const mainRoute = require('./routes/main.route');
const authenticationRoute = require('./routes/authentication.route');
// const carsRoute = require('./routes/cars.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRoute);
app.use('/', authenticationRoute);
// app.use('/cars', carsRoute);

app.listen(PORT, () => {
  console.log(`Сервер запущу на ${PORT}щу`);
});
