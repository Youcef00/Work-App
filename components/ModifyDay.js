import React , {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Picker from './Picker.js';

export default class ModifyDay extends Component{

  constructor(props){
    super(props);

    this.handleOnPress = this.handleOnPress.bind(this);

  }

handleOnPress(){
  this.props.handleOnPress(this.props.route.params.id, this.props.route.params.day, this.props.route.params.data);
}



  render(){
    return(
      <View style={{flex:1}}>
      <Text>Date</Text>

      <View style={{flex: 1, borderColor: 'cyan', borderWidth: 5, borderStyle: 'solid'}}>
        <Text>Matin</Text>
        <Picker time={this.props.route.params.data.matin.debut} />
        <Picker time={this.props.route.params.data.matin.fin} />
      </View>

      <View style={{flex: 1, borderColor: 'purple', borderWidth: 5, borderStyle: 'solid'}}>
        <Text>Soir</Text>
        <Picker time={this.props.route.params.data.soir.debut} />
        <Picker time={this.props.route.params.data.soir.fin} />
      </View>

      <Button title="Update" onPress={this.handleOnPress} />
      </View>

    );
  }
}
