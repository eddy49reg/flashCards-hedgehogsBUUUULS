const router = require('express').Router();
// const Main = require('../views/Main');

router.get('/', (req, res) => {
  res.redirect('/authentication');
  // res.renderComponent(Main, { title: 'Main page' });
});

module.exports = router;
