import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {View, Text, Image} from 'react-native'
import Home from './screens/Home.js';
import Weeks from './components/Weeks.js';
import ModifyWeek from './components/ModifyWeek.js';
import Picker from './components/Picker.js';
import ModifyDay from './components/ModifyDay.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
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

  {
    id: '2',
    title: 'Week 2',
    Lundi: {
      matin:{
        debut: '11:00',
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{title: "Welcome Home"}}>

            {props => <Home {...props} data={DATA} /> }

          </Stack.Screen>

          <Stack.Screen
            name="UpdateWeek"
            options={{title: "Update Week"}}
            component={ModifyWeek}
          />

          <Stack.Screen
            name="UpdateDay"
            options={{title: "Update Day"}}
            component={ModifyDay}
          />

        </Stack.Navigator>
      </NavigationContainer>
      );
  }
}
