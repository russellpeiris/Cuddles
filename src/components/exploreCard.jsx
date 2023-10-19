import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const ExploreCard = ({ title, imageUrl }) => {
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
    borderColor: '#bababa',
    borderWidth: 0.1,
    overflow: 'hidden', // Clip the content inside the rounded border
    elevation:5
  },
  cardImage: {
    height: '60%', // 60% of the card's height
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
    fontWeight: 'bold',
  },
});

export default ExploreCard;
