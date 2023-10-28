import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { CheckboxGroup } from './inputs/checkBox'
import { colors, typography } from '../../theme'
import { Image } from '@rneui/base';

export const MilestoneDetail = ({
    title, 
    content, 
    scanTitle, 
    scan1,
    scan2,
    scan3,
    title2,
    subContent,
    weight,
    length,
    imageURL }) => {

        //const checkBoxes = [scan1, scan2, scan3]

  return (
    <View style={styles.container}>
        <View>
           <Text style={styles.title}>{title}</Text>
        </View>
            <Text style={styles.content}>{content}</Text>
        
        <View>
           <Text style={styles.title2}>{scanTitle}</Text>
           <CheckboxGroup checkboxLabels={[scan1, scan2, scan3]}/>
        </View>
        <View>
            <Text style={styles.title2}>{title2}</Text>
        </View>
        <View>
            <Text style={styles.content }>{subContent}</Text>
        </View>
        <View style={styles.subContent}>
            <View style={styles.info}>
                <Text style={styles.subContentText}>{weight}</Text>
                <Text style={styles.subContentText}>{length}</Text>
            </View>
            <View style={styles.verticalLine}/>
            <Image source={
               {
                 uri: imageURL,
               }
            } style={styles.image} />
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
        // height: '100%',
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
        color: colors.descriptionGray,
       
      },
      info:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      },
      subContent:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
      },
      subContentText:{
        textAlign:'center',
        fontFamily: typography.regular,
        marginTop:10,
        marginRight:20,
      },
      verticalLine:{
        width: 1,
        height:100,
        backgroundColor: colors.borderGray,
      },

      image:{
        width: 80,
        height: 110, 
        resizeMode: 'cover', 
        borderRadius: 10,
        marginLeft: 40,
        marginTop:10
      }
})
