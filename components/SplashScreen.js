import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1500);
  }

  render(){
    return(
      <View style={{backgroundColor: "#0E0000", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/images/splashImage.jpg')}
          style={{}}
        />
      </View>
    );
  }
}
