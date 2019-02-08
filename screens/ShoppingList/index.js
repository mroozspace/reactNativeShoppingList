import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import ListItem from '../../components/ListItem';
import { connect } from 'react-redux'

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
    padding: 25,
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList 
})

const mapDispatchToProps = {
 
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListScreen)

