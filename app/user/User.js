const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define('User', {
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
    timestamps: false,
});

module.exports = User;