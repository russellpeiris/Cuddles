import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MilestoneDetail } from '../../components';
import { StyleSheet, View } from 'react-native';
import { dimen } from '../../../theme';
import React from 'react';

const Milestone1 = ({route}) => {
  const {content, scan1, scan2, scan3, subContent, weight, length, imageUrl} = route.params.milestoneData;

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.subContainer}>
        <MilestoneDetail
          title="Growth Information"
          content={content}
          scanTitle="Upcoming Tests and Scans"
          scan1={scan1}
          scan2={scan2}
          scan3={scan3}
          title2="Baby Growth Comparison"
          subContent={subContent}
          weight={weight}
          length={length}
          imageURL={imageUrl}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
  },
  subContainer: {
    padding: dimen.default,
  },
});

export default Milestone1;
