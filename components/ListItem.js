import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Icon, Text } from 'react-native-elements'

const ListItem = props => {
  const item = props.item;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigate(props.navTarget, { item })}
    >
      <Text ellipsizeMode={"tail"}> {item.name} </Text>
      <Icon 
        name='delete' 
        type='feather' 
        onPress={() => props.onDelete(item)}
        color={Colors.errorBackground} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5
  }
});

export default ListItem;
