const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/dbConfig');

const _User = sequelize.define('_User', {   
    user_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    FullName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Password: {
        type: DataTypes.TEXT("long"),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Region: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    PhoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        freezeTableName: true,
        timestamps : false
    }
);

module.exports = _User; 
