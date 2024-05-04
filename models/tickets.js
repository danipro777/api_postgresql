'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tickets extends Model {
    };
    tickets.init({
        id_mall: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        entrance: {
            type: DataTypes.DATE,
            allowNull: false
        },
        exit: {
            type: DataTypes.DATE,
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'tickets',
    });
    return tickets;
};