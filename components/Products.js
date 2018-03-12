import React, { Component } from 'react';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      id: ''
    }
    this.onStatusChange = this.onStatusChange.bind(this)
    this.stopDefault = this.stopDefault.bind(this)
  }

  stopDefault(event) {
    event.preventDefault();
  }

  onStatusChange(event) {
    this.setState({ id: event.target.value });
  }

  render() {
    const { products, type, swap, onUpdateProduct } = this.props;
    const { onStatusChange, stopDefault } = this;
    return (
      <div className='jumbotron'>
        <form onSubmit={ stopDefault }>
          <h3>
            We've got
            &nbsp;
            <span className='badge badge-primary'>
              { products.length }
            </span>
            &nbsp;
            <strong>
              {type} Product
              <span>
                { products.length === 1 ? '' : 's' }
              </span>
            </strong>
          </h3>
          <select className='form-control' onChange={ onStatusChange }>
            <option value={null}>* Select Product *</option>
            {
              products.map(product => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))
            }
          </select>
          <button className='btn btn-primary' onClick={ () => onUpdateProduct(this.state) }>
            Make {swap}
          </button>
        </form>
      </div>
    );
  }
}

export default Products;
