import { DropDown, MenuButtons, PrimaryButton, RoundInputField } from '../components';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { colors, dimen, typography } from '../../theme';
import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';

const DueDate = () => {
  const[typeOpen, setTypeOpen] = useState(false);
  const[typeValue, setTypeValue] = useState(null);
  const [types, setTypes] = useState([
    {label:'Last Menstrual Period', value:'last menstrual period'},
    {label:'Ultrasound Scan', value:'ultrasound scan'}
  ])
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.formContainer}>
        <Text
          style={{
            fontSize: typography.subTitle,
            fontFamily: typography.semiBold,
            marginBottom: 12,
          }}
        >
          Set your due date
        </Text>
        <View style={{width:'100%'}}>
          <DropDown
            label="Estimate my due date based on"
            open={typeOpen}
            value={typeValue}
            items={types}
            setOpen={setTypeOpen}
            setValue={setTypeValue}
            setItems={setTypes}
            placeholder="Select an option"
            zIndex={3000}
            zIndexInverse={1000}
          />
        </View>
        <View>
          <RoundInputField
            onBlur={() => {}}
            width="100%"
            label="Enter Last Menstruation Date"
            placeholder="Estimated due date"
          />
        </View>
        <View style={{}}>
          <PrimaryButton text="Continue" />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default DueDate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: dimen.default,
    height: '100%',
  },
  formContainer: {
    padding: dimen.default,
    borderColor: colors.borderGray,
    borderWidth: 1,
    borderRadius: 10,
    height: '100%',
  },
});
