import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors, dimen, typography } from '../../theme';
import { Image } from '@rneui/base';
import { StarRatings } from './index';

export const DoctorCard = ({
    name,
    speacialization,
    imageUrl,
    startTime,
    endTime,
    fee,
    status,
    rate
}) => {
  return (
    <View style={styles.container}>
         <Image source={
      {
        uri: imageUrl,
      }
    } style={styles.image} />
    <View style= {styles.textContainer}>
    <View >
      <Text style={styles.status}>{status}</Text>
    </View>
    <View >
      <Text style={styles.title}>{name}</Text>
    </View>
    <View>
      <Text style={styles.content} >{speacialization}</Text>
    </View>
    <StarRatings
    rating={rate}
    />
    <View>
        <Text style={styles.content}>{startTime}-{endTime}</Text>
    </View>
    <View>
        <Text style={styles.fee}>{fee}</Text>
    </View>
    
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.borderGray,
      borderRadius: 10,
      padding: 24,
      height: 163,
      margin:dimen.default,
    },
    textContainer: {
      flex: 2,
      flexDirection: 'column',
    },
    title: {
      fontSize: typography.subTitle,
      fontFamily: typography.bold,
      paddingBottom: 8,
      color:'#000000',
    },
    content: {
      fontSize: typography.small,
      fontFamily: typography.medium,
    },
    image: {
      width: 100,
      height: '100%', 
      resizeMode: 'cover', 
      borderRadius: 10,
      marginRight: 10,
    },
    fee:{
        textAlign:'right',
        fontSize: 13,
        color:colors.black,
        fontFamily: typography.medium,
       },
       status:{
        textAlign:'right',
        fontSize: 13,
        color:colors.descriptionGray,
        fontFamily: typography.medium,
       },
  });


