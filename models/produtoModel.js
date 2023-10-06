const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '1D@rilia1', {dialect: 'mysql', host: 'localhost', port: '3306'});

const Produto = sequelize.define('produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING(500),
        allowNull: false,
    }
}, {
    timestamps: false
})

module.exports = Produto;