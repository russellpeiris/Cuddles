import {
  DescInputField,
  DropDown,
  IncrementDecrement,
  PrimaryButton,
  RoundInputField,
} from '../components';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import MultipleSelector from '../components/buttons/multipleSelect';
import { arrayUnion, getDoc, updateDoc } from 'firebase/firestore';
import { colors, dimen, typography } from '../../theme';
import { StyleSheet, Text, View } from 'react-native';
import { buttonList, moodsList } from '../constants';
import { auth, db, doc } from '../config/firebase';
import React, { useEffect, useState } from 'react';
import { DailyInsight } from '../models';
import { useLoader, useUser } from '../context';
import { useNavigation } from '@react-navigation/native';
const DailyInsights = () => {
  const [formData, setFormData] = useState(new DailyInsight().insights);
  const [moodOpen, setMoodOpen] = useState(false);
  const [moodValue, setMoodValue] = useState(null);
  const [kicks, setKicks] = useState(null);
  const [selectedPains, setSelectedPains] = useState([]);
  const [moods, setMoods] = useState(moodsList);
  const { navigate } = useNavigation();
  const { user, updateUserField } = useUser();
  const { isLoading, setIsLoading } = useLoader(() => {
    setIsLoading(true);
  });

  useEffect(() => {
    if (user && user.dailyInsights) {
      const todaysInsights = user.dailyInsights.find(item => item.day === today);
      if (todaysInsights && todaysInsights.insights) {
        const { kickCount, pains, mood } = todaysInsights.insights;
        setKicks(kickCount || null);
        setSelectedPains(pains || []);
        setMoodValue(mood || null);
        setFormData(todaysInsights.insights);
      } 
    }
  }, [user]);

  const today = new Date().toLocaleDateString('en-GB');
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      formData.kickCount = kicks;
      formData.pains = selectedPains;

      const userId = auth.currentUser.uid;
      const userRef = doc(db, 'users', userId);

      if (user) {
        const insights = user.dailyInsights || [];
        const existingIndex = insights.findIndex((item) => item.day === today);

        if (existingIndex !== -1) {
          // If an object with today's date exists, update it
          insights[existingIndex] = { day: today, insights: formData };
        } else {
          // If not, add a new object with today's date
          insights.push({ day: today, insights: formData });
        }

        await updateDoc(userRef, { dailyInsights: insights });
        updateUserField({dailyInsights: insights});
        navigate('Dashboard');
        
        console.log('success');
      } else {
        console.error('User document not found');
      }
    } catch (error) {
      error && setIsLoading(false);
      console.error('Error updating insight data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.formContainer}>
          <Text
            style={{
              fontSize: typography.subTitle,
              fontFamily: typography.semiBold,
              marginBottom: 12,
            }}
          >
            Share your daily insights with your doctor
          </Text>
          <View>
            <DropDown
              label="How are you feeling today?"
              open={moodOpen}
              value={moodValue}
              items={moods}
              setOpen={setMoodOpen}
              setValue={setMoodValue}
              onChangeValue={(value) => {
                setFormData({ ...formData, mood: value });
              }}
              setItems={setMoods}
              placeholder="Select Mood"
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
          <View>
            <IncrementDecrement initial={kicks} onValueChange={setKicks} label="Baby kick count" />
          </View>
          <View>
            <Text style={{ fontFamily: typography.semiBold, fontSize: typography.default }}>
              Let’s keep track of your vitals{' '}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 12,
              }}
            >
              <RoundInputField
                value={formData.weight}
                onChangeText={(value) => {
                  setFormData({ ...formData, weight: value });
                  // setError((prevError) => ({ ...prevError, phoneNumber: '' }));
                }}
                // errorMessage={error.phoneNumber}
                // type={'tel'}
                onBlur={() => {}}
                width="47%"
                label="Weight"
                placeholder="0.0 Kg"
              />
              <RoundInputField
                value={formData.bloodPressure}
                onChangeText={(value) => {
                  setFormData({ ...formData, bloodPressure: value });
                  // setError((prevError) => ({ ...prevError, emergencyContact: '' }));
                }}
                // errorMessage={error.emergencyContact}
                type={'tel'}
                onBlur={() => {}}
                width="47%"
                label="Blood Pressure"
                placeholder="0/0 mm Hg"
              />
            </View>
            <Text
              style={{
                fontFamily: typography.semiBold,
                fontSize: typography.default,
                paddingBottom: 12,
              }}
            >
              Pains and discomforts you are facing today{' '}
            </Text>
            <MultipleSelector initial={selectedPains}  onValueChange={setSelectedPains} buttonList={buttonList} />
            <DescInputField
              value={formData.note}
              onChangeText={(value) => {
                setFormData({ ...formData, note: value });
                // setError((prevError) => ({ ...prevError, note: '' }));
              }}
              // errorMessage={error.note}
              type={'text'}
              onBlur={() => {}}
              label="Anything to note?"
              placeholder="Add your medial history here..."
              height={180}
              multiline={true}
              textAlignVertical={'top'}
            />
          </View>
          <PrimaryButton text="Save" onPress={handleUpdate} />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default DailyInsights;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  formContainer: {
    margin: dimen.default,
    padding: dimen.default,
    borderColor: colors.borderGray,
    borderWidth: 1,
    borderRadius: 10,
  },
});
