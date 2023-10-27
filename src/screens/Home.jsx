import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ArticleCard, DateSlider, InputField, InsightCard } from '../components';
import { AppointmentCard } from '../components/appointmentCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors, dimen, typography } from '../../theme';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { useLoader, useUser } from '../context';
import { auth, db, setDoc, doc } from '../config/firebase';
import { getDoc } from 'firebase/firestore';
import { AddIcon } from '../assets/icons';

const Home = () => {
  
  const navigation = useNavigation();
  const { getUser, user } = useUser();

  const { isLoading, setIsLoading } = useLoader(() => {
    setIsLoading(true);
  });
  const handlePress = () => {
    navigation.navigate('DailyInsights');
  };

  const handleArticleCardPress = () => {
    navigation.navigate('Article');
  };
  const userId = auth.currentUser.uid; 
    useEffect(() => {
      setIsLoading(true);
      const userRef = doc(db, 'users', userId);
  
      const fetchUserData = async () => {
        try {
          const documentSnapshot = await getDoc(userRef);
  
          if (documentSnapshot.exists()) {
            const data = documentSnapshot.data();
            getUser(data);
          }
        } catch (error) {
          console.error('Error fetching user data: ', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchUserData();
    }, []);
  return (
    <SafeAreaView>
      <GestureHandlerRootView style={styles.container}>
        <ScrollView>
          <View style={{ padding: 16 }}>
            <View>
              <View style={styles.header}>
                <Text style={styles.greeting}>Hello {user && user.firstName}!</Text>
                <FontAwesome5 name="bell" size={24} color="black" />
              </View>
              <View></View>
              <Text style={styles.weekText}>Current Week</Text>
            </View>
            <DateSlider />
            <TouchableOpacity onPress={handleArticleCardPress}>
              <View style={{ paddingTop: 16 }}>
                <ArticleCard
                  title="Article Title"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada,  "
                  imageUrl={'https://i.imgur.com/UYiroysl.jpg'}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.insightsContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.weekText}>My Daily Insights</Text>
              <TouchableOpacity onPress={handlePress}>
                <AddIcon />
              </TouchableOpacity>
              </View>
              <View style={styles.insights}>
                <InsightCard title="Mood" value="happy" />
                <InsightCard title="BMI" value="18.5" />
                <InsightCard title="BP" value="110/68" />
              </View>
            </View>
            <View>
              <Text style={styles.weekText}>Upcoming Appointments</Text>
              <View style={styles.appointments}>
                <AppointmentCard />
              </View>
            </View>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    paddingTop: dimen.default,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weekText: {
    fontFamily: typography.bold,
    fontSize: typography.subTitle,
    paddingVertical: dimen.default,
    marginRight: 16,
  },
  greeting: {
    fontFamily: typography.semiBold,
    fontSize: typography.default,
  },
  subTop: {
    fontFamily: typography.semiBold,
    fontSize: typography.authSubTitle,
  },
  insightsContainer: {
    paddingVertical: 28,
  },
  insights: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    // backgroundColor: 'aqua'
  },
  appointments: {
    paddingTop: 16,
  },
});
