import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'

export const Separator = props => <View style={[styles.basic, props.style]} />

const styles = StyleSheet.create({
  basic: {
    height: 1,
    borderRadius: 3,
    backgroundColor: Colors.secondary,
    marginBottom: 15
  }
})