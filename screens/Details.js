import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Share } from 'react-native';
import Colors from '../constants/Colors';
import {
  BasicText,
  SecondaryHeader,
  Header
} from '../components/UI/Typography';
import moment from 'moment';
import { CheckBox, Divider, Button } from 'react-native-elements';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedProducts: []
    };
  }

  setProductChecked = product => {
    let checkedProducts;
    if (this.state.checkedProducts.includes(product)) {
      checkedProducts = this.state.checkedProducts.filter(
        item => item !== product
      );
    } else {
      checkedProducts = [].concat(this.state.checkedProducts, product);
    }
    this.setState({ checkedProducts });
  };

  onShare = () => {
    const { item } = this.props;
    const title = `Shopping list ${item.name}`;
    const productsBought = this.state.checkedProducts.map(
      product => `${'\n'} + ${product}`
    );
    
    const productsToBuy = item.products
      .filter(item => !this.state.checkedProducts.includes(item))
      .map(product => `${'\n'} - ${product}`);
    const message =
      `Products to buy:` +
      `${productsToBuy}` +
      `${"\n"}Products bought:` +
      `${productsBought}` +
      `${"\n"}Note:`+
      `${"\n"}${item.note}`

    Share.share({
      message,
      title
    });
  };

  onCheckAll = () => {
    this.setState({ checkedProducts: this.props.item.products })
  }

  onUncheckAll = () => {
    this.setState({ checkedProducts: [] })
  }

  render() {
    const { item, children } = this.props;

    if (!item) {
      return null;
    }

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 50 }}
          style={[styles.container, styles.border, { marginBottom: 15 }]}
        >
          <Header style={styles.header}>{item.name}</Header>
          <Divider />

          <SecondaryHeader>Products:</SecondaryHeader>
          {item.products &&
            item.products.map(product => (
              <CheckBox
                key={product}
                title={product}
                checked={this.state.checkedProducts.includes(product)}
                onPress={() => this.setProductChecked(product)}
              />
            ))}
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
            <Button type='outline' title='Check all' onPress={this.onCheckAll} />
            <Button type='outline' title='Uncheck all' onPress={this.onUncheckAll} />
          </View>

          <SecondaryHeader style={{ marginTop: 15 }}>Notes:</SecondaryHeader>
          <Divider />
          <BasicText>{item.note ? item.note : '...'}</BasicText>

          <BasicText style={{ marginTop: 15 }}>
            Created at:{' '}
            {item.createdAt
              ? moment(item.createdAt).format('Do MMMM YYYY, h:mm')
              : '...'}
          </BasicText>
          <Button type='outline' title='Share' onPress={this.onShare} style={{marginTop: 15}}/>
        </ScrollView>
        {children}
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

export default Details;
