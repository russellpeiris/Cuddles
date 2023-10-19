import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components';
import { auth } from '../config/firebase';
import Explore from './Explore';
import React from 'react';

const Menu = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };

   const handleExploreOnPress = () => {
     // Navigate to the 'Explore' screen
     navigation.navigate('Explore');
   };

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <ScrollView style={{ padding: 16 }}>
          <PrimaryButton text="Logout" onPress={handleSignOut} />
          <PrimaryButton text="Explore" style={styles.btnTemp} onPress={handleExploreOnPress}></PrimaryButton>
        </ScrollView>
      </GestureHandlerRootView>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
  },
  btnTemp: {
    marginTop:20,
    
  },
});
