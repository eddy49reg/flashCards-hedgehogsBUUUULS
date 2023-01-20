const router = require('express').Router();
const Main = require('../views/Main');

router.get('/', (req, res) => {
  // const currentName = res.app.locals.name;

  // console.log(currentName);

  res.renderComponent(Main, { title: 'Main page' });
});

module.exports = router;
