import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { DoctorCard, RoundInputField } from '../components';
const Doctors = () => {
  const navigation = useNavigation();

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <ScrollView>
           <RoundInputField
             placeholder='Search Doctor'
           />
           <TouchableOpacity onPress={()=> navigation.navigate('ScheduleAppointment')}>
            <DoctorCard
              name="Ashynn Caizoni"
              speacialization="Consultant Gynecologist"
              imageUrl={"https://i0.wp.com/amrak.lk/wp-content/uploads/2023/09/Plab-2.jpg?fit=1440%2C1000&ssl=1"}
              startTime='8.00 AM'
              endTime='10.00 AM'
              rate= '4'
              status='online'
              fee='LKR 1500.00'
            />
            </TouchableOpacity>
            <DoctorCard
              name="Ashynn Caizoni"
              speacialization="Consultant Gynecologist"
              imageUrl={"https://www.va.gov/PAINMANAGEMENT/images/Carousel_Design_HomePage_v2-02.png"}
              startTime='8.00 AM'
              endTime='10.00 AM'
              rate= '4'
              status='offline'
              fee='LKR 1500.00'
            />
              <DoctorCard
              name="Ashynn Caizoni"
              speacialization="Consultant Gynecologist"
              imageUrl={"https://media.istockphoto.com/id/1352251608/photo/happy-chief-nurse-working-at-the-hospital-with-a-group-of-healthcare-workers.jpg?s=612x612&w=0&k=20&c=jRFskj7Kx_rUqYIovTNI6Eeo61mR9fdTHETYQCKvllg="}
              startTime='8.00 AM'
              endTime='10.00 AM'
              rate= '4'
              status='onCall'
              fee='LKR 1500.00'
            />
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
  },
});
