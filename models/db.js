const Sequelize = require('sequelize')
// Connection with MySQL
const sequelize = new Sequelize('postapp', 'root', 'cookie311219', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
