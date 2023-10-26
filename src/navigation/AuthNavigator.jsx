import { SignUp, Login, Home, DailyInsights, Article, Explore, Splash, GetStarted } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import { BackArrow } from '../components';
import React from 'react';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
      <Stack.Screen options={{ headerShown: false }} name="GetStarted" component={GetStarted} />
      <Stack.Screen options={{ headerShown: false }} name="Register" component={SignUp} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
