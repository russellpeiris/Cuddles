import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'
import { DescInputField } from './inputs/descInputField'
import { PrimaryButton } from './buttons/primaryButton'
import { CheckboxGroup } from './inputs/checkBox'
import { colors, dimen, typography } from '../../theme'
import { MenuButtons } from './buttons/menuButtons'
import { db, doc, getDocs, setDoc, auth, collection} from '../config/firebase';
import {addDoc, serverTimestamp} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { useLoader, useUser } from '../context';
import { User } from '../models';
import { Modal } from 'react-native'

 export const EmergencyTrigger = () => {

  const [selectedReasons, setSelectedReasons] = useState([]);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const navigation = useNavigation();
  const { getUser, user } = useUser();
  const [userInfo, setUserInfo] = useState(new User());

  useEffect(() => {

    if (user) {
      setUserInfo(user);
    }
    
    // Return a cleanup function to reset the page when you leave it
    return () => {
      setSelectedReasons([]);
      setAdditionalNotes('');
    };

  }, [user]);

  const handleCheckboxSelect = (selectedReasons) => {
    // Update the selected reasons when checkboxes change
    setSelectedReasons(selectedReasons);
  };

    // Your list of checkbox labels
    const checkboxLabels = [
      'Bleeding',
      'Broken Water bag',
      'No baby movements',
      'Other',
    ];


const submitEmergency = async () => { 
  try {
    
    const userId = auth.currentUser.uid;

    const userRef = doc(db, 'users', userId);

    await setDoc(userRef, userInfo, { merge: true });
    await getUser(userInfo);

    if (userId) {
      const userName = `${userInfo.firstName} ${userInfo.lastName}`;
      const phoneNumber = userInfo.phoneNumber;

      // Replace 'YOUR_COLLECTION_NAME' with the actual name of your collection (e.g., 'emergencies')
      const collectionRef = collection(db, 'emergencies');

      // Create a new document with the user's name, selected reasons, and additional notes
      const docRef = await addDoc(collectionRef, {
        userName: userName,
        phoneNumber: phoneNumber,
        selectedReasons: selectedReasons,
        additionalNotes: additionalNotes,
        timestamp: new Date(),
      });

      console.log('Emergency document written with ID: ', docRef.id);
      setShowConfirm(true);
    } else {
      console.log('User not signed in or username not available.');
    }
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Select your emergency</Text>
      </View>
      <View>    
      <CheckboxGroup
          checkboxLabels={checkboxLabels}
          selectedReasons={selectedReasons}
          onCheckboxChange={handleCheckboxSelect}
        />
      {/* <Text style={styles.textStyles}>Selected Reasons: {selectedReasons.join(', ')}</Text> */}
     </View>
      <View>
      <DescInputField
        label='Additional Notes'
        type="text"
        placeholder='Insert other details'
        height={180}
        multiline={true}
        textAlignVertical="top"
        value={additionalNotes}
        onChangeText={(text) => setAdditionalNotes(text)}
/>
      </View>
      <View>
        <Text style={styles.content}>By clicking "Inform Emergency" you will be sharing your location along with emergency details to the hopital.</Text>
      </View>
      <View>
       <PrimaryButton text="Inform Emergency" onPress={submitEmergency} />
      </View>
      <View style={styles.buttonGap}>
          <MenuButtons text="Cancel" bgColor={colors.white} bdColour={colors.primaryPink} />
      </View>
      <Modal visible={showConfirm} transparent animationType='slide'>
         <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.confirmText}>
                Your details have been sent to the hospital..You will be contacted soon.
              </Text>
              <Pressable onPress={() => {setShowConfirm(false)
                                          navigation.navigate('Menu')}}>
                <Text style={styles.closeButton}>Ok</Text>
              </Pressable>
            </View>
          </View> 
         </Modal>

    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'col',
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 10,
        padding: 16,
        height: '100%',
      },
      title:{
        fontSize: typography.default,
        fontFamily: typography.semiBold,
        paddingBottom: 8,
      },
      title2:{
        fontSize: typography.default,
        fontFamily: typography.semiBold,
        paddingBottom: 8,
        marginTop:10,
      },
      content: {
        fontSize: typography.small,
        fontFamily: typography.medium,
        color:colors.descriptionGray,
        marginBottom:2,
       
      },
      buttonGap:{
        marginTop:16,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.primaryPink,
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
      },
      congratsButton: {
        fontFamily: typography.regular,
        color: colors.primaryPink,
        textDecorationLine: 'underline',
        textAlign: 'center',
      },
      confirmText: {
        fontFamily: typography.semiBold,
        fontSize: typography.default,
        color: colors.primaryPink,
        textAlign: 'center',
      },
      closeButton: {
        fontFamily: typography.semiBold,
        fontSize: typography.default,
        marginTop:20,
      }
})