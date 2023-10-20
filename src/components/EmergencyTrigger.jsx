import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CheckboxGroup } from './inputs/checkBox'
import { DescInputField } from './inputs/descInputField'
import { PrimaryButton } from './buttons/primaryButton'
import { colors, typography } from '../../theme'
import { MenuButtons } from './buttons/menuButtons'

 export const EmergencyTrigger = ({
    title,
    reason1,
    reason2,
    reason3,
    reason4,
    title2,
    descriptionPlaceholder,
    subContent
 }) => {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <CheckboxGroup checkboxLabels={[reason1, reason2, reason3,reason4]} />
      </View>
      <View>
        <DescInputField
        label={title2}
        type='text'
        placeholder={descriptionPlaceholder}
        height={180}
        multiline={true}
        textAlignVertical={'top'}
        />
      </View>
      <View>
        <Text style={styles.content}>{subContent}</Text>
      </View>
      <View>
        <PrimaryButton text='Inform Emergency'/>
      </View>
      <View style={styles.buttonGap}>
          <MenuButtons text="Cancel" bgColor={colors.white} bdColour={colors.primaryPink} />
      </View>

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
      }
})