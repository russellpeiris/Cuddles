import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { EmergencyTrigger } from '../components'
import { StyleSheet, View } from 'react-native'
import { dimen } from '../../theme'

function Emergency({}) {
  return (
    <GestureHandlerRootView style={styles.container}>
        <ScrollView>
            <View style={styles.subConatainer}>
              <EmergencyTrigger
               title='Select your emergency'
               reason1='Bleeding'
               reason2='Broken Water bag'
               reason3='No baby movements'
               reason4='other'
               title2='Additional Notes'
               descriptionPlaceholder='Insert other details'
               subContent='By clicking "Inform Emergency" you will be sharing your location along with emergency details to the hopital.'
              />
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
        

    },
})

export default Emergency
