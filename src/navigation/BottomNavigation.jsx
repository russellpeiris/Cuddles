import {
  DailyInsights,
  Doctors,
  Home,
  Menu,
  Milestone1,
  Milestones,
  UserProfile,
  WeeklyGrowth,
  ExploreArticle,
  Explore,
  Article,
  GetStarted,
  Splash,
  Emergency,
} from '../screens';
import { MenuIcon, HomeIcon, AvatarIcon, DoctorIcon } from '../assets/icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BackArrow, ScheduleAppointment } from '../components';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { colors, dimen, typography } from '../../theme';
import { StyleSheet, View } from 'react-native';
import DueDate from '../screens/DueDate';
import React from 'react';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const navigation = useNavigation();

  const getTabBarIcon = (route, focused, color) => {
    if (route.name === 'Dashboard') {
      return <HomeIcon width={dimen.icon} height={dimen.icon} fill={color} />;
    } else if (route.name === 'Profile') {
      return <AvatarIcon width={dimen.icon} height={dimen.icon} fill={color} />;
    } else if (route.name === 'Doctors') {
      return <DoctorIcon width={dimen.icon} height={dimen.icon} fill={color} />;
    } else if (route.name === 'Menu') {
      return <MenuIcon width={dimen.icon} height={dimen.icon} fill={color} />;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTitleStyle: styles.headerTitleStyle,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: colors.inactiveGray,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.primaryPink,
        tabBarIcon: ({ color, size, focused }) => getTabBarIcon(route, focused, color),
      })}
    >
      <Tab.Screen name="Dashboard" component={Home} />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={({ navigation, route }) => ({
          title: 'Profile',
          headerShown: true,
          headerLeft: () => <BackArrow />,
        })}
      />
      <Tab.Screen
        name="Doctors"
        component={Doctors}
        options={({ navigation, route }) => ({
          title: 'Doctors',
          headerShown: true,
          headerLeft: () => <BackArrow />,
        })}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={({ navigation, route }) => ({
          title: 'Menu',
          headerShown: true,
          headerLeft: () => <BackArrow />,
        })}
      />
      <Tab.Screen
        name="DailyInsights"
        component={DailyInsights}
        options={({ navigation, route }) => ({
          title: 'Daily Insights',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />
      <Tab.Screen
        name="DueDate"
        component={DueDate}
        options={({ navigation, route }) => ({
          title: 'Due date',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />
      <Tab.Screen
        name="Milestones"
        component={Milestones}
        options={({ navigation, route }) => ({
          title: 'Milestones',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />
      <Tab.Screen
        name="WeeklyGrowth"
        component={WeeklyGrowth}
        options={({ navigation, route }) => ({
          title: 'Weekly Development',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />
      <Tab.Screen
        name="Milestone1"
        component={Milestone1}
        options={({ navigation, route }) => ({
          title: 'Milestone Details',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />

      <Tab.Screen
        name="ExploreArticle"
        component={ExploreArticle}
        options={({ navigation, route }) => ({
          title: 'Article',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={({ navigation, route }) => ({
          title: 'Explore',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />

      <Tab.Screen
        name="Article"
        component={Article}
        options={({ navigation, route }) => ({
          title: 'Article',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />

      <Tab.Screen
        name="Emergency"
        component={Emergency}
        options={({ navigation, route }) => ({
          title: 'Emergency Trigger',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />

      <Tab.Screen
        name="ScheduleAppointment"
        component={ScheduleAppointment}
        options={({ navigation, route }) => ({
          title: 'Schedule Appointment',
          headerShown: true,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />

      <Tab.Screen
        name="GetStarted"
        component={GetStarted}
        options={({ navigation, route }) => ({
          title: 'GetStarted',
          headerShown: false,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />

      <Tab.Screen
        name="Splash"
        component={Splash}
        options={({ navigation, route }) => ({
          title: 'Splash',
          headerShown: false,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackArrow />,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: 63,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    bottom: 0,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 100,
    // shadowRadius: 2,
    // elevation: 8,
    // shadowColor: '#000', shadowOffset: { width: 0, height: 0.4 }, shadowOpacity: 0.5
  },
  headerTitleStyle: {
    fontFamily: typography.bold,
    fontSize: typography.titleBar,
  },
});
