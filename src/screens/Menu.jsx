import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton , MenuButtons} from '../components';
import { auth } from '../config/firebase';
import React from 'react';
import { colors } from '../../theme';

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
  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <ScrollView style={{ padding: 16 }}>
          <MenuButtons text="Profile" icon="user" />
          <View style={styles.buttonGap} /> 
          <MenuButtons text="Milestones" icon="bookmark" onPress={() => navigation.navigate('Milestones')} /> 
          <View style={styles.buttonGap} />
          <MenuButtons text="Weekly Development" icon="leaf" onPress={() => navigation.navigate('WeeklyGrowth')}  />
          <View style={styles.buttonGap} /> 
          <MenuButtons text="Due Date Calculator" icon="calendar" onPress={() => navigation.navigate('DueDate')}/> 
          <View style={styles.buttonGap} />
          <MenuButtons bgColor={colors.emergency} text="Trigger Emergency" icon="warning" />
          <View style={styles.buttonGap} />
          <MenuButtons text="Explore" icon="globe"  /> 
          <View style={styles.buttonGap} />
          <PrimaryButton text="Logout" onPress={handleSignOut} />
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
  buttonGap:{
    marginTop:16,
  }
});
