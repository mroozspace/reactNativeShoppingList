import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'
import { Separator } from '../components/UI/Separator';
import { BasicText, SecondaryHeader, Header } from '../components/UI/Typography';
import moment from 'moment'

class ItemDetails extends React.Component {
  static navigationOptions = {
    title: 'Shopping Details'
  };

  render() {
    const item = this.props.navigation.getParam('item', {});

    return (
      <View style={styles.container}>
        <ScrollView style={[styles.container, styles.border, {marginBottom: 15}]}>
        <Header style={styles.header}>{item.name}</Header>
        <Separator />

        <SecondaryHeader>Products:</SecondaryHeader>
        <Separator />
        {item.products.map(product => (
          <BasicText key={product}> - {product}</BasicText>
        ))}

        
        <SecondaryHeader style={{marginTop: 15}}>Notes:</SecondaryHeader>
        <Separator />
        <BasicText>{item.note ? item.note : '...'}</BasicText>

        <BasicText style={{marginTop: 15}}>Created at: {item.createdAt ? moment(item.createdAt).format('Do MMMM YYYY, h:mm') : '...'}</BasicText>

        </ScrollView>
        
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <TouchableOpacity 
            style={[styles.border, {padding: 10, width: '40%'}]}>
            <BasicText style={{textAlign: 'center'}}>Edit</BasicText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.border, {padding: 10, width: '40%'}]}>
            <BasicText style={{textAlign: 'center'}}>Archive</BasicText>
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
    padding: 25
  },
  contentContainer: {
    backgroundColor: '#fff'
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5
  }
  // container: {
  //   height: 40,
  //   padding: 10,
  //   marginBottom: 15,
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderWidth: StyleSheet.hairlineWidth,
  //   borderColor: Colors.primary,
  //   borderRadius: 5
  // }
});

export default ItemDetails;
