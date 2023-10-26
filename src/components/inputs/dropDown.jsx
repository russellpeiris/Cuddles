import { colors, dimen, typography } from '../../../theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const DropDown = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
  onOpen,
  onChangeValue,
  label,
  width
}) => {
  const containerWidth = {
    width: width ? width : '47%'
  }
  return (
    <View style={{marginBottom: 19}}>
      <Text
        style={{ fontSize: typography.default, fontFamily: typography.medium, marginBottom: 12 }}
      >
        {label}
      </Text>
      <View style={containerWidth}>
      <DropDownPicker
        style={styles.dropdown}
        textStyle={{ fontSize: 14, fontFamily: typography.medium, paddingLeft: dimen.default }}
        listItemContainerStyle={{ }}
        // listParentContainerStyle={{ backgroundColor: 'aqua', width: '47%'}}
        open={open}
        dropDownContainerStyle={{ width: '100%', borderColor: colors.borderGray, borderWidth: 1 }}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        placeholderStyle={styles.placeholderStyles}
        onOpen={onOpen}
        onChangeValue={onChangeValue}
        zIndex={3000}
        zIndexInverse={1000}
        listMode='SCROLLVIEW'
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderColor: colors.borderGray,
    borderWidth: 1,
    borderRadius: 24,
    height: 50,
  },
  placeholderStyles: {
    fontSize: 14,
    paddingLeft: dimen.default,
    fontFamily: typography.medium,
  },
});
