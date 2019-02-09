import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'
import { connect } from 'react-redux'
import { archiveShoppingList } from '../actions';
import { Button } from 'react-native-elements';
import Details from './Details';

class ShoppingDetails extends React.Component {
  static navigationOptions = {
    title: 'Shopping Details'
  };

  archive = item => {
    this.props.archiveShoppingList(item)
    this.props.navigation.popToTop()
  }

  render() {
    const {navigation} = this.props
    const item = navigation.getParam('item', {});

    return (
      <Details item={item}>
      <View style={styles.buttonsContainer}>
      <Button type='outline' title='Edit' onPress={() => navigation.navigate('EditShoppingList', {item})} />
      <Button type='outline' title='Archive' onPress={() => this.archive(item)} />
      </View>
      </Details>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row', width: '100%', justifyContent: 'space-between'
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5,
    padding: 10, 
    width: '40%'
  },
  centerText: {
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => ({
  archiveShoppingList: item => dispatch(archiveShoppingList(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingDetails)
