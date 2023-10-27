import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { PrimaryButton, MenuButtons } from '../components';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { AlertIcon, CalculatorIcon, ExploreIcon, MilestoneIcon, ProfileIcon, SwitchIcon, WeeklyDevIcon } from '../assets/icons';
import { colors, dimen } from '../../theme';
import { auth } from '../config/firebase';
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
            onPress={() => navigation.navigate('Emergency')}
          />
          <View style={styles.buttonGap} />
          <MenuButtons
            text="Explore"
            icon={<ExploreIcon height={dimen.icon} width={dimen.icon} fill="black" />}
            onPress={() => navigation.navigate('Explore')}
          />
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
  buttonGap: {
    marginTop: 16,
  },
});
