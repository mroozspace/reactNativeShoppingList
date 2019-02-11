import React from 'react';
import { connect } from 'react-redux'
import { editShoppingList } from '../actions';
import EditList from '../components/EditList';
import isEmpty from '../utils/isEmpty'

class EditShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      product: '',
      products: [],
      note: '',
      errors: {}
    }
  }
  static navigationOptions = {
    title: 'Edit Shopping List'
  };

  addProduct = () => {
    if (this.state.product) {
      const products = this.state.products;
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

  editList = () => {
    const item = this.props.navigation.getParam('item', {});
    const { name, products, note } = this.state;
    let errors = {}
    if ( !name ) {
      errors.name = 'List name is required'
    }
    if ( isEmpty(products) ) {
      errors.products = 'Add at least 1 product'
    }
    this.setState({errors})
    if ( isEmpty(errors) ){
      const {
        name = '',
        products = [],
        note = '',
      } = this.state
      this.props.editShoppingList({
        name,
        products,
        note,
        id: item.id,
        createdAt: item.createdAt
      })
      this.props.navigation.popToTop()
    }
  }

  componentDidMount = () => {
    const item = this.props.navigation.getParam('item', {});
    this.setState({...item})
  }

  render() {
    return (
      <EditList 
        {...this.state}
        onNameChange={name => this.setState({name})}
        onProductChange={product => this.setState({product})}
        onNoteChange={note => this.setState({note})}
        onSave={this.editList}
        onProductAdd={this.addProduct}
        onProductDelete={this.deleteProduct}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editShoppingList: data => dispatch(editShoppingList(data))
})

export default connect(null, mapDispatchToProps)(EditShoppingList)
