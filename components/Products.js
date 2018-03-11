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
    this.setProduct = this.setProduct.bind(this);
    // this.updateProduct = this.updateProduct.bind(this);
  }


  setProduct(products, id) {
    const product = products.find(product => {
      return product.id === id * 1;
    })
    if (product) {
      this.setState({
        id: product.id,
        name: product.name,
        isSpecial: !product.isSpecial
      })
    }
  }

  // componentDidMount() {
  //   console.log(this.props)
  // }

  onStatusChange(event) {
    // let status;
    // if(event.target.value === 'true') {
    //   status = true;
    // } else {
    //   status = false;
    // }
    //  // = event.target.value == false;
    // // console.log('onStatusChange:', status, !status);
    // this.setState({ isSpecial: !status })
    // console.log(event.target.value)
    // console.log(this.props.products)
    this.setProduct(this.props.products, event.target.value);



  }

  componentDidMount() {
    console.log('CDM:', this.props.products)
  }

  componentWillReceiveProps(nextProps) {
    console.log('NP:', nextProps.products);
  }

  updateProduct() {
    // const product = this.state;
    event.preventDefault();
    this.props.onUpdateProduct(this.state)
  }

  render() {
    const { products, type, swap } = this.props;
    const { onStatusChange, updateProduct } = this;

    // console.log(this.props)

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
            Make {swap}
          </button>
        </form>
      </div>
    );
  }
}

export default Products;
