"use strict";

module.exports = function (sequelize, DataType) {
  var Tasks = sequelize.define('Tasks', {
    task_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    task_name: {
      type: DataType.STRING,
      allowNull: false
    },
    task_details: {
      type: DataType.STRING,
      allowNull: false
    },
    task_status: {
      type: DataType.STRING,
      allowNull: false
    }
  });

  Tasks.associate = function (models) {
    Tasks.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Tasks;
};