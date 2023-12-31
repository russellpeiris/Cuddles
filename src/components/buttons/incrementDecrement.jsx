import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../../theme';
import React, { useEffect, useState } from 'react';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';

export const IncrementDecrement = ({ label, onValueChange, initial }) => {
  useEffect(() => {
    setCount(initial ? initial : 0);
  }, [initial]);
  const [count, setCount] = useState(0);

  function increment() {
    setCount(function (prevCount) {
      const newCount = prevCount + 1;
      onValueChange(newCount);
      return newCount;
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        const newCount = prevCount - 1;
        onValueChange(newCount);
        return newCount;
      } else {
        return 0;
      }
    });
  }

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <Button
          title="-"
          titleStyle={styles.buttonText}
          buttonStyle={styles.decrementButton}
          onPress={decrement}
        />
        <Input
          editable={false}
          placeholderTextColor='black'
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.countInputContainer}
          inputStyle={styles.input}
          value={count?.toString()}
        />
        <Button
          title="+"
          titleStyle={styles.buttonText}
          buttonStyle={styles.incrementButton}
          onPress={increment}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: typography.default,
    fontFamily: typography.medium,
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '47%',
    alignItems: 'center',
    marginBottom: 19,
    
  },
  decrementButton: {
    width: 55,
    height: 50,
    borderTopStartRadius: 25,
    borderBottomStartRadius: 25,
    backgroundColor: colors.count,
    borderColor: colors.borderGray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
  },
  incrementButton: {
    width: 55,
    height: 50,
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
    backgroundColor: colors.count,
    borderColor: colors.borderGray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
  },
  inputContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginVertical: 0,
    height: 50,
    width: '29%',
  },
  countInputContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    margin: 0,
    padding: 0,
    height: 50,
    borderColor: colors.borderGray,
  },
  input: {
    padding: 0,
    margin: 0,
    textAlign: 'center',
    fontSize: typography.small,
    fontFamily: typography.semiBold,

  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});