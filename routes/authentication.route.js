const router = require('express').Router();
const Authentication = require('../views/Authentication');


const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Authentication, { title: 'Authentication form' });
});

router.post('/', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      const user = await User.findOne({ where: { name } });
      if (!user) {
        const newUser = await User.create({ name, password });
        res.app.locals.name = name;

        if (newUser.name && newUser.password) {


          res.redirect('/main');
        }
      } else {
        res.send('Такой пользователь уже есть!');
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
  res.end();
});

module.exports = router;

