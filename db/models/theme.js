const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Statistic, Card }) {
      this.hasMany(Statistic, {
        foreignKey: 'theme_id',
      });
      this.hasMany(Card, {
        foreignKey: 'theme_id',
      });
    }
  }
  Theme.init(
    {
      topic: DataTypes.TEXT,
      link: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
