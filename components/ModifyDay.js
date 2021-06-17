import React , {Component} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Picker from './Picker.js';
import IconMoon from 'react-native-vector-icons/FontAwesome';
import IconSun from 'react-native-vector-icons/Fontisto';
export default class ModifyDay extends Component{

  constructor(props){
    super(props);
    this.state = {
      date: this.props.route.params.data,
    }
    this.handleOnPress = this.handleOnPress.bind(this);
    this.handlePickerChange = this.handlePickerChange.bind(this);
  }

handleOnPress(){
  this.props.handleOnPress(this.props.route.params.id, this.props.route.params.day, this.state.date);
  this.props.route.params.handleUpdate(this.props.route.params.day, this.state.date);
  this.props.route.params.navigation.goBack();
}

handlePickerChange(time, period){
  let newDate = this.state.date;
  if(period === "matinDebut"){newDate.matin.debut = time;}
  else if (period === "matinFin") {newDate.matin.fin = time;}
  else if (period === "soirDebut"){newDate.soir.debut = time;}
  else if (period === "soirFin") {newDate.soir.fin = time;}
  this.setState({
    date: newDate
  });
  console.log(`modifyDay newDate: ${newDate.matin.debut}`);
}

  render(){
    return(
      <View style={{flex:1}}>
        <View style={{height: 150}}>
        </View>
        <View style={Styles.dayTimesContainer}>


          <View style={Styles.dayTime}>
            <View style={Styles.iconContainer}>
              <Text style={Styles.iconTextContainer}>Matin</Text>
              <IconSun name="day-sunny" size={30} color="white" style={Styles.icon}/>
            </View>
            <View style={Styles.times}>
              <View style={[Styles.pickerContainer, Styles.pickerContainerLeft]}>
                <Text style={Styles.pickerContainerText}>From</Text>
                <Picker time={this.props.route.params.data.matin.debut} handleChange={this.handlePickerChange} period="matinDebut"/>
              </View>
              <View style={Styles.pickerContainer}>
                <Text style={Styles.pickerContainerText}>To</Text>
                <Picker time={this.props.route.params.data.matin.fin} handleChange={this.handlePickerChange} period="matinFin"/>
              </View>
            </View>
          </View>

          <View style={Styles.dayTime}>
            <View style={Styles.iconContainer}>
              <Text style={Styles.iconTextContainer}>Soir</Text>
              <IconMoon name="moon-o" size={30} color="white" style={Styles.icon}/>
            </View>
            <View style={Styles.times}>
              <View style={[Styles.pickerContainer, Styles.pickerContainerLeft]}>
                <Text style={Styles.pickerContainerText}>From</Text>
                <Picker time={this.props.route.params.data.soir.debut} handleChange={this.handlePickerChange} period="soirDebut"/>
              </View>
              <View style={Styles.pickerContainer}>
                <Text style={Styles.pickerContainerText}>To</Text>
                <Picker time={this.props.route.params.data.soir.fin} handleChange={this.handlePickerChange} period="soirFin"/>
              </View>
            </View>
          </View>

          <TouchableOpacity  onPress={this.handleOnPress} style={Styles.button}>
            <Text style={{color: 'white', fontSize: 25, marginRight: 'auto'}}>Confirmer</Text>
            <IconMoon name="plus" size={30} color="white" style={{marginLeft: 'auto'}}/>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
const Styles = StyleSheet.create({
  dayTimesContainer: {
    flex: 1,
    backgroundColor: 'purple',
    borderTopRightRadius: 65,
    borderTopLeftRadius: 65,
    padding: 30
  },
  dayTime:{
    marginBottom: 20,
    marginTop: 30
  },
  times: {
    flexDirection: 'row',

  },
  pickerContainer: {
    padding: 10
  },
  pickerContainerText: {
    color: 'white',
    fontSize: 19
  },
  pickerContainerLeft: {
    borderRightWidth: 1,
    borderRightColor: 'whitesmoke'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',

  },
  icon:{
    marginLeft: 'auto'
  },
  iconTextContainer: {
    color: 'white',
    fontSize: 20
  },
  button:{
    backgroundColor: 'black',
    width: 300,
    borderRadius: 20,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 30
  }
});
