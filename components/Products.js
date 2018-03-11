import React, { Component } from 'react';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      isSpecial: null
    }
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(event) {
    console.log(event.target.value)
    this.setState({ isSpecial: !event.target.value })
  }

  render() {
    const { products, type } = this.props;
    const { onStatusChange } = this;
    return (
      <div>
        <form>
          <h3>{type} Products</h3>
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
          <button className='btn btn-primary'>
            Make Special
          </button>
        </form>
      </div>
    );
  }
}

export default Products;
