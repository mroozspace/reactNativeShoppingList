import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import { connect } from 'react-redux';
import { Input, Button, Text } from 'react-native-elements';
import { addShoppingList } from '../actions';
import KeyboardAwareContainer from '../components/KeyboardAwareContainer';
import Icon from 'react-native-vector-icons/Feather';

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

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareContainer
          style={[styles.container, styles.border, { marginBottom: 15 }]}
        >
          <Input
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
            placeholder='List name'
            label={'List name'}
          />

          <Input
            onChangeText={product => this.setState({ product })}
            placeholder='Product'
            value={this.state.product}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'flex-end'
            }}
          >
            <Button
              type='outline'
              title='Add Product'
              onPress={this.addProduct}
              icon={<Icon name='plus-square' color={Colors.primary} />}
            />
          </View>

          <Text>Products: </Text>
          {this.state.products &&
            this.state.products.map((product, index) => (
              <Text key={index}> - {product}</Text>
            ))}

          <Input
            onChangeText={note => this.setState({ note })}
            placeholder='Note'
            value={this.state.note}
          />
        </KeyboardAwareContainer>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-end'
          }}
        >
          <Button type='outline' title='Save' onPress={this.saveList} />
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addShoppingList: data => dispatch(addShoppingList(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShoppingList);
