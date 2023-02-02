import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { app } from './config';
import Tabs from './Tabs';
import store from './redux/store';

const Router = () => {

  const { Navigator, Screen } = createNativeStackNavigator();

  const views = [
    { name: "main", component: Tabs, options: { title: app.appName } },
    // { name: "", component: Component, options: {} },
  ]

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName='main'>
          {
            views.map(
              (view, index) =>
                <Screen key={`view-${index}`} {...view} />
            )
          }
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default Router
