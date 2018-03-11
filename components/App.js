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

  onUpdateProduct() {

  }

  render() {
    const { products } = this.state;
    const { countSpecial, findSpecial, findRegular, onUpdateProduct } = this;
    return (
      <Router>
        <div>
          <h1>Acme Product Specials</h1>
          <h2>We've got { countSpecial(products) } special products</h2>

          <Route exact path='/' render={ ({ match, location }) => (
            <Products
              type='Regular'
              products={ findRegular(products) }
              match={ match }
              location={ location }
              onUpdateProduct = { onUpdateProduct }
            />
          )}
          />

          <Route exact path='/' render={ ({ match, location }) => (
            <Products
              type='Special'
              products={ findSpecial(products) }
              match={ match }
              location={ location }
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
