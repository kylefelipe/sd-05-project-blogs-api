'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UserTable = queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
    
    return UserTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Users"),
};