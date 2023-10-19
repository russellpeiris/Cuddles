import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dimen, typography } from '../../../theme';
import { CheckBox } from '@rneui/base';

export const CheckboxGroup = ({ checkboxLabels }) => {
  const [checkboxStates, setCheckboxStates] = useState(
    Array(checkboxLabels.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <View>
      {checkboxLabels.map((label, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            value={checkboxStates[index]}
            onValueChange={() => handleCheckboxChange(index)}
          />
          <Text style={styles.textStyles}>{label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    textStyles:{
       texSize:typography.regular
    }
})