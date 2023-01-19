"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Statistic, Cards }) {
      this.hasMany(Statistic, {
        foreignKey: "theme_id",
      });
      this.hasMany(Cards, {
        foreignKey: "theme_id",
      });
    }
  }
  Theme.init(
    {
      topic: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
