/*in the firestore database i have the table called doctors and doctors have properties such as firstName, lastName, designation, availableHrs and imageUrl as properties.
now i have a doctorCard component and a doctors page in my react native expo application. i need to fetch those doctors information in to the doctor cards and display in the doctors page.
here are my codes for Doctors page and doctorCard page. Modify these codes for my requirements*/

// doctors page
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { DoctorCard, RoundInputField } from '../components';
import { dimen } from '../../theme';
const Doctors = () => {
  const navigation = useNavigation();
  
  return (
    <>
      <GestureHandlerRootView >
        <ScrollView style={styles.container}>
           <RoundInputField
             placeholder='Search Doctor'
           />
          
            <TouchableOpacity onPress={()=> navigation.navigate('ScheduleAppointment')}>
            <DoctorCard
          
              
            />
          </TouchableOpacity>
          
        </ScrollView>
      </GestureHandlerRootView>
    </>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
    padding: dimen.default,
  },
});

//doctor card page
import { colors, dimen, typography } from '../../theme';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StarRatings } from './inputs/rating';
import { Image } from '@rneui/base';
import React, { useState } from 'react';

export const DoctorCard = ({ doctor }) => {
  
  const [rating, setRating] = useState(doctor.rating);

  const handleStarRatingPress = (newRating) => {
    setRating(newRating);
  };
  
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: doctor.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title}>{doctor.name}</Text>
          <View style={styles.statusContainer}>
            <FontAwesome name="circle" size={12} color={colors.successGreen} />
            <Text style={styles.status}>{doctor.status}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.specialization}>{doctor.specialization}</Text>
        </View>
        {/* <View style={styles.row}>
          <StarRatings rating={rating} onStarRatingPress={handleStarRatingPress} />
        </View> */}
        <View style={styles.row}>
          <Text style={styles.time}>
            {doctor.startTime}-{doctor.endTime}
          </Text>
          <Text style={styles.fee}>{doctor.fee}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: 10,
    padding: 24,
    height: 163,
    marginBottom: dimen.default,
  },
  image: {
    width: 100,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: typography.semiBold,
    fontSize: typography.default,
    color: colors.font,
  },
  specialization: {
    fontFamily: typography.regular,
    fontSize: typography.small,
    color: colors.font,
  },
  time: {
    fontFamily: typography.regular,
    fontSize: typography.small,
    color: colors.font,
  },
  status: {
    fontFamily: typography.regular,
    fontSize: typography.small,
    color: colors.font,
    marginLeft: 4,
  },
  fee: {
    fontFamily: typography.bold,
    fontSize: typography.small,
    color: colors.font,
  },
});

