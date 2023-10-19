import React from 'react'
import { View , StyleSheet, TouchableOpacity} from 'react-native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { MilestoneCard } from '../../components'
import { useNavigation } from '@react-navigation/native';
import { colors, dimen } from '../../../theme'

const Milestones = () => {

    const navigation = useNavigation();

  return (
    <>
     <GestureHandlerRootView>
        <ScrollView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Milestone1')}>
                <MilestoneCard
                     title="Milestone 1"
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada, "
                     duration="completed"
                />
                </TouchableOpacity>
                <MilestoneCard
                     title="Milestone 2"
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada, "
                     duration="3 days more"
                />
               <MilestoneCard
                     title="Milestone 3"
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada, "
                     duration="week 20"
                />
               <MilestoneCard
                     title="Milestone 4"
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada, "
                     duration="week 28"
                />
                <MilestoneCard
                     title="Milestone 5"
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nec nunc viverra posuere. Fusce euismod ex sit amet quam tincidunt, sed convallis eros varius. Proin euismod metus quis justo malesuada, "
                     duration="week 36"
                />
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
