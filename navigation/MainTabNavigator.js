import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
import ShoppingListScreen from '../screens/ShoppingList';
import LinksScreen from '../screens/LinksScreen';
import Colors from '../constants/Colors';

const color = focused => focused ? Colors.primary : Colors.secondary

const ShoppingListStack = createStackNavigator({
  ShoppingList: ShoppingListScreen,
  ShoppingDetails: ShoppingListScreen //todo, add details screen
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

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
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
  LinksStack,
});
