import React, {Component, useState} from 'react';
import {View, Text, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home.js';
import Weeks from './components/Weeks.js';
import ModifyWeek from './components/ModifyWeek.js';
import Picker from './components/Picker.js';
import ModifyDay from './components/ModifyDay.js';

const DATA = [
  {
    id: '1',
    title: 'Week 1',
    Lundi: {
      matin:{
        debut: '11:15',
        fin: '15:00'
      },
      soir:{
        debut: '19:00',
        fin: '23:00'
      },
    },
    Mardi: {
      matin:{
        debut: '11:15',
        fin: '15:00'
      },
      soir:{
        debut: '19:00',
        fin: '23:00'
      },
    },
    Mercredi: {
      matin:{
        debut: '11:15',
        fin: '15:00'
      },
      soir:{
        debut: '19:00',
        fin: '23:00'
      },
    },
    Jeudi: {
      matin:{
        debut: '11:15',
        fin: '15:00'
      },
      soir:{
        debut: '19:00',
        fin: '23:00'
      },
    },
    Vendredi: {
      matin:{
        debut: '11:15',
        fin: '15:00'
      },
      soir:{
        debut: '19:00',
        fin: '23:00'
      },
    },
    Samedi: {
      matin:{
        debut: '11:15',
        fin: '15:00'
      },
      soir:{
        debut: '19:00',
        fin: '23:00'
      },
    },
    Dimanche: {
      matin:{
        debut: '11:15',
        fin: '15:00'
      },
      soir:{
        debut: '19:00',
        fin: '23:00'
      },
    },
  },



];
const jour=
  {
    matin:{
      debut: '11:15',
      fin: '15:00'
    },
    soir:{
      debut: '19:00',
      fin: '23:00'
    },
  };


export default class App extends Component{

  constructor(){
    super();
    this.state = {
      weeks: [],

    };

    this.handleDatePickerConfirm = this.handleDatePickerConfirm.bind(this);
    this.hideDatePicker = this.hideDatePicker.bind(this);
  }

  //<ModifyWeek data={DATA} />
  handleDatePickerConfirm(date){
    console.log(`d: ${date}`);
    hideDatePicker();
  }

  hideDatePicker(){
    this.setState({isVisible: false});
  }
  render(){
    //<ModifyWeek data={DATA}/>
    return(
      <View style={{flex:1}}>
      <ModifyWeek data={DATA[0]}/>
      </View>
      );
  }
}
