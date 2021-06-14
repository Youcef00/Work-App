import React, {Component} from 'react';
import {
  View, Text,
} from 'react-native';

import Weeks from '../components/Weeks.js';


export default class Home extends Component  {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={{flex: 1}}>
      <Text> Home </Text>
      <Weeks navigation={this.props.navigation} DATA={this.props.data}/>

      </View>
    );

  }

}
