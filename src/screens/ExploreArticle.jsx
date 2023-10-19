import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const ExploreArticle = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.title}>10 Common Pregnancy Worries</Text>

      <Image source={{ uri: 'https://shorturl.at/eEHV7' }} style={styles.image} />

      <ScrollView style={styles.scrollView}>
        <Text style={styles.description}>
          This is the description of the article. This is the description of the article.This is the
          description of the article.This is the description of the article.This is the description
          of the article.This is the description of the article.This is the description of the
          article.This is the description of the article.This is the description of the article.This
          is the description of the article.This is the description of the article.This is the
          description of the article.
        </Text>
      </ScrollView>

      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>Read More</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginTop: 20,
  },
  scrollView: {
    marginTop: 20,
  },
  description: {
    fontSize: 16,
  },
  linkButton: {
    backgroundColor: '#9F678C',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ExploreArticle;
