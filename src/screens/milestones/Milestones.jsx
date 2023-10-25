import React from 'react'
import { View , StyleSheet, TouchableOpacity} from 'react-native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { MilestoneCard } from '../../components'
import { milestone } from '../../utils/milestones'
import { useNavigation } from '@react-navigation/native';
import { colors, dimen } from '../../../theme'

const Milestones = () => {

    const navigation = useNavigation();

    const handleMilestonePress = (item) =>{
     navigation.navigate('Milestone1', {milestoneData: item})
    }

  return (
    <>
     <GestureHandlerRootView>
        <ScrollView style={styles.container}>
            {milestone &&
                milestone.map((item) =>{
                    return(
                         <TouchableOpacity key={item.id} onPress={() => handleMilestonePress(item)}>
                         <MilestoneCard
                              title={item.title}
                              content={item.content}
                              duration={item.duration}
                         />
                         </TouchableOpacity>
                    );
                })}      
        </ScrollView>
     </GestureHandlerRootView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        height: '100%',
        padding: dimen.default,
      },
})


export default Milestones
