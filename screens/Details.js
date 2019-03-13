import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, ScrollView, Share,
} from 'react-native';
import moment from 'moment';
import {
  CheckBox, Divider, Button, Text,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedProducts: [],
    };
  }

  setProductChecked = (product) => {
    const { checkedProducts: currentChecked } = this.state;
    let checkedProducts;
    if (currentChecked.includes(product)) {
      checkedProducts = currentChecked.filter(
        item => item !== product,
      );
    } else {
      checkedProducts = [].concat(currentChecked, product);
    }
    this.setState({ checkedProducts });
  };

  onShare = () => {
    const { checkedProducts: currentChecked } = this.state;
    const { item } = this.props;
    const title = `Shopping list ${item.name}`;
    const productsBought = currentChecked.map(
      product => `${'\n'} + ${product}`,
    );

    const productsToBuy = item.products
      .filter(item => !currentChecked.includes(item))
      .map(product => `${'\n'} - ${product}`);
    const message = 'Products to buy:'
      + `${productsToBuy}`
      + `${'\n'}Products bought:`
      + `${productsBought}`
      + `${'\n'}Note:`
      + `${'\n'}${item.note}`;

    Share.share({
      message,
      title,
    });
  };

  onCheckAll = () => {
    const { item } = this.props;
    this.setState({ checkedProducts: item.products });
  };

  onUncheckAll = () => {
    this.setState({ checkedProducts: [] });
  };

  render() {
    const { item, children } = this.props;
    const { checkedProducts } = this.state

    if (!item) {
      return null;
    }
    return (
      <View style={styles.container}>
        <View style={[styles.scrollViewWrapper, styles.border]}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text h4>{item.name}</Text>
            <Divider />

            <Text h4>Products:</Text>
            {item.products
              && item.products.map(product => (
                <CheckBox
                  key={product}
                  title={product}
                  checked={checkedProducts.includes(product)}
                  onPress={() => this.setProductChecked(product)}
                />
              ))}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}
            >
              <Button
                type="outline"
                title="Check all"
                onPress={this.onCheckAll}
                icon={<Icon name="check-square" />}
              />
              <Button
                type="outline"
                title="Uncheck all"
                onPress={this.onUncheckAll}
                icon={<Icon name="square" size={20} />}
              />
            </View>

            <Text h4>Notes:</Text>
            <Divider />
            <Text>{item.note ? item.note : '...'}</Text>

            <Text style={{ marginTop: 15 }}>
              Created at:
              {' '}
              {item.createdAt
                ? moment(item.createdAt).format('Do MMMM YYYY, h:mm')
                : '...'}
            </Text>
            <Button type="outline" title="Share" onPress={this.onShare} />
          </ScrollView>
        </View>
        {children}
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
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 50,
    margin: 15,
  },
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5,
  },
});

Details.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.object,
};

export default Details;
