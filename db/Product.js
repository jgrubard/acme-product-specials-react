const { Sequelize, _conn } = require('./conn.js');

const Product = _conn.define('product', {
  name: Sequelize.STRING,
  isSpecial: Sequelize.BOOLEAN
}, {
  timestamps: false
});

module.exports = Product;
