import React , {Component} from 'react';
import {TextInput, Input, View, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';
import PropTypes from 'prop-types';

export default class Picker extends Component{
  static propTypes = {
    time: PropTypes.string,

  }
  static defaultProps = {
    time: new Date(Date.now()).toString().split(' ')[4].slice(0, 5),

  }
  constructor(props){
    super(props);
    this.state= {
      date: this.props.time,
      icon: <Icon name="check" size={iconSize} color="green" style={Styles.icon}/>
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }



  isValid(value){
    const regex = new RegExp('(([0-1][0-9]|2[0-3]):[0-5][0-9])');
    return regex.test(value) || value === '';
  }

  async handleOnChange(formatted, extracted){
    if(this.isValid(formatted)){
      await this.setState({
        date: formatted,
        icon: <Icon name="check" size={iconSize} color="green" style={Styles.icon} />

      });
    }
    else{
      await this.setState({
        icon: <Icon name="close" size={iconSize+8} color="red" style={Styles.icon} />
      })
    }
    this.props.handleChange(this.state.date, this.props.period);
  }
  render(){
    return(

      <View style={Styles.pickerContainer}>
        <TextInputMask
            type={'custom'}
            options={{
              mask: '99:99',
              validator: function(value, settings){
                const regex = new RegExp('(([0-1][0-9]|2[0-3]):[0-5][0-9])');
                return regex.test(value) || value === '';
              }
            }}
            value={this.state.date}

            onChangeText={this.handleOnChange}
            style={{marginRight: 10, fontSize: 30, color: 'white', width: 90}}
        />
        {this.state.icon}

      </View>
    );
  }

}
const iconSize = 30;
const Styles = StyleSheet.create({
  icon: {
    margin: 4
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
