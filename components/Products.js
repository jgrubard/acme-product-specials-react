import React, { Component } from 'react';

const Products = (props) => {
  const { products, type } = props;
    return (
      <div>
        <form>
          <h3>{type} Products</h3>
          <select className='form-control'>
            <option>* Select Product *</option>
            {
              products.map(product => (
                <option key={product.id}>
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

export default Products;












/*class Products extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isSpecial: null
    }
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.setProduct = this.setProduct.bind(this)
  }

  setProduct(products, id) {
    const product = products.find(prod => prod.id === id * 1)
    // console.log(product)
    if (product) {
      console.log(product.isSpecial)
      this.setState({
        name: product.name,
        isSpecial: !product.isSpecial
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    this.setProduct(nextProps.products, nextProps.id*1)
  }

  componentDidMount() {
    console.log(this.props)
    // this.setProduct()
  }

  onChangeStatus(ev) {
    // console.log(ev.target.value)
    this.setProduct(this.props.products, ev.target.value * 1)
  }

  updateProduct(event) {
    event.preventDefault()

  }

  render() {
    const { products } = this.props;
    // console.log(products)
    const { onChangeStatus } = this;
    return (
      <div>
        <h2>We've got X special products.</h2>
        <br />
        <h3>Regular Products</h3>
        <form>
          <select value='' onChange={ onChangeStatus }>
            <option>--Select Product--</option>
            {
              products.map(product => {
                // console.log(product)
                return (
                !product.isSpecial ? (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
                ) : (
                  ''
                )
              )})
            }
          </select>
          <button>Make Special</button>
        </form>

        <h3>Special Products</h3>
        <form>
          <select onChange={ onChangeStatus }>
            <option>--Select Product--</option>
            {
              products.map(product => (
                product.isSpecial ? (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
                ) : (
                  ''
                )
              ))
            }
          </select>
          <button>Make Regular</button>
        </form>
      </div>
    );
  }
}

export default Products;*/
