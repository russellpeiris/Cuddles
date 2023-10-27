import { StyleSheet, Text, View } from 'react-native';
import { AddIcon, Happy } from '../assets/icons';
import { colors, typography } from '../../theme';
import { Image } from 'react-native';
import React from 'react';

export const InsightCard = ({ title, value, icon }) => {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: 10,
    height: 'auto',
    width: '30%',
    height: '100%'
  };

  if (title === 'Mood') {
    switch (value) {
      case 'happy':
        icon = '😁';
        break;
    }
  } else if (title === null) {
    icon = <AddIcon />;
  }

  return (
    <View style={container}>
      {/* {title ? ( */}
      <View style={styles.textHolder}>
        <Text style={styles.title}>{title}</Text>
        {icon ? <Text style={styles.emoji}>{icon}</Text> : <Text style={styles.text}>{value}</Text>}
      </View>
      {/* ) : (
        <AddIcon />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  textHolder: {
    marginVertical: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'aqua',
    gap: 5,
  },
  title: {
    fontSize: typography.default,
    fontFamily: typography.semiBold,
  },
  text: {
    fontSize: typography.subTitle,
    fontFamily: typography.semiBold,
  },
  emoji: {
    fontSize: 28,
    fontFamily: typography.semiBold,
  }
});
