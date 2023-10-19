import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Article = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={{ uri: 'https://shorturl.at/gopxZ' }} style={styles.image} />
        <Text style={styles.title}>Article Title</Text>
        <Text style={styles.subtitle}>Author</Text>
        <Text style={styles.paragraph}>
          This is the article content. You can replace this with the text.
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
