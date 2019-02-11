import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Icon, Text } from 'react-native-elements'
import { spacing } from '../constants/theme';

const ListItem = props => {
  const item = props.item;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
    >
      <Text ellipsizeMode={"tail"}> {item.name} </Text>
      {props.onIconPress &&
      <Icon 
        name={props.iconName} 
        type='feather' 
        onPress={props.onIconPress}
        color={Colors.errorBackground} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: 10,
    marginBottom: spacing,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5
  }
});

ListItem.defaultProps = {
  iconName: 'delete'
}

export default ListItem;
