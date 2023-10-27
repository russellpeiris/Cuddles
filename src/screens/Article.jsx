import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { article } from '../utils/weeklyArticles';
import { colors, dimen } from '../../theme';


const Article = ({route}) => {
  const { title, content, imageUrl } = route.params.articleData;

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={{uri:imageUrl}} style={styles.image} />
        <View style={styles.subContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Author</Text>
        <Text style={styles.paragraph}>
          {content}
        </Text>
        </View>
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
    marginTop: 0,
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
  subContent:{
    padding: dimen.default,
    borderColor: colors.borderGray,
    borderWidth: 1,
    borderRadius: 10,
    height: '100%',
    marginTop:10,
  },
});

export default Article;
