import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Day = ({time, day}) => {
  return (
    <View style={Styles.container}>
      <Text style={{color: 'grey', fontSize: 17}}>{day}</Text>
      <View style={[Styles.dayTime]}>
        <View style={[Styles.dayStandard, Styles.day]}><Text style={Styles.dayTextStandard}>Matin</Text></View>
        <Text style={Styles.time}>{time.matin.debut}  --  {time.matin.fin}</Text>
      </View>

      <View style={Styles.dayTime}>
        <View style={[Styles.dayStandard, Styles.night]}><Text style={[Styles.dayTextStandard]}>Soir</Text></View>
      < Text style={Styles.time}>{time.soir.debut}  --  {time.soir.fin}</Text>
      </View>
    </View>
  );
}

export default Day;

const Styles = StyleSheet.create(
  {
    container:{
      margin: 20,
      
    },
    dayStandard: {
      borderRightWidth: 5,
      borderStyle: 'solid',
      width: 70,
      height: 40,
      marginRight: 20,
      justifyContent: 'center'


    },
    dayTextStandard:{
      fontWeight: 'bold',
      fontSize: 16,

    },
    day: {
      borderRightColor: 'cyan',
    },
    night: {
      borderRightColor: 'purple',
    },
    dayTime: {
      flexDirection: 'row',
      marginLeft: 20,
      marginTop: 20,
      alignItems: 'center',
      height: 35,

    },
    time: {
      marginRight: 10,
      fontSize: 16,
      fontWeight: '600'
    },
  }
);
