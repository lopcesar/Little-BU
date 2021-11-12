'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("products", {
            id: {
              type:Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            name: {
              type:Sequelize.STRING
            },
            description: {
              type:Sequelize.STRING
            },
            price: {
              type:Sequelize.INTEGER
            },
            image: {
              type:Sequelize.STRING
            }
            
        });
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
