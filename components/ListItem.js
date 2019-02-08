import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';
import { BasicText } from './UI/Typography';

const ListItem = props =>{
  const item = props.item

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={ () => props.navigate(props.navTarget, {item})}>
      <BasicText> {item.name} </BasicText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5
  }
})

export default ListItem