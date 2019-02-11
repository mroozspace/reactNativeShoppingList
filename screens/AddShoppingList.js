import React from 'react';
import { connect } from 'react-redux';
import { addShoppingList } from '../actions';
import EditList from '../components/EditList';

class AddShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      product: '',
      products: [],
      note: ''
    };
  }
  static navigationOptions = {
    title: 'Add Shopping List'
  };

  addProduct = () => {
    if (this.state.product) {
      const products = this.state.products;
      products.push(this.state.product);
      this.setState({ products, product: '' });
    }
  };

  saveList = () => {
    const { name = '', products = [], note = '' } = this.state;
    this.props.addShoppingList({ name, products, note });
    this.props.navigation.goBack();
  };

  deleteProduct = product => {
    const products = this.state.products.filter( item => item !== product)
    this.setState({ products })
  }

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
