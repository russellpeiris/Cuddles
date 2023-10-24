import { MenuButtons, PrimaryButton, RoundInputField } from '../components';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { colors, dimen, typography } from '../../theme';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const DueDate = () => {
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
        <View>
          <RoundInputField
            onBlur={() => {}}
            width="100%"
            label="Estimate my due date based on"
            placeholder="Select an option"
          />
        </View>
        <View>
          <RoundInputField
            onBlur={() => {}}
            width="100%"
            label="Due date"
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
