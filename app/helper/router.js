import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchScreen from '../screens/SearchScreen';
import MyPokemon from '../screens/MyPokemon';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';

const Tab = createBottomTabNavigator();
export const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPokemon"
        component={MyPokemon}
        options={{
          tabBarLabel: 'My Pokemon',
          tabBarIcon: ({color, size}) => (
            <Icon name="apps" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack = createStackNavigator();
export const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Pokemon"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    </MainStack.Navigator>
  );
};
