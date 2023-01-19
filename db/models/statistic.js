'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Statistic.init({
    score: DataTypes.INTEGER,
    try_count: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    theme_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Statistic',
  });
  return Statistic;
};