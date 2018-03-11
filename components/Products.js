import React, { Component } from 'react';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      isSpecial: null
    }
    this.onStatusChange = this.onStatusChange.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  onStatusChange(event) {
    // console.log(event.target.value)
    // console.log(this.props.products)
    const product = this.props.products.find(product => {
      console.log(product.id === event.target.value*1)
      return product.id === event.target.value * 1;
    })

    // console.log(!product.isSpecial)

    this.setState({
      id: product.id,
      name: product.name,
      isSpecial: !product.isSpecial
    })
  }

  updateProduct() {
    event.preventDefault();

  }

  render() {
    const { products, type } = this.props;
    const { onStatusChange, updateProduct } = this;

    console.log(this.props)

    // console.log(this.state)
    return (
      <div>
        <form onSubmit={ updateProduct }>
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
