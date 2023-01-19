"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      this.belongsTo(Theme);
    }
  }
  Card.init(
    {
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
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
      modelName: "Card",
    }
  );
  return Card;
};
