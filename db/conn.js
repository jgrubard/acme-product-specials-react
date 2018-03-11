const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_product_specials_react_db');

module.exports = {
  Sequelize,
  _conn
}
