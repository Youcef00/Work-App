import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const stringFormatMonth = (date) =>{
  if (date.getMonth() == 0) {return 'Janvier'} else if (date.getMonth() == 1) {return 'Fevrier'}
  else if (date.getMonth() == 2) {return 'Mars'} else if (date.getMonth() == 3) {return 'Avril'}
  else if (date.getMonth() == 4) {return 'Mai'} else if (date.getMonth() == 5) {return 'Juin'}
  else if (date.getMonth() == 6) {return 'Juillet'} else if (date.getMonth() == 7) {return 'Août'}
  else if (date.getMonth() == 8) {return 'Septembre'} else if (date.getMonth() == 9) {return 'Octobre'}
  else if (date.getMonth() == 10) {return 'Novembre'} else if (date.getMonth() == 11) {return 'Décembre'}

}

const Day = ({time, day}) => {
  const date = new Date(time.date);
  return (
    <View style={Styles.container}>
      <Text style={{color: 'white', fontSize: 17,}}>{day}, {date.toString().split(' ')[2]} {stringFormatMonth(date)} {date.getFullYear()}</Text>
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
      fontSize: 18,

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
      marginTop: 10,
      alignItems: 'center',
      height: 35,

    },
    time: {
      marginRight: 10,
      fontSize: 19,
     fontWeight: 'normal',

    },
  }
);
