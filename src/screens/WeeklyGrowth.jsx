import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { article } from '../utils/weeklyArticles';
import { View, StyleSheet } from 'react-native';
import { ArticleCard } from '../components';
import { dimen } from '../../theme';
import React from 'react';

const WeeklyGrowth = () => {
  const navigation = useNavigation();

  const handleArticlePress = (item) => {
    navigation.navigate('Article', { articleData: item });
  };

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <ScrollView>
          <View style={styles.cardContainer}>
            {article &&
              article.map((item) => {
                return (
                  <TouchableOpacity key={item.id} onPress={() => handleArticlePress(article)}>
                    <View>
                      <ArticleCard
                        title={item.title}
                        content={item.content}
                        imageUrl={item.imageUrl}
                      />
                      <View style={styles.articleGap} />
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
  },
  cardContainer: {
    padding: dimen.default,
  },
  articleGap: {
    marginBottom: dimen.default,
  },
});

export default WeeklyGrowth;
