import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { typography } from '../../../theme';

export const CheckboxGroup = ({ checkboxLabels, onCheckboxChange }) => {
  const [checkboxStates, setCheckboxStates] = useState(
    Array(checkboxLabels.length).fill(false)
  );


  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);

     // Create an array of selected reasons
     const selectedReasons = checkboxLabels
     .filter((_, i) => newCheckboxStates[i])
     .map((label) => label);

    // Call the onCheckboxChange callback to pass the selected reasons back to the parent component
    onCheckboxChange(selectedReasons);

  };

  return (
    <View>
      {checkboxLabels.map((label, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            checked={checkboxStates[index]}
            onPress={() => handleCheckboxChange(index)}
          />
          <Text style={styles.textStyles}>{label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles:{
    fontSize: typography.default,
  }
})