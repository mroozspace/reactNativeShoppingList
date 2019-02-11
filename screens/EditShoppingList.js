import React from 'react';
import { connect } from 'react-redux'
import { editShoppingList } from '../actions';
import EditList from '../components/EditList';

class EditShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      product: '',
      products: [],
      note: '',
    }
  }
  static navigationOptions = {
    title: 'Add Shopping List'
  };

  addProduct = () => {
    if (this.state.product) {
      const products = this.state.products
      products.push(this.state.product)
      this.setState({ products, product: '' })
    }
  }

  deleteProduct = product => {
    const products = this.state.products.filter( item => item !== product)
    this.setState({ products })
  }

  editList = () => {
    const item = this.props.navigation.getParam('item', {});
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
