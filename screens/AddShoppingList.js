import React from 'react';
import { connect } from 'react-redux';
import { addShoppingList } from '../actions';
import EditList from '../components/EditList';
import isEmpty from '../utils/isEmpty'
class AddShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      product: '',
      products: [],
      note: '',
      errors: {}
    };
  }
  static navigationOptions = {
    title: 'Add Shopping List'
  };

  addProduct = () => {
    const {product, products} = this.state
    if (product && !products.includes(product)) {
      products.push(this.state.product);
      let errors = this.state.errors
      errors.products = undefined
      this.setState({ products, product: '', errors });
    }
  };

  deleteProduct = product => {
    const products = this.state.products.filter( item => item !== product)
    this.setState({ products })
  }

  saveList = () => {
    const { name, products, note } = this.state;
    let errors = {}
    if ( !name ) {
      errors.name = 'List name is required'
    }
    if ( isEmpty(products) ) {
      errors.products = 'Add at least 1 product'
    }
    this.setState({errors})
    if ( isEmpty(errors) ) {
      this.props.addShoppingList({ name, products, note });
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <EditList 
        {...this.state}
        onNameChange={name => this.setState({name})}
        onProductChange={product => this.setState({product})}
        onNoteChange={note => this.setState({note})}
        onSave={this.saveList}
        onProductAdd={this.addProduct}
        onProductDelete={this.deleteProduct}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addShoppingList: data => dispatch(addShoppingList(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShoppingList);
