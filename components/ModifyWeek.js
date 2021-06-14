import React , {Component} from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Picker from './Picker.js';

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

export default class ModifyWeek extends Component {
  constructor(props){
    super(props);

    this.touchableDay = this.touchableDay.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress(day){
    this.props.route.params.navigation.navigate("UpdateDay", {data: day})
  }

  touchableDay(day, text){
    console.log(`data: ${day} id:${this.props.route.params.id} text: ${text}`);
    return(
      <TouchableOpacity onPress={() => this.props.route.params.navigation.navigate("UpdateDay", {data: day, id: this.props.route.params.id, day: text})}>
        <Day time={day}  day={text}/>
      </TouchableOpacity>
    );
  }
  render(){

    return(
        <View style={{flex:1, paddingVertical: 20}}>
            <Text> Update Week </Text>
            <ScrollView >
              {this.touchableDay(this.props.route.params.data.Lundi, "Lundi")}
              {this.touchableDay(this.props.route.params.data.Mardi, "Mardi")}
              {this.touchableDay(this.props.route.params.data.Mercredi, "Mercredi")}
              {this.touchableDay(this.props.route.params.data.Jeudi, "Jeudi")}
              {this.touchableDay(this.props.route.params.data.Vendredi, "Vendredi")}
              {this.touchableDay(this.props.route.params.data.Samedi, "Samedi")}
              {this.touchableDay(this.props.route.params.data.Dimanche, "Dimanche")}
            </ScrollView>

        </View>
    );
  }
}
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
/*
<View >
<DateTimePickerModal
    isVisible= {this.state.isVisible}
    onConfirm= {this.handleDatePickerConfirm}
    onCancel= {this.hideDatePicker}
    date={new Date(Date.now())}
    mode={'time'}
    is24HourSource= {true}
    style={{borderWidth: 2, borderStyle: 'solid'}}
      />

</View>

*/

/*
<Table borderStyle={{borderWidth: 2, borderColor: 'black', flex: 1}} >
    <Row data={['', 'Jour', 'Soir']} />
    <TableWrapper style={{flexDirection: 'row'}}>
        <Col data={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']} style={{flex:1}} hightArr={[28, 28]} textStyle={{textAlign: 'center'}} />
        <Rows data={[
          [this.touchableTime(this.DATA[0].Lundi.matin), this.touchableTime(this.DATA[0].Lundi.soir)],
          [this.touchableTime(this.DATA[0].Mardi.matin), this.touchableTime(this.DATA[0].Mardi.soir)],
          [this.touchableTime(this.DATA[0].Mercredi.matin), this.touchableTime(this.DATA[0].Mercredi.soir)],
          [this.touchableTime(this.DATA[0].Jeudi.matin), this.touchableTime(this.DATA[0].Jeudi.soir)],
          [this.touchableTime(this.DATA[0].Vendredi.matin), this.touchableTime(this.DATA[0].Vendredi.soir)],
          [this.touchableTime(this.DATA[0].Samedi.matin), this.touchableTime(this.DATA[0].Samedi.soir)],
          [this.touchableTime(this.DATA[0].Dimanche.matin), this.touchableTime(this.DATA[0].Dimanche.soir)],

        ]}
flexArr= {[1, 1]}
/>
    </TableWrapper>
</Table>
*/
