const { _conn } = require('./conn.js');
const Product = require('./Product.js')

const sync = () => {
  return _conn.sync({ force: true });
}

const seed = () => {
  return Promise.all([
    Product.create({
      name: 'automobile',
      isSpecial: false
    }),
    Product.create({
      name: 'motorcycle',
      isSpecial: false
    }),
    Product.create({
      name: 'hoverboard',
      isSpecial: true
    }),
    Product.create({
      name: 'speeder',
      isSpecial: true
    }),
    Product.create({
      name: 'unicycle',
      isSpecial: true
    }),
  ])
}

module.exports = {
  sync,
  seed
}
