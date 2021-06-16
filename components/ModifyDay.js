import React , {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Picker from './Picker.js';

export default class ModifyDay extends Component{

  constructor(props){
    super(props);
    this.state = {
      date: this.props.route.params.data,
    }
    this.handleOnPress = this.handleOnPress.bind(this);
    this.handlePickerChange = this.handlePickerChange.bind(this);
  }

handleOnPress(){
  this.props.handleOnPress(this.props.route.params.id, this.props.route.params.day, this.state.date);
  this.props.route.params.handleUpdate(this.props.route.params.day, this.state.date);
  this.props.route.params.navigation.goBack();
}

handlePickerChange(time, period){
  let newDate = this.state.date;
  if(period === "matinDebut"){newDate.matin.debut = time;}
  else if (period === "matinFin") {newDate.matin.fin = time;}
  else if (period === "soirDebut"){newDate.soir.debut = time;}
  else if (period === "soirFin") {newDate.soir.fin = time;}
  this.setState({
    date: newDate
  });
  console.log(`modifyDay newDate: ${newDate.matin.debut}`);
}

  render(){
    return(
      <View style={{flex:1}}>
      <Text>Date</Text>

      <View style={{flex: 1, borderColor: 'cyan', borderWidth: 5, borderStyle: 'solid'}}>
        <Text>Matin</Text>
        <Picker time={this.props.route.params.data.matin.debut} handleChange={this.handlePickerChange} period="matinDebut"/>
        <Picker time={this.props.route.params.data.matin.fin} handleChange={this.handlePickerChange} period="matinFin"/>
      </View>

      <View style={{flex: 1, borderColor: 'purple', borderWidth: 5, borderStyle: 'solid'}}>
        <Text>Soir</Text>
        <Picker time={this.props.route.params.data.soir.debut} handleChange={this.handlePickerChange} period="soirDebut"/>
        <Picker time={this.props.route.params.data.soir.fin} handleChange={this.handlePickerChange} period="soirFin"/>
      </View>

      <Button title="Update" onPress={this.handleOnPress} />
      </View>

    );
  }
}
