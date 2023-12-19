const {Sequelize} = require('sequelize');
const config = require('./config');

const {username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize({
    dialect,
    host,
    username,
    password,
    database,
});

sequelize
    .authenticate()
    .then(() =>{
        console.log('Database connection has been established successful');
    })
    .catch((error) =>{
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;