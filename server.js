const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const Product = require('./db/Product.js')

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.use(require('body-parser').json());

app.use('/vendors', express.static(path.join(__dirname, 'node_modules')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/products', (req, res, next) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(next)
})

app.put('/api/products/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => {
      Object.assign(product, req.body);
      return product.save()
    })
    .then(product => res.json(product))
    .catch(next);
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`** Listening on Port ${port} **`));

db.sync()
  .then(() => {
    db.seed()
  });
