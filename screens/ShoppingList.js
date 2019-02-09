import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux'
import { deleteFromShoppingList } from '../actions';

class ShoppingListScreen extends React.Component {
  static navigationOptions = {
    title: 'Shopping List',
  };

  render() {
    const { shoppingList } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          keyExtractor = { (item, index) => index.toString() }
          data={shoppingList}
          renderItem={({ item }) => (
          <ListItem
            navTarget={'ShoppingDetails'}
            item={item}
            onDelete={this.props.deleteFromShoppingList}
            {...this.props.navigation}
            />
          )}
        />
        <Button 
          type='outline'
          title='Add Item' 
          onPress={() => this.props.navigation.navigate('AddShoppingList')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList 
})

const mapDispatchToProps = dispatch => ({
  deleteFromShoppingList: list => dispatch(deleteFromShoppingList(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListScreen)

