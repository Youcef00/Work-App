import React , {Component} from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Picker from './Picker.js';
import Day from './Day.js';


export default class ModifyWeek extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: this.props.route.params.data,
    }

    this.touchableDay = this.touchableDay.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.handleWeekUpdate = this.handleWeekUpdate.bind(this);

  }

  handleWeekUpdate(day, newDayData){
    let newData = this.state.data;
    newData[day] = newDayData;
    this.setState({
      data: newData
    });
  }

  handleOnPress(day){
    this.props.route.params.navigation.navigate("UpdateDay", {data: day})
  }

  touchableDay(day, text){
    //console.log(`data: ${day} id:${this.props.route.params.id} text: ${text}`);
    return(
      <TouchableOpacity onPress={() => this.props.route.params.navigation.navigate("UpdateDay", {data: day, id: this.props.route.params.id, day: text, navigation: this.props.route.params.navigation, handleUpdate: this.handleWeekUpdate})}>
        <Day time={day}  day={text}/>
      </TouchableOpacity>
    );
  }
  render(){

    return(
        <View style={{flex:1, paddingVertical: 20}}>
            <Text> Update Week </Text>
            <ScrollView >
              {this.touchableDay(this.state.data.Lundi, "Lundi")}
              {this.touchableDay(this.state.data.Mardi, "Mardi")}
              {this.touchableDay(this.state.data.Mercredi, "Mercredi")}
              {this.touchableDay(this.state.data.Jeudi, "Jeudi")}
              {this.touchableDay(this.state.data.Vendredi, "Vendredi")}
              {this.touchableDay(this.state.data.Samedi, "Samedi")}
              {this.touchableDay(this.state.data.Dimanche, "Dimanche")}
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
