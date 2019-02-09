import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'
import { connect } from 'react-redux'
import { Input, CheckBox, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { editShoppingList } from '../actions';
import KeyboardAwareContainer from '../components/KeyboardAwareContainer'

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
      <View style={styles.container}>
        <KeyboardAwareContainer style={[styles.container, styles.border, {marginBottom: 15}]}>
        <Input
          onChangeText={ name => this.setState({name})}
          value={this.state.name}
          placeholder='List name'
        />

        <Input
          onChangeText={ product => this.setState({product})}
          placeholder='Product'
          value={this.state.product}
        />
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
          <Button
            type='outline'
            title='Add Product'
            onPress={this.addProduct}
            icon={<Icon name='plus-square' color={Colors.primary} />}
          />
        </View>
        
        {this.state.products && this.state.products.map((product, index) => (
          <CheckBox
            key={product}
            title={product}
            iconRight
            textStyle={{flex: 1}}
            iconType='feather'
            uncheckedIcon='delete'
            uncheckedColor={Colors.errorBackground}
            onIconPress={ () => this.deleteProduct(product)}
          />
        ))}

        <Input
          onChangeText={ note => this.setState({note})}
          placeholder='Note'
          value={this.state.note}
        />

        </KeyboardAwareContainer>
        
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => this.editList()}
            style={[styles.border, {padding: 10, width: '40%'}]}>
            <Text style={{textAlign: 'center'}}>Save</Text>
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
    padding: 15
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
