import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
// import { Image } from '@rneui/base';
import React from 'react';

export const ArticlePage = ({ title, author, content, imageUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.BottomView}>
        <ScrollView style={styles.bottomScrollView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text>{content}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topView: {
    borderRadius: 20,
    height: 200,
  },
  BottomView: {
    flex: 1,
  },
  bottomScrollView: {
    flex: 1,
    padding: 20,
  },
  image: {
    borderRadius: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ArticlePage;
