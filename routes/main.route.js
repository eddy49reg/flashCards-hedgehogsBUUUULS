const router = require('express').Router();
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    // const usersDB = await User.findAll();
    const main = res.renderComponent(Main, { title: 'Main page' });
    // res.send(main);
  } catch (e) {
    res.send(e.message);
  }
});

// router.get('/:userId', async (req, res) => {
//   const { userId } = req.params;
//   const user = await User.findOne({
//     where: { id: userId },
//     include: { model: 'Statistics', key: 'user_id' },
//   });
//   res.renderComponent(UserStatistic, { title: 'User statistic', user });
// });

// router.post('/', (req, res) => {
//   console.log(req.body);
//   res.end();
// });

module.exports = router;
