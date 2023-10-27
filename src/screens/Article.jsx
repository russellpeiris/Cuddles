import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, dimen, typography } from '../../theme';
import { article } from '../utils/weeklyArticles';
import React from 'react';

const Article = ({ route }) => {
  const { title, content, imageUrl } = route.params.articleData;

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <View style={styles.articleContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.subContent}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection: 'row', alignItems:'center', gap:5, marginTop:10}}>
            <Text style={styles.subtitle}>Author</Text>
            <Text style={{fontFamily:typography.semiBold, color:colors.inactiveGray}}>1d ago</Text>
            </View>
            <Text style={styles.paragraph}>{content}</Text>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
  },
  articleContainer: {
    padding: dimen.default,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: typography.titleBar,
    fontFamily: typography.bold,
  },
  subtitle: {
    fontSize: dimen.default,
    fontFamily: typography.bold,
  },
  paragraph: {
    fontSize: dimen.default,
    fontFamily: typography.medium,
    marginTop: 10,
  },
  subContent: {
    height: '100%',
    marginTop: 10,
    marginTop: '10%',
  },
});

export default Article;
