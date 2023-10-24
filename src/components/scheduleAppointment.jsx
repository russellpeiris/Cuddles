import React from 'react'
import { StyleSheet, View , Image, Text} from 'react-native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { colors, dimen, typography } from '../../theme'
import { StarRatings } from './inputs/rating'
import { PrimaryButton } from './buttons/primaryButton'

export const ScheduleAppointment = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
        <ScrollView>
         <View style={styles.subConatainer}>
            <Image source={{ uri: 'https://i0.wp.com/amrak.lk/wp-content/uploads/2023/09/Plab-2.jpg?fit=1440%2C1000&ssl=1' }} style={styles.image} />
              <View>
                <Text style={styles.status}>Online</Text>
              </View>
              <View>
                <Text style={styles.title}>Ashynn Caizoni</Text>
              </View>
              <View>
                <Text style={styles.content}>Consultant Gyenocologist</Text>
              </View>
              <StarRatings/>
              <View >
                <Text style={styles.subcontent} >8.00 AM - 9.00 AM</Text>
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
        margin: dimen.default,
        padding:dimen.default,

    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginTop: 20,
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
