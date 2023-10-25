import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DoctorCard, RoundInputField } from '../components';
import { dimen } from '../../theme';
import { db, doc, getDocs } from '../config/firebase';
import { collection } from 'firebase/firestore';

const Doctors = () => {
  const navigation = useNavigation();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const querySnapshot = await getDocs(collection(db, 'doctors'));
        const doctorData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          doctorData.push({
            id: doc.id,
            name: `${data.firstName} ${data.lastName}`,
            specialization: data.designation,
            imageUrl: data.image,
            availableHrs: data.availableHrs,
           
          });
        });

        setDoctors(doctorData);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    }

    fetchDoctors();
  }, []);

  return (
    <>
      <GestureHandlerRootView>
        <ScrollView style={styles.container}>
          <RoundInputField placeholder="Search Doctor" />

          {doctors.map((doctor) => (
            <TouchableOpacity
              key={doctor.id}
              onPress={() => navigation.navigate('ScheduleAppointment')}
            >
              <DoctorCard doctor={doctor} />
            </TouchableOpacity>
          ))}
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
