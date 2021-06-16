import React, {Component} from 'react';
import {
  View, Text, Button
} from 'react-native';

import Weeks from '../components/Weeks.js';


export default class Home extends Component  {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
    }
    this.handleOnPress = this.handleOnPress.bind(this);
  }




  handleOnPress(){

    this.props.navigation.navigate("AddWeek", {navigation: this.props.navigation, data: this.props.data});
  }

  render(){

    return (
      <View style={{flex: 1}}>
      <Text> Home </Text>
      <Button onPress={this.handleOnPress} title="Add" />
      <Weeks navigation={this.props.navigation} DATA={this.props.data}/>

      </View>
    );

  }

}
