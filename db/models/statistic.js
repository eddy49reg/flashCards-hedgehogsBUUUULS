"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    static associate({ User, Theme }) {
      this.belongsTo(User);
      this.belongsTo(Theme);
    }
  }

  Statistic.init(
    {
      score: DataTypes.INTEGER,
      try_count: DataTypes.INTEGER,
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "User",
          key: "id",
        },
      },
      theme_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "Theme",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Statistic",
    }
  );
  return Statistic;
};
