import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {View, Text, Image} from 'react-native'
import Home from './screens/Home.js';
import Weeks from './components/Weeks.js';
import ModifyWeek from './components/ModifyWeek.js';
import Picker from './components/Picker.js';
import ModifyDay from './components/ModifyDay.js';
import AddWeek from './components/AddWeek.js';
import AddDay from './components/AddDay.js';
import SplashScreen from './components/SplashScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
console.disableYellowBox = true;
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



export default class App extends Component{

  constructor(){
    super();
    this.state = {
      data:  [],

    };




    this.storeData = this.storeData.bind(this);
    this.getData = this.getData.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addWeek = this.addWeek.bind(this);
    this.handleDeleteWeek = this.handleDeleteWeek.bind(this);
  }

  componentDidMount(){
    this.getData();

  }

  componentDidUpdate(){
    //console.log(this.state.data[0].Lundi)

  }
  async storeData(){
  try {
    await AsyncStorage.setItem('data', JSON.stringify(this.state.data));
    console.log('data stored');
  } catch (e) {
    console.log(e);
  }
}

async getData() {
  try {
    const value = await AsyncStorage.getItem('data');

    this.setState({
      data: value != null ? JSON.parse(value) : [],
    });

  } catch(e) {
    console.log(e);
  }

}

async addWeek(newWeek){
  let data = this.state.data;
  data = [...data, newWeek];
  await this.setState({
    data: data,
  });
  console.log(newWeek.id);
  this.storeData();
}



  async handleUpdate(id, day, data){
    const newData = [...this.state.data];
    newData.forEach((d) => {
      if(d.id == id){
        //console.log(`found => ${day} data:  ${data.matin.debut}`);
        d[day] = data;
      }
    });
    await this.setState({data: newData});
    this.storeData();
  }

async handleDeleteWeek(weekId){
  let newData = this.state.data.filter((week) => week.id != weekId);
  await this.setState({
    data: newData,
  });
  this.storeData();
  console.log(`delete week handler data: ${this.state.data}`);
}
  render(){

    //<ModifyWeek data={DATA}/>
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
            />

          <Stack.Screen name="Home" options={{headerShown: false}}>

            {props => <Home {...props} data={this.state.data} handleDeleteWeek={this.handleDeleteWeek} /> }

          </Stack.Screen>

          <Stack.Screen
            name="UpdateWeek"
            options={{title: "Modifier La Semaine"}}
            component={ModifyWeek}
          />

          <Stack.Screen
            name="UpdateDay"
            options={{
              title: "Modifier Le Jour",
              headerStyle: {
                backgroundColor: '#9896a4',

              },
              headerTintColor: '#fff',
          }}
          >
          {props => <ModifyDay {...props} handleOnPress={this.handleUpdate} />}
          </Stack.Screen>

          <Stack.Screen
            name="AddWeek"
            options={{title: "Add Week"}}
          >
          {props => <AddWeek {...props} addWeek={this.addWeek} />}
          </Stack.Screen>

          <Stack.Screen
            name="AddDay"
            options={{title: "Add Day"}}
            component={AddDay}
          />
        </Stack.Navigator>
      </NavigationContainer>
      );
  }
}
