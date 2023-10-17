import React from 'react';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from '@rneui/themed'; 
import { colors, dimen, typography } from '../../../theme';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; 

export const MenuButtons = ({ text, onPress, width, height, icon, bgColor}) => {
  const buttonStyles = {
    backgroundColor:bgColor ? bgColor : colors.white,
    borderWidth: 1,
    color:'black',
    width: width || '100%',
    height: height || 65,
    borderRadius: 8,
    borderColor:colors.borderGray,
  };

  return (
    <GestureHandlerRootView style={{ width: '100%' }}>
      <Button
        TouchableComponent={TouchableOpacity}
        onPress={onPress}
        containerStyle={{}}
        buttonStyle={buttonStyles}
        titleStyle={styles.textStyles}
        title={text}
        icon={
          icon && (
            <View style={styles.iconContainer}>
              <FontAwesomeIcon name={icon} size={dimen.icon} color="#000000" /> 
            </View>
          )
        }
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    color: '#000000',
    fontFamily: typography.bold,
    fontSize: 18,
    textAlign:'left',
  },
  iconContainer: {
    marginRight: 20, 
    marginLeft:10,
    alignItems:'stretch',
  },
});
