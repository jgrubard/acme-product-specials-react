import React, { Component } from 'react';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      id: ''
    }
    this.onStatusChange = this.onStatusChange.bind(this)
  }

  onStatusChange(event) {
    event.preventDefault();
    this.setState({ id: event.target.value });
  }

  render() {
    const { products, type, swap, onUpdateProduct } = this.props;
    const { onStatusChange } = this;
    return (
      <div className='jumbotron'>
        <form onSubmit={ () => onUpdateProduct(this.state) }>
          <h3>
            We've got
            &nbsp;
            <span className='badge badge-primary'>
              { products.length }
            </span>
            &nbsp;
            <strong>
              {type} Product
              <span>{ products.length === 1 ? '' : 's' }</span>
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
          <button className='btn btn-primary' disabled={!products.length}>
            Make {swap}
          </button>
        </form>
      </div>
    );
  }
}

export default Products;
