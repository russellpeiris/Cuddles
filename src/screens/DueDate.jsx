import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { colors, dimen, typography } from '../../theme'
import { MenuButtons, PrimaryButton, RoundInputField } from '../components'

const DueDate = () => {
  return (
    <>
    <GestureHandlerRootView style={styles.container}>
       <ScrollView>
           <View style={styles.formConatainer}>
              <Text
                 style={{
                    fontSize: typography.subTitle,
                    fontFamily: typography.semiBold,
                    marginBottom: 12,
                  }}
                >
                 Set your due date
               </Text>
            <View>
               <RoundInputField
                  onBlur={() => {}}
                  width="100%"
                  label="Estimate my due date based on"
                  placeholder="Select an option"
                />
            </View>
            <View>
               <RoundInputField
                  onBlur={() => {}}
                  width="100%"
                  label="Due date"
                  placeholder="Estimated due date"
                />
            </View>
            <View>
               <PrimaryButton text="Continue"/>
            </View>
            <View style={styles.buttonGap}>
               <MenuButtons text="Select Later" bgColor={colors.white} bdColour={colors.primaryPink} />
            </View>
           </View>
       </ScrollView>
    </GestureHandlerRootView> 
       
    </>
  
  )
}

export default DueDate

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        height: '100%'
    },
    formConatainer:{
        margin: dimen.default,
        padding: dimen.default,
        borderColor: colors.borderGray,
        borderWidth: 1,
        borderRadius: 10,
    },
    buttonGap:{
      marginTop:16,
    }
})