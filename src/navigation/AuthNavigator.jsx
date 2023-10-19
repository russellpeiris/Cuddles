import { SignUp, Login, Home, DailyInsights, Article, Explore, ExploreArticle } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import { BackArrow } from '../components';
import React from 'react';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Register" component={SignUp} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={BottomNavigation} />

      {/* <Stack.Screen name="DailyInsights" options={{}} component={DailyInsights} /> */}
      <Stack.Screen
        name="Explore"
        options={{ headerShown: true, headerTitle: 'Explore' }}
        component={Explore}
      />

      <Stack.Screen
        name="Article"
        options={{ headerShown: true, headerTitle: '' }}
        component={Article}
      />

      {/* <Stack.Screen
        name="ExploreArticle"
        options={{ headerShown: true, headerTitle: '' }}
        component={ExploreArticle}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
