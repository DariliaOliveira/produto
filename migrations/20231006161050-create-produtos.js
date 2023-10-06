'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produto', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING(500),
        allowNull: false,
    }
}, {
    timestamps: false
    });

},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produto');
  }}