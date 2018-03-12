const { _conn } = require('./conn.js');
const Product = require('./Product.js')

const sync = () => {
  return _conn.sync({ force: true });
}

const seed = () => {
  return Promise.all([
    Product.create({
      name: 'journal',
      isSpecial: true
    }),
    Product.create({
      name: 'locket',
      isSpecial: true
    }),
    Product.create({
      name: 'ring',
      isSpecial: true
    }),
    Product.create({
      name: 'crown',
      isSpecial: false
    }),
    Product.create({
      name: 'snake',
      isSpecial: false
    }),
    Product.create({
      name: 'cup',
      isSpecial: false
    }),
    Product.create({
      name: 'the chosen one',
      isSpecial: true
    }),
  ])
}

module.exports = {
  sync,
  seed
}
