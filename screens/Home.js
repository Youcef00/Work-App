import React, {Component} from 'react';
import {
  View, Text, Button, TouchableOpacity, StyleSheet, Image, ImageBackground,
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
      <ImageBackground
        source= {require('../assets/images/background.jpg')}
        style={{width: '100%', height: '100%', flex: 1}}
       >
      <View style={{backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../assets/images/cover.jpg')}
        style={Styles.image}
      />
      </View>
      <View style={{flex: 1, borderTopLeftRadius: 30}}>
        <Weeks navigation={this.props.navigation} DATA={this.props.data} handleDeleteWeek={this.props.handleDeleteWeek}/>
        <TouchableOpacity onPress={this.handleOnPress} style={Styles.button}>
          <Text style={{textAlign: 'center', color: 'white'}}>Ajouter une semaine</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      </View>
    );

  }

}

const Styles = StyleSheet.create({

  button: {
    width: 200,
    height: 50,
    backgroundColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
    marginTop: 10
  },
  image: {

    resizeMode: 'cover',


  }

})
