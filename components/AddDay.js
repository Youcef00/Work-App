import React , {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Picker from './Picker.js';
import ModifyDay from './ModifyDay';

export default class AddDay extends ModifyDay{

  constructor(props){
    super(props);

    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress(){

    this.props.route.params.handleUpdate(this.props.route.params.day, this.state.date);
    this.props.route.params.navigation.goBack();
  }
}
