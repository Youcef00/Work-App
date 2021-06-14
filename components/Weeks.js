import React , {Component} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



const Item = ({ title }) => {
//console.log(Object.keys(DATA[0]));
//data={['', ...Object.keys(DATA[0]).slice(2)]}
  return(
    <TouchableOpacity style={[styles.item, {height: 500, width: 350, marginTop: 55, flex: 1}]}>
      <Text style={styles.title}>{title}</Text>
      <Table borderStyle={{borderWidth: 2, borderColor: 'black', flex: 1}} >
          <Row data={['', ...Object.keys(DATA[0].Lundi)]} />
          <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={[...Object.keys(DATA[0]).slice(2), 'Heures totales', 'Paiement']} style={{flex:1}} hightArr={[28, 28]} textStyle={{textAlign: 'center'}} />
              <Rows data={[
                [DATA[0].Lundi.matin, DATA[0].Lundi.soir],
                [DATA[0].Mardi.matin, DATA[0].Mardi.soir],
                [DATA[0].Mercredi.matin, DATA[0].Mercredi.soir],
                [DATA[0].Jeudi.matin, DATA[0].Jeudi.soir],
                [DATA[0].Vendredi.matin, DATA[0].Vendredi.soir],
                [DATA[0].Samedi.matin, DATA[0].Samedi.soir],
                [DATA[0].Dimanche.matin, DATA[0].Dimanche.soir],
                ['20'],
                ['150']
              ]}
      flexArr= {[1, 1]}
      />
          </TableWrapper>
      </Table>
    </TouchableOpacity>

  );
}



export default class Weeks extends Component {
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }
  renderItem( {item} ){

    return (

    <Item title={item.title} />

  );
}
  render(){


    return (
      <SafeAreaView style= {{backgroundColor: 'red', fontSize: 20, flex: 1}}>
      <Text> Weeks </Text>
          <FlatList
            data={DATA}
            renderItem= {this.renderItem}
            keyExtractor= {item => item.id}
            horizontal= {true}

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
