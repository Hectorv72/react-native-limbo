import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import Home from './views/Home';
import Pokemons from './views/Pokemons';

const Tabs = () => {

  const { Navigator, Screen, Group } = createBottomTabNavigator();

  const tabs = [
    {
      name: 'home',
      component: Home,
      options: {
        tabBarIcon: ({ size, color }) => <FontAwesome5 name="home" size={size} color={color} />
      }
    },
    {
      name: 'pokemons',
      component: Pokemons,
      options: {
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="pokeball" size={size} color={color} />
      }
    },
    // {
    //   name: '',
    //   component: Component,
    // },
  ]

  return (
    <Navigator>
      <Group screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        {
          tabs.map(
            (tab, index) =>
              <Screen key={`tab-${index}`} {...tab} />
          )
        }
      </Group>
    </Navigator>
  )
}

export default Tabs