import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme';
import React from 'react';
import { ExploreCard } from '../components';

const Explore = () => {

    const navigation = useNavigation();
  const handleCard1Press = () => {
    navigation.navigate('ExploreArticle');
  };

  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mental</Text>
          <Text style={styles.buttonText}>Health</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Physical</Text>
          <Text style={styles.buttonText}>Health</Text>
        </TouchableOpacity>
      </View>

        <TouchableOpacity style={styles.card} onPress={handleCard1Press}>
          <ExploreCard title="10 Common Pregnancy Worries" imageUrl="https://shorturl.at/eEHV7" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <ExploreCard
            title="10 Common Pregnancy Myths"
            imageUrl="https://www.uhhospitals.org/-/media/Images/Blog/Pregnant-Woman-Holds-Ultrasound-1359477076_Blog-MainArticleImage.jpg?h=450&w=720&la=en&hash=68C15BEB1F18ECD0CBA11F1443616C71306B34D3"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <ExploreCard
            title="Hobbies for expecting mothers"
            imageUrl="https://www.1800flowers.com/blog/wp-content/uploads/2022/10/gifts-for-pregnant-woman-woman-reading-book-and-drinking-tea.jpg.webp"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <ExploreCard
            title="10 Common Pregnancy Myths"
            imageUrl="https://wallpapers.com/images/featured/beautiful-scenery-pictures-ycxy8o2ii84zsgiv.jpg"
          />
        </TouchableOpacity>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: '100%',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
  },
  button: {
    width: 120,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#9F678C',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'flex-start',
  },

  card: {
    marginBottom: 20,
  },
});

export default Explore;
