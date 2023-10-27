import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import { typography } from '../../theme';

const Splash = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('GetStarted');
  };

  const SkipText = () => {
    return <Text style={{ fontFamily: typography.semiBold, 
      fontSize: 16, color: 'white',
      padding: 10
      }}>Skip</Text>;
  }
  const NextText = () => {
    return <Text style={{ fontFamily: typography.semiBold, 
      fontSize: 16, color: 'white',
      padding: 10
      }}>Next</Text>;
  }

  return (
    <View style={styles.container}>
      <Onboarding
        SkipButtonComponent={SkipText}
        NextButtonComponent={NextText}
        onDone={handleDone}
        onSkip={handleDone}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            titleStyles: { fontFamily: typography.semiBold },
            subTitleStyles: { fontFamily: typography.semiBold },
            backgroundColor: '#b285a3',
            image: (
              <Image style={styles.illust} source={require('../assets/illustrations/peace.png')} />
            ),
            title: 'Peace',
            subtitle: 'Feel supported, mindful and at ease.',
          },
          {
            titleStyles: { fontFamily: typography.semiBold },

            subTitleStyles: { fontFamily: typography.semiBold },
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
            titleStyles: { fontFamily: typography.semiBold },

            subTitleStyles: { fontFamily: typography.semiBold },
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
    fontFamily: typography.semiBold,
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
