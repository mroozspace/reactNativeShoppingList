import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors';
import { archiveShoppingList } from '../actions';
import Details from './Details';

class ShoppingDetails extends React.Component {
  static navigationOptions = {
    title: 'Shopping Details',
  };

  archive = (item) => {
    const { archiveShoppingList, navigation } = this.props;
    archiveShoppingList(item);
    navigation.popToTop();
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});

    return (
      <Details item={item}>
        <View style={styles.buttonsContainer}>
          <Button type="outline" title="Edit" onPress={() => navigation.navigate('EditShoppingList', { item })} />
          <Button type="outline" title="Archive" onPress={() => this.archive(item)} />
        </View>
      </Details>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5,
    padding: 10,
    width: '40%',
  },
  centerText: {
    textAlign: 'center',
  },
});

const mapDispatchToProps = dispatch => ({
  archiveShoppingList: item => dispatch(archiveShoppingList(item)),
});

ShoppingDetails.propTypes = {
  archiveShoppingList: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(ShoppingDetails);
