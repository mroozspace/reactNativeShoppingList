import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'
import { BasicText } from '../components/UI/Typography';
import { connect } from 'react-redux'
import { archiveShoppingList } from '../actions';
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
        <TouchableOpacity
          onPress={() => navigation.navigate('EditShoppingList', {item})}
          style={styles.button}>
          <BasicText style={styles.centerText}>Edit</BasicText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.archive(item)}
          style={styles.button}>
          <BasicText style={styles.centerText}>Archive</BasicText>
        </TouchableOpacity>
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
