const router = require('express').Router();
const UserView = require('../views/User');
const { User } = require('../db/models');
const UserStatistic = require('../views/UserStatistic');

router.get('/', async (req, res) => {
  try {
    const usersDB = await User.findAll();
    res.renderComponent(UserView, { title: 'Users page', usersDB });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOne({
    where: { id: userId },
    include: { model: 'Statistics', key: 'user_id' },
  });
  res.renderComponent(UserStatistic, { title: 'User statistic', user });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.end();
});

module.exports = router;
