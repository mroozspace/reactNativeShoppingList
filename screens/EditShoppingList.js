import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'
import { BasicText } from '../components/UI/Typography';
import { connect } from 'react-redux'
import { Input } from 'react-native-elements';
import { editShoppingList } from '../actions';

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
      <View style={styles.container}>
        <ScrollView style={[styles.container, styles.border, {marginBottom: 15}]}>
        <Input
          onChangeText={ name => this.setState({name})}
          value={this.state.name}
          placeholder='List name'
          label={'List name'}
        />

        <Input
          onChangeText={ product => this.setState({product})}
          placeholder='Product'
          value={this.state.product}
        />
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
          <TouchableOpacity 
            onPress={() => this.addProduct()}
            style={[styles.border, {padding: 5, width: '40%', marginTop: 10}]}>
            <BasicText style={{textAlign: 'center'}}>Add Product</BasicText>
          </TouchableOpacity>
        </View>
        
        <BasicText>Products: </BasicText>
        {this.state.products && this.state.products.map((product, index) => (
          <BasicText key={index}> - {product}</BasicText>
        ))}

        <Input
          onChangeText={ note => this.setState({note})}
          placeholder='Note'
          value={this.state.note}
        />

        </ScrollView>
        
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => this.editList()}
            style={[styles.border, {padding: 10, width: '40%'}]}>
            <BasicText style={{textAlign: 'center'}}>Save</BasicText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25
  },
  contentContainer: {
    backgroundColor: '#fff'
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5
  }
});

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList
})

const mapDispatchToProps = dispatch => ({
  editShoppingList: data => dispatch(editShoppingList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditShoppingList)
