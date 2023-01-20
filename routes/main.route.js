const router = require('express').Router();
const Main = require('../views/Main');
const { Theme } = require('../db/models');
const { Card } = require('../db/models');
const Question = require('../views/Question');
// res.redirect('/authentication');

router.get('/', async (req, res) => {
  const themes = await Theme.findAll({ raw: true });
  // console.log(themes);
  res.renderComponent(Main, { title: 'Main page', themes });
});

router.get('/:cardId', async (req, res) => {
  try {
    // console.log(1231212312);
    const { cardId } = req.params;
    const questions = await Card.findAll();
    // console.log(questions);
    res.renderComponent(Question, { title: 'question', questions });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/:cardId', async (req, res) => {
  const { answer } = req.body;
  const rightAnswer = await Card.findOne({ where: { id: req.params.cardId } });
  console.log(rightAnswer, answer);
  if (answer.toLowerCase() === rightAnswer.answer.toLowerCase()) {
    return res.json({ status: true, message: 'Огонь ответ верный' });
  }
  return res.json({ status: false, message: 'Неправда' });
});

module.exports = router;
