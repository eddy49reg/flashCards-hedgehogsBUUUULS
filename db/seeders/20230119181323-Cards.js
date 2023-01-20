'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const cards = [
      {
        question: ' Что такое сёдзё?',
        answer: 'аниме для девушек',
        theme_id: 7,
      },
      {
        question: `Единственный в мире мультфильм получил премию Британского кинофестиваля в номинации "лучший фильм", а не "лучший мультфильм".Как он называется?`,
        answer: `"Унесённые призраками"`,
        theme_id: 7,
      },
      {
        question: `Что такое "манга"?`,
        answer: 'комиксы, по которым снимают аниме',
        theme_id: 7,
      },
      {
        question: 'Как называют фанатов аниме и манги?',
        answer: 'отаку',
        theme_id: 7,
      },
      {
        question:
          'Назовите одного из известнейших японских режиссёров-аниматоров, создавших мультфильмы в жанре аниме.',
        answer: 'Хаяо Миядзаки',
        theme_id: 7,
      },
      {
        question: 'Что возвращает метод forEach',
        answer: 'undefined',
        theme_id: 8,
      },
      {
        question: 'Что общего между reduce и Tesla',
        answer: 'аккумулятор',
        theme_id: 8,
      },
      {
        question: 'Что вернет typeof если его применить к массиву',
        answer: 'object',
        theme_id: 8,
      },
      {
        question: 'какой метод массива удаляет последний элемент из него',
        answer: 'pop',
        theme_id: 8,
      },
      {
        question: 'какой метод позволит проверить массив ли это?',
        answer: 'isArray',
        theme_id: 8,
      },
      {
        question: 'кто принес братишке покушать?',
        answer: 'Пахом',
        theme_id: 9,
      },
      { question: 'Сколько баксов за фистинг?', answer: '300', theme_id: 9 },
      {
        question: 'Как в простонародье называют Санкт-Петербург?',
        answer: 'Расчленинград',
        theme_id: 9,
      },
      { question: 'Ты дома?', answer: 'Кто спрашивает?', theme_id: 9 },
      { question: '?', answer: '!', theme_id: 9 },
    ];
    const data = cards.map((el) => ({
      question: el.question,
      answer: el.answer,
      theme_id: el.theme_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Cards', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
