import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { article } from '../utils/weeklyArticles';


const Article = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={{ uri: article.ImageUrl}} style={styles.image} />
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.subtitle}>Author</Text>
        <Text style={styles.paragraph}>
           {article.content}
        </Text>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Article;
