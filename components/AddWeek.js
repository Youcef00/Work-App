import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Day from './Day.js';
import { TextInputMask } from 'react-native-masked-text';

export default class AddWeek extends Component {
  constructor(props){
    super(props);
    this.today = new Date(Date.now());
    this.state = {
      data: this.props.route.params.data,

      week : {    id: '',
                  title: '',
                  Lundi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}, date: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()-this.today.getDay()+1)},
                  Mardi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}, date: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()-this.today.getDay()+2)},
                  Mercredi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''},date: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()-this.today.getDay()+3)},
                  Jeudi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}, date: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()-this.today.getDay()+4)},
                  Vendredi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}, date: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()-this.today.getDay()+5)},
                  Samedi: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}, date: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()-this.today.getDay()+6)},
                  Dimanche: {matin: {debut: '', fin: ''}, soir:{debut: '', fin: ''}, date: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()-this.today.getDay()+7)},
    }
  }

    this.touchableDay = this.touchableDay.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.handleWeekUpdate = this.handleWeekUpdate.bind(this);
    this.handleDayUpdate = this.handleDayUpdate.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.isValid = this.isValid.bind(this);
    this.stringFormat = this.stringFormat.bind(this);
    }

componentDidMount(){
  let newWeek = this.state.week;
  if (this.state.data.length !== 0){
    newWeek.id = parseInt(this.state.data.reduce((prev, current) => current.id >= prev.id ? current: prev).id)+1+'';
  }
  else{
    newWeek.id = 1;
  }
  newWeek.title = 'Semaine '+newWeek.id;
  this.setState({
    week: newWeek,
  }
);
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
      <TouchableOpacity style={Styles.touchableDay} onPress={() => this.props.route.params.navigation.navigate("AddDay", {data: day, id: this.state.week.id, day: text, navigation: this.props.route.params.navigation, handleUpdate: this.handleDayUpdate})}>
        <Day time={day}  day={text}/>
      </TouchableOpacity>
    );
  }

  isValid(text){
    const regex = new RegExp('([0-2][0-9]|3[0-1])/(0[0-9]|1[0-2])/([0-9]{4})');

    return regex.test(text) && (new Date(text.split('/')[2], parseInt(text.split('/')[1])-1, text.split('/')[0]).getMonth()+1) === parseInt(text.split('/')[1]);
  }


  handleOnChange(formatted, extracted){
    if (this.isValid(formatted)){
      const today = new Date(formatted.split('/')[2], parseInt(formatted.split('/')[1])-1, formatted.split('/')[0]);
      this.setState((prevState) => ({
        week: {
          id: prevState.week.id,
          title: prevState.week.title,
          Lundi:{matin:{debut: prevState.week.Lundi.matin.debut, fin:prevState.week.Lundi.matin.fin }, soir: {debut:prevState.week.Lundi.soir.debut, fin: prevState.week.Lundi.soir.fin}, date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-today.getDay()+1)},
          Mardi:{matin:{debut: prevState.week.Mardi.matin.debut, fin:prevState.week.Mardi.matin.fin }, soir: {debut:prevState.week.Mardi.soir.debut, fin: prevState.week.Mardi.soir.fin},  date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-today.getDay()+2)},
          Mercredi:{matin:{debut: prevState.week.Mercredi.matin.debut, fin:prevState.week.Mercredi.matin.fin }, soir: {debut:prevState.week.Mercredi.soir.debut, fin: prevState.week.Mercredi.soir.fin},  date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-today.getDay()+3)},
          Jeudi:{matin:{debut: prevState.week.Jeudi.matin.debut, fin:prevState.week.Jeudi.matin.fin }, soir: {debut:prevState.week.Jeudi.soir.debut, fin: prevState.week.Jeudi.soir.fin},  date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-today.getDay()+4)},
          Vendredi:{matin:{debut: prevState.week.Vendredi.matin.debut, fin:prevState.week.Vendredi.matin.fin }, soir: {debut:prevState.week.Vendredi.soir.debut, fin: prevState.week.Vendredi.soir.fin},  date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-today.getDay()+5)},
          Samedi:{matin:{debut: prevState.week.Samedi.matin.debut, fin:prevState.week.Samedi.matin.fin }, soir: {debut:prevState.week.Samedi.soir.debut, fin: prevState.week.Samedi.soir.fin},  date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-today.getDay()+6)},
          Dimanche: {matin:{debut: prevState.week.Dimanche.matin.debut, fin:prevState.week.Dimanche.matin.fin }, soir: {debut:prevState.week.Dimanche.soir.debut, fin: prevState.week.Dimanche.soir.fin},  date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-today.getDay()+7)},
        }
      })
      );
      //console.log('handle change state: '+ new Date(today.getFullYear(), today.getMonth(), today.getDate()-today.getDay()+1));
    }
  }

  stringFormat(value){
    if (value < 10){
      return '0'+value;
    }
    else{
      return ''+value;
    }
  }
  render(){

    return(
        <View style={{flex:1, paddingTop: 20, backgroundColor: '#9896a4'}}>
            <View style={{backgroundColor: '#3f3c53'}}>
              <View style={{backgroundColor: '#9896a4', borderBottomRightRadius: 65}}>
                <Image
                  source={require('../assets/images/calendarTr.png')}
                  style={{marginLeft: 25}}
                />
              </View>

            </View>

            <View style={{flex:1}}>

              < View style={Styles.days}>
                <ScrollView showsVerticalScrollIndicator ={false} style={{marginBottom: 0}}>
                <View style= {[Styles.touchableDay, {padding: 20}]}>
                  <Text style={{color: 'white', fontSize: 16,}}>Date debut de semaine: </Text>
                  <TextInputMask
                      type={'custom'}
                      options={{
                        mask: '99/99/9999',

                      }}
                      value={`${this.stringFormat(this.state.week.Lundi.date.getDate())}/${this.stringFormat(this.state.week.Lundi.date.getMonth()+1)}/${this.stringFormat(this.state.week.Lundi.date.getFullYear())}`}
                      style={{borderWidth: 1, borderColor: 'grey', borderRadius: 25, paddingTop: 3, paddingBottom: 3, paddingLeft: 15, marginTop: 8}}
                      onChangeText={this.handleOnChange}
                      placeholder='JJ/MM/AAAA'
                  />
                </View>
                  {this.touchableDay(this.state.week.Lundi, "Lundi")}
                  {this.touchableDay(this.state.week.Mardi, "Mardi")}
                  {this.touchableDay(this.state.week.Mercredi, "Mercredi")}
                  {this.touchableDay(this.state.week.Jeudi, "Jeudi")}
                  {this.touchableDay(this.state.week.Vendredi, "Vendredi")}
                  {this.touchableDay(this.state.week.Samedi, "Samedi")}
                  {this.touchableDay(this.state.week.Dimanche, "Dimanche")}
                </ScrollView>
              </View>
              <View style={{flex: .001}}>
                <TouchableOpacity style={Styles.button} onPress={this.handleOnPress} >
                  <Text style={{color: 'white', fontSize: 25, marginRight: 'auto'}}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    days: {
      backgroundColor: '#3f3c53',
      borderTopLeftRadius: 65,
      padding: 30,
      flex: 1,
      paddingBottom: 60
    },
    touchableDay: {
      backgroundColor: '#9896a4',
      marginBottom: 20,
      borderRadius: 25,
      shadowColor: "#000",

      shadowOffset: {
      	width: 0,
      	height: 5,
        },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,

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
      marginTop: 'auto',
      marginBottom: 20
    }
  }
);
