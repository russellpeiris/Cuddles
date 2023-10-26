import {
  DatePicker,
  DropDown,
  PrimaryButton,
  RoundInputField,
} from '../components';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { colors, dimen, typography } from '../../theme';
import React, { useState } from 'react';
import moment from 'moment';
import { DATE_FORMAT } from '../constants';

const DueDate = () => {
  const [inputs, setInputs] = useState({
    dueDate: '',
  });
  const [date, setDate] = useState(new Date());
  const [estimatedDueDate, setEstimatedDueDate] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [types, setTypes] = useState([
    { label: 'Last Menstrual Period', value: 'last menstrual period' },
    { label: 'Ultrasound Scan', value: 'ultrasound scan' },
  ]);

  const toggleDatePicker = () => {
    setIsVisible(!isVisible);
  };

  const handlePicker = (event, selectedDate) => {
    if (event.type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === 'android') {
        toggleDatePicker();
        setInputs({ ...inputs, dueDate: moment(currentDate).format(DATE_FORMAT) });
        // setError((prevError) => ({ ...prevError, dueDate: '' }));
      }
    } else {
      toggleDatePicker();
    }
  };

  const calculateDueDate = () => {
    if (inputs.dueDate) {
      formattedDate = moment(inputs.dueDate ,DATE_FORMAT);
      formattedDate.add(280, 'days');
      const calDate = formattedDate.format(DATE_FORMAT);
      setEstimatedDueDate(calDate);
    }
  };
  const calculateCurrentWeek = (startDate, currentDate) => {
    const timeDiff = currentDate - startDate;
    const weekNumber = Math.floor(timeDiff / (7 * 24 * 60 * 60 * 1000));
    setCurrentWeek(weekNumber);
  };

  useEffect(() => {
    // Calculate and update the current week when the component mounts
    if (inputs.dueDate) {
      calculateCurrentWeek(new Date(inputs.dueDate), new Date());
    }
  }, [inputs.dueDate]);

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
        <View style={{ width: '100%' }}>
          <DropDown
            width="100%"
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
          <Pressable style={{ margin: 0, padding: 0, width: '100%' }} onPress={toggleDatePicker}>
            <RoundInputField
              value={inputs.dueDate}
              onChangeText={(value) => {
                      setInputs({ ...inputs, dueDate: moment(value).format(DATE_FORMAT) });
                      setDate(new Date(value));
                    }}
                    type={'text'}
                    onBlur={() => {}}
                    width="100%"
                    label="First day of last period"
                    placeholder="DD-MM-YYYY"
                    editable={false}
                  />
                </Pressable>
        </View>
        {estimatedDueDate ? (
          <>
            <RoundInputField
              value={estimatedDueDate}
              onChangeText={(value) => {
                setInputs({ ...inputs, dueDate: moment(value).format(DATE_FORMAT) });
              }}
              type={'text'}
              onBlur={() => {}}
              width="100%"
              label="Estimated Due Date"
              placeholder="DD-MM-YYYY"
              editable={false}
            />
            <View>
              <Text style={{ fontFamily: typography.regular, color: colors.descriptionGray }}>
                Please note that this is an estimated due date. Make sure to check it with your
                doctor on your next appointment.
              </Text>
            </View>
          </>
        ): null}
        <View style={{}}>
          <PrimaryButton text="Calculate" onPress={calculateDueDate} />
        </View>
        <Text style={{ fontFamily: typography.semiBold,fontSize:typography.default, color: colors.black,marginTop:16}}>
             Current week
            </Text>
         <View style={styles.display}>
            <Text style={{ fontFamily: typography.bold, fontSize:typography.default, color: colors.descriptionGray }}>
            Current week: {currentWeek ? currentWeek : 'Calculating...'}
           </Text>
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
    marginTop: dimen.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
