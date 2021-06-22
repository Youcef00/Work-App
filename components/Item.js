import React , {Component} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const PAY_BY_HOUR = 7.5;

export default class Item extends Component {

  constructor(props){
    super(props);


    this.handleOnPress = this.handleOnPress.bind(this);

    this.timeRender = this.timeRender.bind();
    this.handleLongPress = this.handleLongPress.bind(this);
    this.calculateDayHours = this.calculateDayHours.bind(this);
    this.calculateTotalHours = this.calculateTotalHours.bind(this);
  }




  handleOnPress(){
    this.props.navigation.navigate('UpdateWeek', {data: this.props.data, navigation: this.props.navigation, id:this.props.data.id});
  }

  timeRender(debut, fin){
    return(

      <Text style={styles.time}>
        {debut != null ? debut + ' -- ' + fin  : ''}
        </Text>

  );
  }

  handleLongPress(){
    Alert.alert(
      "Supprimer la semaine",
      "Voulez vous supprimer cette semaine ?",
      [
        {
          text: "Annuler",
          onPress: () => console.log("annuler"),
          style: "cancel"
        },
        {
          text: "Supprimer",
          onPress: () => {this.props.handleDeleteWeek(this.props.data.id); this.props.handleWeeksUpdate(); }
        }
      ]
    );
  }



  calculateDayHours(day){
    const today = new Date(day.date);

    const todayCopy = new Date(today);
    const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);

    let total = 0;

    if (day.matin.debut > day.matin.fin && (day.matin.debut !== '' && day.matin.fin !== '')){
          today.setHours(day.matin.debut.split(':')[0]);
          today.setMinutes(day.matin.debut.split(':')[1]);
          nextDay.setHours(day.matin.fin.split(':')[0]);
          nextDay.setMinutes(day.matin.fin.split(':')[1]);

          total += ((nextDay - today)/3600000) ;

    }
    else if((day.matin.debut !== '' && day.matin.fin !== '')) {
      today.setHours(day.matin.debut.split(':')[0]);
      today.setMinutes(day.matin.debut.split(':')[1]);
      todayCopy.setHours(day.matin.fin.split(':')[0]);
      todayCopy.setMinutes(day.matin.fin.split(':')[1]);
      total += ((todayCopy - today)/3600000) ;

    }

    if (day.soir.debut > day.soir.fin && (day.soir.debut !== '' && day.soir.fin !== '')){
          today.setHours(day.soir.debut.split(':')[0]);
          today.setMinutes(day.soir.debut.split(':')[1]);
          nextDay.setHours(day.soir.fin.split(':')[0]);
          nextDay.setMinutes(day.soir.fin.split(':')[1]);
          total += ((nextDay - today)/3600000) ;
    }
    else if ((day.soir.debut !== '' && day.soir.fin !== '')){
      today.setHours(day.soir.debut.split(':')[0]);
      today.setMinutes(day.soir.debut.split(':')[1]);
      todayCopy.setHours(day.soir.fin.split(':')[0]);
      todayCopy.setMinutes(day.soir.fin.split(':')[1]);
      total += ((todayCopy - today)/3600000) ;
    }

    return total;
  }

  calculateTotalHours(){

      return( this.calculateDayHours(this.props.data.Lundi)
            +this.calculateDayHours(this.props.data.Mardi)
            +this.calculateDayHours(this.props.data.Mercredi)
            +this.calculateDayHours(this.props.data.Jeudi)
            +this.calculateDayHours(this.props.data.Vendredi)
            +this.calculateDayHours(this.props.data.Samedi)
            +this.calculateDayHours(this.props.data.Dimanche));

  }

  render(){
    const totalHours = this.calculateTotalHours().toFixed(2);

    return(
      <TouchableOpacity onLongPress={this.handleLongPress} onPress={this.handleOnPress} style={styles.item}>
        <Text style={styles.title}>{this.props.title}</Text>

        <Table borderStyle={{flex: 1}} >
            <Row data={['Jours',  'Matin', 'Soir']} style={{borderBottomWidth: 2, borderBottomColor: 'black'}} textStyle={{color: 'white', fontWeight: 'bold'}}/>
            <TableWrapper style={{flexDirection: 'row'}}>
                <Col data={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche', 'Heures', 'Paiement']} style={{flex:1,}} textStyle={{textAlign: 'left', fontSize: 16, fontWeight: 'bold', color: 'white', borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 4, paddingRight: 4}} />
                <Rows data={[
                  [this.timeRender(this.props.data.Lundi.matin.debut, this.props.data.Lundi.matin.fin),        this.timeRender(this.props.data.Lundi.soir.debut, this.props.data.Lundi.soir.fin)],
                  [this.timeRender(this.props.data.Mardi.matin.debut, this.props.data.Mardi.matin.fin),        this.timeRender(this.props.data.Mardi.soir.debut, this.props.data.Mardi.soir.fin)],
                  [this.timeRender(this.props.data.Mercredi.matin.debut, this.props.data.Mercredi.matin.fin),  this.timeRender(this.props.data.Mercredi.soir.debut, this.props.data.Mercredi.soir.fin)],
                  [this.timeRender(this.props.data.Jeudi.matin.debut, this.props.data.Jeudi.matin.fin),        this.timeRender(this.props.data.Jeudi.soir.debut, this.props.data.Jeudi.soir.fin)],
                  [this.timeRender(this.props.data.Vendredi.matin.debut, this.props.data.Vendredi.matin.fin),  this.timeRender(this.props.data.Vendredi.soir.debut, this.props.data.Vendredi.soir.fin)],
                  [this.timeRender(this.props.data.Samedi.matin.debut, this.props.data.Samedi.matin.fin),      this.timeRender(this.props.data.Samedi.soir.debut, this.props.data.Samedi.soir.fin)],
                  [this.timeRender(this.props.data.Dimanche.matin.debut, this.props.data.Dimanche.matin.fin),  this.timeRender(this.props.data.Dimanche.soir.debut, this.props.data.Dimanche.soir.fin)],
                  [<Text style={styles.time}>{totalHours}</Text>],
                  [<Text style={styles.time}>{(totalHours*PAY_BY_HOUR).toFixed(2)} €</Text>]
                ]}
        flexArr= {[1, 1]} style={{height: 27, borderBottomWidth: 1, borderBottomColor: 'black'}}
        />
            </TableWrapper>
        </Table>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#a0752c',
    padding: 20,
    borderRadius: 15,
    margin: 15,
    height: 350,
  },
  title: {
    fontSize: 32,
    color: 'white'
  },
  time:{
    color: 'white',
    fontWeight: 'bold'
  },
});
