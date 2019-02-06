import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
import ShoppingList from '../screens/ShoppingList';
import AddShoppingList from '../screens/AddShoppingList';
import ItemDetails from '../screens/ItemDetails';
import Archived from '../screens/Archived';
import Colors from '../constants/Colors';

const color = focused => focused ? Colors.primary : Colors.secondary

const ShoppingListStack = createStackNavigator({
  ShoppingList,
  ItemDetails, //todo, add details screen,
  AddShoppingList
  // todo update splash screen ...
});

ShoppingListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ focused }) => (
    <Icon
      name='shopping-cart'
      type='feather'
      color={color(focused)}
    />
  ),
};

const ArchivedStack = createStackNavigator({
  Archived,
  ItemDetails
});

ArchivedStack.navigationOptions = {
  tabBarLabel: 'archived',
  tabBarIcon: ({ focused }) => (
    <Icon
      name='archive'
      type='feather'
      color={color(focused)}
    />
  ),
};

export default createBottomTabNavigator({
  ShoppingListStack,
  ArchivedStack,
});
