import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Products from './Products.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.countSpecial = this.countSpecial.bind(this);
    this.findSpecial = this.findSpecial.bind(this);
    this.findRegular = this.findRegular.bind(this);
    this.onUpdateProduct = this.onUpdateProduct.bind(this)
  }

  componentDidMount() {
    axios.get('/api/products')
      .then((result) => result.data)
      .then(products => this.setState({ products }))
  }

  countSpecial(products) {
    return products.filter(product => {
      return product.isSpecial;
    }).length;
  }

  findSpecial(products) {
    return products.filter(product => {
      if (product.isSpecial) {
        return product;
      }
    })
  }

  findRegular(products) {
    return products.filter(product => {
      if (!product.isSpecial) {
        return product;
      }
    })
  }

  onUpdateProduct(product) {
    axios.put(`/api/products/${product.id}`, product)
      .then(result => result.data)
      .then(product => {
        const products = this.state.products.map(_product => {
          if (_product.id === product.id * 1){
            return product;
          }
          return _product;
        })
        this.setState({ products });
        document.location.hash = '/';
      })
  }

  render() {
    const { products } = this.state;
    const { countSpecial, findSpecial, findRegular, onUpdateProduct } = this;
    return (
      <Router>
        <div>
          <h1>Acme Product Specials</h1>
          <h2>We've got { countSpecial(products) } special products</h2>

          <Route exact path='/' render={ () => (
            <Products
              type='Regular'
              swap='Special'
              products={ findRegular(products) }
              onUpdateProduct = { onUpdateProduct }
            />
          )}
          />

          <Route exact path='/' render={ () => (
            <Products
              type='Special'
              swap='Regular'
              products={ findSpecial(products) }
              onUpdateProduct = { onUpdateProduct }
            />
          )}
          />

        </div>
      </Router>
    );
  }
}

export default App;
