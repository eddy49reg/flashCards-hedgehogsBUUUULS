"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Statistic }) {
      this.hasMany(Statistic, {
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
