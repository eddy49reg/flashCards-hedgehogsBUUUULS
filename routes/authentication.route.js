const router = require('express').Router();
const Authentication = require('../views/Authentication');
// const Reg = require('../views/Registration');
// const { User } = require('../db/models');

router.get('/authentication', (req, res) => {
  res.renderComponent(Authentication, { title: 'Authentication form' });
});

// router.get('/registration', (req, res) => {
//   res.renderComponent(Reg, { title: 'Reg form' });
// });

// router.post('/authentication', async (req, res) => {
//   console.log(req.body);
// try {
//   const { name, password } = req.body;
//   if (name && password) {
//     const user = await User.findOne({ where: { name } });
//     if (!user) {
//       const newUser = await User.create({ name, password });
//       res.app.locals.name = name;
//       res.json({ message: 'ok' });
//     } else {
//       res.json({ message: 'Такой пользователь уже есть!' });
//     }
//   }
// } catch ({ message }) {
//   res.json({ message });
// }
//   res.end();
// });

module.exports = router;