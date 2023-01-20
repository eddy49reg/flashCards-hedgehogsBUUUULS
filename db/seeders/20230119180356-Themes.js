/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const themes = [
      {
        topic: 'Аниме',
        link: 'https://kartinkof.club/uploads/posts/2022-03/thumbs/1648613480_2-kartinkof-club-p-anime-smeshnie-kartinki-2.jpg',
      },
      {
        topic: 'Методы массивов',
        link: 'https://avatars.githubusercontent.com/u/78781882?v=4',
      },
      {
        topic: 'Кринжатина',
        link: 'https://cs11.pikabu.ru/images/previews_comm/2019-10_5/1571731731178018643.jpg',
      },
    ];
    const data = themes.map((el) => ({
      topic: el.topic,
      link: el.link,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Themes', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
