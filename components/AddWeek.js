import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet, ScrollView} from 'react-native';
import Day from './Day.js';

export default class AddWeek extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.route.params.data,
      week : {    id: '',
                  title: '',
                  Lundi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}},
                  Mardi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}},
                  Mercredi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}},
                  Jeudi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}},
                  Vendredi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}},
                  Samedi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}},
                  Dimanche: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}},
    }
  }

    this.touchableDay = this.touchableDay.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.handleWeekUpdate = this.handleWeekUpdate.bind(this);
    this.handleDayUpdate = this.handleDayUpdate.bind(this);
    }

componentDidMount(){
  let newWeek = this.state.week;
  newWeek.id = parseInt(this.state.data.reduce((prev, current) => current.id >= prev.id ? current: prev).id)+1+'';
  newWeek.title = 'Week '+newWeek.id;
  this.setState({
    week: newWeek,
  }
);
console.log(this.state.week.id);
}
  handleDayUpdate(dayName, newDate){
    let newWeek = this.state.week;
    newWeek[dayName] = newDate;
    this.setState({
      week: newWeek,
    });
  }
  handleWeekUpdate(day, newDayData){
    let newData = this.state.week;
    newData[day] = newDayData;
    this.setState({
      week: newData
    });
  }

  handleOnPress(){
    this.props.addWeek(this.state.week);
    this.props.route.params.navigation.goBack();
  }

  touchableDay(day, text){

    return(
      <TouchableOpacity onPress={() => this.props.route.params.navigation.navigate("AddDay", {data: day, id: this.state.week.id, day: text, navigation: this.props.route.params.navigation, handleUpdate: this.handleDayUpdate})}>
        <Day time={day}  day={text}/>
      </TouchableOpacity>
    );
  }

  render(){

    return(
        <View style={{flex:1, paddingVertical: 20}}>
            <Text> Add Week </Text>
            <ScrollView >
              {this.touchableDay(this.state.week.Lundi, "Lundi")}
              {this.touchableDay(this.state.week.Mardi, "Mardi")}
              {this.touchableDay(this.state.week.Mercredi, "Mercredi")}
              {this.touchableDay(this.state.week.Jeudi, "Jeudi")}
              {this.touchableDay(this.state.week.Vendredi, "Vendredi")}
              {this.touchableDay(this.state.week.Samedi, "Samedi")}
              {this.touchableDay(this.state.week.Dimanche, "Dimanche")}
            </ScrollView>
            <Button title="Confirm" onPress={this.handleOnPress} />

        </View>
    );
  }
}
const Styles = StyleSheet.create(
  {
    dayStandard: {
      borderRightWidth: 5,
      borderStyle: 'solid',
      width: 70,
    },
    day: {
      borderRightColor: 'cyan',
    },
    night: {
      borderRightColor: 'purple',
    },
  }
);
