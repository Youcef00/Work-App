import React , {Component} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Animated } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Item from './Item.js';


export default class Weeks extends Component {
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.scrollView = null;
    this.state={
      scrollX : React.createRef(new Animated.Value(0)),
    };
  }
  renderItem( {item} ){

    return (

    <Item navigation={this.props.navigation} title={item.title} data={item} handleDeleteWeek={this.props.handleDeleteWeek}/>

  );
}
  render(){


    return (
      <SafeAreaView style= {{backgroundColor: 'red', fontSize: 20, flex: 1}}>
      <Text> Weeks </Text>
          <Animated.FlatList
            data={this.props.DATA}
            renderItem= {this.renderItem}
            keyExtractor= {item => item.id}
            horizontal= {true}
            ref={ref => {this.scrollView = ref}}
            onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
            snapToInterval={380}

            
          />
      </SafeAreaView>
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
