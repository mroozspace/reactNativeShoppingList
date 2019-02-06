import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux'

class ShoppingListScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  mapProducts = product => <Text>{product}</Text>
  render() {
    const { shoppingList } = this.props
    console.log('this.props', this.props)
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>scroll view container</Text>
        {shoppingList.map( item => <Text>{item.id}</Text>)}
        </ScrollView>
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

