import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { EmergencyTrigger } from '../components'
import { StyleSheet, View } from 'react-native'
import { dimen } from '../../theme'
import { db, doc, getDocs, setDoc, auth } from '../config/firebase';

function Emergency({}) {
  return (
    <GestureHandlerRootView style={styles.container}>
        <ScrollView>
            <View style={styles.subConatainer}>

              <EmergencyTrigger/>
              
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
