const { _conn } = require('./conn.js');
const Product = require('./Product.js')

const sync = () => {
  return _conn.sync({ force: true });
}

const seed = () => {
  return Promise.all([
    Product.create({ name: 'helmet', isSpecial: false }),
    Product.create({ name: 'wristguards', isSpecial: false  }),
    Product.create({ name: 'hoverboard', isSpecial: true  })
  ])
}

module.exports = {
  sync,
  seed
}
