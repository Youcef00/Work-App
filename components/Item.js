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

      <Text>
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
          onPress: () => this.props.handleDeleteWeek(this.props.data.id),
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
    const totalHours = this.calculateTotalHours();
    return(
      <TouchableOpacity onLongPress={this.handleLongPress} onPress={this.handleOnPress} style={[styles.item, {height: 500, width: 350, marginTop: 55, flex: 1}]}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: 'black', flex: 1}} >
            <Row data={['', 'Matin', 'Soir']} />
            <TableWrapper style={{flexDirection: 'row'}}>
                <Col data={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche', 'Heures totales', 'Paiement']} style={{flex:1}} hightArr={[28, 28]} textStyle={{textAlign: 'center'}} />
                <Rows data={[
                  [this.timeRender(this.props.data.Lundi.matin.debut, this.props.data.Lundi.matin.fin),        this.timeRender(this.props.data.Lundi.soir.debut, this.props.data.Lundi.soir.fin)],
                  [this.timeRender(this.props.data.Mardi.matin.debut, this.props.data.Mardi.matin.fin),        this.timeRender(this.props.data.Mardi.soir.debut, this.props.data.Mardi.soir.fin)],
                  [this.timeRender(this.props.data.Mercredi.matin.debut, this.props.data.Mercredi.matin.fin),  this.timeRender(this.props.data.Mercredi.soir.debut, this.props.data.Mercredi.soir.fin)],
                  [this.timeRender(this.props.data.Jeudi.matin.debut, this.props.data.Jeudi.matin.fin),        this.timeRender(this.props.data.Jeudi.soir.debut, this.props.data.Jeudi.soir.fin)],
                  [this.timeRender(this.props.data.Vendredi.matin.debut, this.props.data.Vendredi.matin.fin),  this.timeRender(this.props.data.Vendredi.soir.debut, this.props.data.Vendredi.soir.fin)],
                  [this.timeRender(this.props.data.Samedi.matin.debut, this.props.data.Samedi.matin.fin),      this.timeRender(this.props.data.Samedi.soir.debut, this.props.data.Samedi.soir.fin)],
                  [this.timeRender(this.props.data.Dimanche.matin.debut, this.props.data.Dimanche.matin.fin),  this.timeRender(this.props.data.Dimanche.soir.debut, this.props.data.Dimanche.soir.fin)],
                  [<Text>{totalHours}</Text>],
                  [<Text>{totalHours*PAY_BY_HOUR}</Text>]
                ]}
        flexArr= {[1, 1]}
        />
            </TableWrapper>
        </Table>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
