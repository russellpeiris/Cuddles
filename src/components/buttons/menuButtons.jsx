import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { colors, dimen, typography } from '../../../theme';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import React from 'react';
import { ProfileIcon } from '../../assets/icons';

export const MenuButtons = ({ text, onPress, width, height, icon, bgColor, bdColour, txColor }) => {
  const buttonStyles = {
    backgroundColor: bgColor ? bgColor : colors.white,
    borderWidth: 1,
    color: 'black',
    width: width || '100%',
    height: height || 65,
    borderRadius: 8,
    borderColor: bdColour ? bdColour : colors.borderGray,
    justifyContent: 'center',
  };

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <View
         style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginLeft: 30,
        }}
        >
        {icon}
        <Text style={[styles.textStyles, txColor ? { color: txColor } : { color: 'black' }]}>
          {text}
        </Text> 
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontFamily: typography.semiBold,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 20,
  },
});
