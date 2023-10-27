import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';



const Splash = () => {

    const navigation = useNavigation();

    const handleDone = () =>{
navigation.navigate('GetStarted');
    }
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#b285a3',
            image: (
              <Image style={styles.illust} source={require('../assets/illustrations/peace.png')} />
            ),
            title: 'Peace',
            subtitle: 'Feel supported, mindful and at ease.',
          },

          {
            backgroundColor: '#cad9dd',
            image: (
              <Image
                style={styles.illust}
                source={require('../assets/illustrations/SelfCare.png')}
              />
            ),
            title: 'Personal Care',
            subtitle: 'Tailored by expers, just for you.',
          },

          {
            backgroundColor: '#f0e4c5',
            image: (
              <Image
                style={styles.illust1}
                source={require('../assets/illustrations/empower.png')}
              />
            ),
            title: 'Empowerment',
            subtitle: 'Knowledge for boosting your confidence.',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  illust: {
    width: 420,
    height: 260,
    alignSelf: 'center',
  },

  illust1: {
    width: 390,
    height: 370,
    alignSelf: 'center',
  },
});

export default Splash;
