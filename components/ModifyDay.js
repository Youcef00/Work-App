import React , {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Picker from './Picker.js';

export default class ModifyDay extends Component{

  constructor(props){
    super(props);
  }


  render(){
    return(
      <View style={{flex:1}}>
      <Text>Date</Text>

      <View style={{flex: 1, borderColor: 'blue', borderWidth: 5, borderStyle: 'solid'}}>
        <Text>Matin</Text>
        <Picker time={this.props.data.matin.debut} />
        <Picker time={this.props.data.matin.fin} />
      </View>

      <View style={{flex: 1, borderColor: 'purple', borderWidth: 5, borderStyle: 'solid'}}>
        <Text>Soir</Text>
        <Picker time={this.props.data.soir.debut} />
        <Picker time={this.props.data.soir.fin} />
      </View>

      </View>

    );
  }
}
