import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.findSpecial = this.findSpecial.bind(this);
    this.findRegular = this.findRegular.bind(this);
    this.onUpdateProduct = this.onUpdateProduct.bind(this)
  }

  componentDidMount() {
    axios.get('/api/products')
      .then((result) => result.data)
      .then(products => this.setState({ products }))
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
      })
  }

  render() {
    const { products } = this.state;
    const { findSpecial, findRegular, onUpdateProduct } = this;
    return (
      <div>
        <h1>Acme Product Specials React</h1>
        <Products type='Regular' swap='Special' products={ findRegular(products) } onUpdateProduct = { onUpdateProduct } />
        <Products type='Special' swap='Regular' products={ findSpecial(products) } onUpdateProduct = { onUpdateProduct } />
      </div>
    );
  }
}

export default App;
