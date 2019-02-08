import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Separator } from '../components/UI/Separator';
import {
  BasicText,
  SecondaryHeader,
  Header
} from '../components/UI/Typography';
import moment from 'moment';

const Details = ({item, children}) => {
  
  if ( !item ) {
    return null
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={[styles.container, styles.border, { marginBottom: 15 }]}
      >
        <Header style={styles.header}>{item.name}</Header>
        <Separator />

        <SecondaryHeader>Products:</SecondaryHeader>
        <Separator />
        {item.products && item.products.map(product => (
          <BasicText key={product}> - {product}</BasicText>
        ))}

        <SecondaryHeader style={{ marginTop: 15 }}>Notes:</SecondaryHeader>
        <Separator />
        <BasicText>{item.note ? item.note : '...'}</BasicText>

        <BasicText style={{ marginTop: 15 }}>
          Created at:{' '}
          {item.createdAt
            ? moment(item.createdAt).format('Do MMMM YYYY, h:mm')
            : '...'}
        </BasicText>
      </ScrollView>
      {children}
    </View>
  );
};

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
});

export default Details;
