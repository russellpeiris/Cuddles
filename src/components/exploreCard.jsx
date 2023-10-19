import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { colors, typography } from '../../theme';

export const ExploreCard = ({ title, imageUrl }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 150,
    borderRadius: 15,
    borderColor: colors.borderGray,
    borderWidth: 1,
    overflow: 'hidden', 
  },
  cardImage: {
    height: '60%', 
    width: '100%',
  },
  cardTitleContainer: {
    height: '40%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: typography.semiBold
  },
});

