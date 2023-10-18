import { colors, dimen, typography } from '../../theme';
import { StyleSheet, Text, View } from 'react-native';
import { he } from 'date-fns/locale';
import React from 'react';


export const MilestoneCard = ({ title, content, duration }) => {
  return (
    <View style={styles.container}>
      <View style= {styles.textContainer}>
      <View >
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.content} numberOfLines={4}>
          {content}
        </Text>
      </View>
      <View>
        <Text style={styles.duration}>
          {duration}
        </Text>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: 10,
    padding: 24,
    height: 163,
    marginBottom:dimen.default,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: typography.default,
    fontFamily: typography.semiBold,
    paddingBottom: 8,
  },
  content: {
    fontSize: typography.small,
    fontFamily: typography.medium,
  },
  duration:{
     textAlign:'right',
     fontSize:typography.small,
     color:colors.descriptionGray,
     marginTop:7
  }
});
