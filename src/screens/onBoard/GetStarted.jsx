import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components';
import {dimen} from '../../../theme.js'

const GetStarted = () => {

    const navigation = useNavigation(); // Initialize the navigation object

    const handleGetStarted = () => {
      navigation.navigate('Login'); // Navigate to the 'Login' screen
    };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/illustrations/GetStarted.png')} style={styles.image} />
        <PrimaryButton
          text="Get Started"
          onPress={handleGetStarted}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: dimen.default,
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9f678c',
    width: 350,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GetStarted;
