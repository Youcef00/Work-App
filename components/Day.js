import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Day = ({time, day}) => {
  return (
    <View style={{margin: 20}}>
    <Text style={{color: 'grey'}}>{day}</Text>
      <View style={{flexDirection: 'row'}}>
      <View style={[Styles.dayStandard, Styles.day]}><Text style={{marginRight: 10}}>Matin</Text></View>
      <Text style={{marginRight: 10}}>{time.matin.debut} -- {time.matin.fin}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
      <View style={[Styles.dayStandard, Styles.night]}><Text style={{marginRight: 10}}>Soir</Text></View>
      <Text style={{marginRight: 10}}>{time.soir.debut} -- {time.soir.fin}</Text>
      </View>
    </View>
  );
}

export default Day;

const Styles = StyleSheet.create(
  {
    dayStandard: {
      borderRightWidth: 5,
      borderStyle: 'solid',
      width: 70,
    },
    day: {
      borderRightColor: 'cyan',
    },
    night: {
      borderRightColor: 'purple',
    },
  }
);
