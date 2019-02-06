import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'

export const BasicText = props => <Text {...props} style={[styles.basic, props.style]} />
export const Header = props => <Text {...props} style={[styles.header, props.style]} />
export const SecondaryHeader = props => <Text {...props} style={[styles.secondaryHeader, props.style]} />

const styles = StyleSheet.create({
  basic: {
    fontSize: 14,
    color: Colors.primary
  },
  header: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.primary,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary
  },
  secondaryHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary
  },
})