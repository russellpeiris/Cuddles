import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton, MenuButtons } from '../components';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { AlertIcon, CalculatorIcon, ExploreIcon, MilestoneIcon, ProfileIcon, SwitchIcon, WeeklyDevIcon } from '../assets/icons';
import { colors, dimen } from '../../theme';
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
          <MenuButtons
            text="Profile"
            icon={<ProfileIcon height={dimen.icon} width={dimen.icon} fill="black" />}
            onPress={() => navigation.navigate('Profile')}
          />
          <View style={styles.buttonGap} />
          <MenuButtons
            text="Milestones"
            icon={<MilestoneIcon height={dimen.icon} width={dimen.icon} fill="black" />}
            onPress={() => navigation.navigate('Milestones')}
          />
          <View style={styles.buttonGap} />
          <MenuButtons
            text="Weekly Development"
            icon={<WeeklyDevIcon height={dimen.icon} width={dimen.icon} fill="black" />}
            onPress={() => navigation.navigate('WeeklyGrowth')}
          />
          <View style={styles.buttonGap} />
          <MenuButtons
            text="Due Date Calculator"
            icon={<CalculatorIcon height={dimen.icon} width={dimen.icon} fill="black" />}
            onPress={() => navigation.navigate('DueDate')}
          />
          <View style={styles.buttonGap} />
          <MenuButtons
            bgColor={colors.emergency}
            icon={<AlertIcon height={dimen.icon} width={dimen.icon} fill="black" />}
            txColor="white"
            text="Trigger Emergency"
          />
          <View style={styles.buttonGap} />
          <MenuButtons
            text="Explore"
            icon={<ExploreIcon height={dimen.icon} width={dimen.icon} fill="black" />}
          />
          <View style={styles.buttonGap} />
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
  buttonGap: {
    marginTop: 16,
  },
});
