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
    <Tab.Navigator>
      <Tab.Screen
        name="SearchNav"
        component={SearchNavigator}
        options={{
          headerShown: false,
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

const Stack = createStackNavigator();
export const SearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    </Stack.Navigator>
  );
};
