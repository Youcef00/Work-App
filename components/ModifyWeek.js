import React , {Component} from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Picker from './Picker.js';

const Day = ({time}) => {
  return (
    <View style={{margin: 20}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{marginRight: 10}}>Matin</Text>
      <Text style={{marginRight: 10}}>{time.matin.debut} -- {time.matin.fin}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={{marginRight: 10}}>Soir</Text>
      <Text style={{marginRight: 10}}>{time.soir.debut} -- {time.soir.fin}</Text>
      </View>
    </View>
  );
}

export default class ModifyWeek extends Component {
  constructor(props){
    super(props);
    this.state= {

      // week:{
      //   Lundi: {matin : new Date(), soir: new Date()},
      //   Mardi: {matin : new Date(), soir: new Date()},
      //   Mercredi: {matin : new Date(), soir: new Date()},
      //   Jeudi: {matin : new Date(), soir: new Date()},
      //   Vendredii: {matin : new Date(), soir: new Date()},
      //   Samedi: {matin : new Date(), soir: new Date()},
      //   Dimanche: {matin : new Date(), soir: new Date()},
      // }
    };
  

    this.touchableTime = this.touchableTime.bind(this);
    this.DATA = this.props.data;
  }









  touchableTime(time){
    return(
      <Picker time={time} />
    );
  }
  render(){

    return(
        <View>
            <Text> Update Week </Text>
            <Day time={this.props.data.Lundi} />
            <Day time={this.props.data.Mardi} />
            <Day time={this.props.data.Mercredi} />
            <Day time={this.props.data.Jeudi} />
            <Day time={this.props.data.Vendredi} />
            <Day time={this.props.data.Samedi} />
            <Day time={this.props.data.Dimanche} />

        </View>
    );
  }
}

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
