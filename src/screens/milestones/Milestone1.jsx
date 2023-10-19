import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MilestoneDetail } from '../../components'
import { dimen } from '../../../theme'


const Milestone1 = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
        <View style={styles.subConatainer}>
            <MilestoneDetail
                title="Growth Information"
                content="Congratulations! Your baby has officially graduated this week from embryo to fetus.
                Your baby is really taking a human shape now. Bones are forming and small indentations on the 
                legs are developing into knees and ankles. The arms, complete with elbows and can flex already.
                Other systems are a go too, your baby’s stomach is producing digestive juices, the kidneys are 
                producing larger quantities of urine"
                scanTitle="Upcoming Tests and Scans"
                scan1="STD Screening Scan"
                scan2="Nuchal Translucency Scan"
                scan3="Complete Blood Count"
                title2="Baby Growth Comparison"
                subContent="Your baby is now a size of a Strawberry!"
                weight="0.6 kg"
                length="1.5 cm"
                imageURL={'https://berrypeople.co.uk/wp-content/uploads/2020/05/strawberry@3x.png'}
            />
        </View>
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
        padding: dimen.default,

    },
})

export default Milestone1
