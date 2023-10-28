import React from 'react'
import { StyleSheet, View , Image, Text} from 'react-native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { colors, dimen, typography } from '../../theme'
import { StarRatings } from './inputs/rating'
import { PrimaryButton } from './buttons/primaryButton'
import { useRoute } from '@react-navigation/native';

export const ScheduleAppointment = () => {

  // Accessing the selected doctor's data from the route object
  const { params } = useRoute();
  const selectedDoctor = params?.selectedDoctor || {};

  return (
    <GestureHandlerRootView style={styles.container}>
        <ScrollView>
         <View style={styles.subConatainer}>
            <Image source={{ uri: selectedDoctor.imageUrl}} style={styles.image} />
              <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 4}}>
                <Text style={styles.status}>Online</Text>
              </View>
              <View>
                <Text style={styles.title}>{selectedDoctor.name}</Text>
              </View>
              <View>
                <Text style={styles.content}>{selectedDoctor.specialization}</Text>
              </View>
              <StarRatings rating='3'/>
              <View >
                <Text style={styles.subcontent}>Available Hours: {selectedDoctor.availableHrs}</Text>
                <Text style={styles.subcontent}>LKR 1500.00</Text>
              </View>
              <View style={styles.buttonGap}>
               <PrimaryButton text='Schedule Appointment'/>
               </View>
            </View>
        </ScrollView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        height: '100%',
      },
      subConatainer:{
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 10,
        margin: dimen.default,
        padding:dimen.default,

    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
      },
      title: {
        fontSize: typography.subTitle,
        fontFamily: typography.bold,
        paddingBottom: 8,
        color:'#000000',
        marginTop:10,
      },
      content: {
        fontSize: typography.small,
        fontFamily: typography.medium,
        color: colors.descriptionGray,
      },
      subcontent: {
        fontSize: typography.small,
        fontFamily: typography.bold,
        marginTop:10,
        color:colors.descriptionGray,
      },
      buttonGap:{
        marginTop:30,
      },
      status:{
        fontSize: 13,
        color:colors.descriptionGray,
        fontFamily: typography.medium,
        marginTop:5,
       },
})
