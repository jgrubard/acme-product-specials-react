import React, { Component } from 'react';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      // name: '',
      // isSpecial: null
    }
    this.onStatusChange = this.onStatusChange.bind(this)
    // this.setProduct = this.setProduct.bind(this);
    this.stopDefault = this.stopDefault.bind(this)
  }

  // setProduct(products, id) {
  //   const product = products.find(product => product.id === id * 1);
  //   if (product) {
  //     this.setState({
  //       id: id * 1,
  //       name: product.name,
  //       isSpecial: product.isSpecial
  //     })
  //   }
  // }

  stopDefault(event) {
    event.preventDefault();
  }



  onStatusChange(event) {
    // console.log(typeof event.target.value)
    // console.log(this.props)
    // this.setProduct(this.props.products, event.target.value)
    this.setState({ id: event.target.value });
  }

  render() {
    const { products, type, swap, onUpdateProduct } = this.props;
    const { onStatusChange, stopDefault } = this;
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div>
        <form onSubmit={ stopDefault }>
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
          <button className='btn btn-primary' onClick={ () => onUpdateProduct(this.state) }>
            Make {swap}
          </button>
        </form>
      </div>
    );
  }
}

export default Products;
