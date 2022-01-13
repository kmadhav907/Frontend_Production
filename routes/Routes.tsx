import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';

const StackNavigator = createNativeStackNavigator();

const Routes: React.FC = (props: any) => {
  return (
    <NavigationContainer>
      {
        <StackNavigator.Navigator initialRouteName='Home'>
          <StackNavigator.Screen name='Home' component={HomeScreen} />
          <StackNavigator.Screen name='About' component={AboutScreen} />
        </StackNavigator.Navigator>
      }
    </NavigationContainer>
  );
};
export default Routes;
