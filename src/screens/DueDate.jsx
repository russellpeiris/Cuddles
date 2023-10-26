import { DatePicker, DropDown, InputField, MenuButtons, PrimaryButton, RoundInputField } from '../components';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { colors, dimen, typography } from '../../theme';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';

const DueDate = () => {
  const[inputs, setInputs] = useState({
    dueDate:'',
  })
  const [date, setDate] = useState(new Date());
  const[estimatedDueDate, setEstimatedDueDate] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const[typeOpen, setTypeOpen] = useState(false);
  const[typeValue, setTypeValue] = useState(null);
  const [types, setTypes] = useState([
    {label:'Last Menstrual Period', value:'last menstrual period'},
    {label:'Ultrasound Scan', value:'ultrasound scan'}
  ])

  const toggleDatePicker = () => {
    setIsVisible(!isVisible);
  };
  
  const handlePicker = (event, selectedDate) => {
    if (event.type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === 'android') {
        toggleDatePicker();
        setInputs({ ...inputs, dueDate: currentDate.toDateString() });
       // setError((prevError) => ({ ...prevError, dueDate: '' }));
      }
    } else {
      toggleDatePicker();
    }
  };

  const calculateDueDate = () => {
    if (inputs.dueDate) {
      const selectedDate = new Date(inputs.dueDate);
      const estimatedDueDate = new Date(selectedDate);
      estimatedDueDate.setDate(estimatedDueDate.getDate() + 7 * 40); // Adding 40 weeks
      setEstimatedDueDate(estimatedDueDate);
    }
  };

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
           {isVisible && (
                <DatePicker mode="date" display="spinner" value={date} onChange={handlePicker} />
              )}
                <Pressable
                  style={{ margin: 0, padding: 0, width: '100%'}}
                  onPress={toggleDatePicker}
                >
                  <RoundInputField
                    value={inputs.dueDate}
                    onChangeText={(value) => {
                      setInputs({ ...inputs, dueDate: value.toDateString() });
                      setDate(new Date(value));
                    }}
                    type={'text'}
                    onBlur={() => {}}
                    width="100%"
                    label="First day of last period"
                    placeholder="DD MMM YYYY"
                    editable={false}
                  />
                </Pressable>
        </View>
        <Text style={{ fontFamily: typography.semiBold,fontSize:typography.default, color: colors.black,marginTop:16}}>
             Estimated Due Date
            </Text>
         <View style={styles.display}>
            <Text style={{ fontFamily: typography.bold, fontSize:typography.default, color: colors.primaryPink }}>
            {estimatedDueDate ? estimatedDueDate.toDateString() : 'Estimated due date will be displayed here'}
           </Text>
         </View>
         <View>
          <Text style={{ fontFamily: typography.regular, color: colors.descriptionGray }}>
             Please note that this is an estimated due date. Make sure to check it with your doctor on your next appointment.
          </Text>
         </View>
         <View style={{marginTop:40}}>
          <PrimaryButton text="Calculate" onPress={calculateDueDate} />
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
  display: {
    borderColor: colors.borderGray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginTop:dimen.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
