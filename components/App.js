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
  }

  componentDidMount() {
    axios.get('./api/products')
      .then((result) => result.data)
      .then(products => this.setState({ products }))
  }

  // onUpdateProducts

  render() {
    const { products } = this.state;
    return (
      <Router>
        <div>
          <h1>Acme Product Specials</h1>
          <Route exact path='/products' component={ ({ match }) => <Products products={ products } id={ match.params.id } />} />
{/*          <Route path='/products/:id' component={() => <Product products={ products } />} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
