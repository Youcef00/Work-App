import React , {Component} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Animated } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Item from './Item.js';
import Caraousel from 'react-native-snap-carousel';

export default class Weeks extends Component {
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.scrollView = null;
    this.state = {
      selected: '',
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }

  handleUpdate(){
    this.setState({
      selected: '',
    })
  }

  handlePress(week){
    this.setState({
      selected: week
    });
  }



  renderItem( {item, index} ){
    //<Item navigation={this.props.navigation} title={item.title} data={item} handleDeleteWeek={this.props.handleDeleteWeek}/>
    const lundi = new Date(item.Lundi.date);
    const dimanche = new Date(item.Dimanche.date);
    const stringFormat = (value) => {
      if (value < 10){
        return '0'+value;
      }
      else{
        return ''+value;
      }
    }
    return (
      <TouchableOpacity onPress={() => this.handlePress(item)} style={Styles.bubble}>
        <Text style={Styles.bubbleText}>Semaine {item.id}</Text>
        <Text style={Styles.bubbleText}>du: {stringFormat(lundi.getDate())}/{stringFormat(lundi.getMonth())}/{lundi.getFullYear()}</Text>
        <Text style={Styles.bubbleText}>au: {stringFormat(dimanche.getDate())}/{stringFormat(dimanche.getMonth())}/{dimanche.getFullYear()} </Text>
      </TouchableOpacity>

  );
}
  render(){
    const Week = () => {
        if (this.state.selected !== ''){
          return (
            <Item navigation={this.props.navigation} title={this.state.selected.title} data={this.state.selected} handleDeleteWeek={this.props.handleDeleteWeek} handleWeeksUpdate={this.handleUpdate} />
          );
        }
        else {
          return (<View style={{backgroundColor: '#2e2117',
          padding: 20,
          borderRadius: 15, alignItems: 'center',
          margin: 15, justifyContent: 'center',
          height: 350,}}><Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>Pas de semaine sélectionnée</Text></View>);
        }

    }

    return (
      <SafeAreaView style= {{fontSize: 20, flex: 1}}>
      <View style={Styles.list}>
            <FlatList
              renderItem={this.renderItem}

              data={this.props.DATA}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              />
        </View>
        <View style={{flex: 4}}>
        <Week />

        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  list: {
    height: 110,
},
  title: {
    fontSize: 32,
  },
  bubble: {
    margin: 15,
    padding: 7,
    borderWidth: 2,
    borderColor: 'black',
    height: 80,
    backgroundColor: '#a0752c',
    borderRadius: 10,

  },
  week: {

  },
  bubbleText:{
    color: 'white',
    fontWeight: 'bold'
  }
});
