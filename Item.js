import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AsyncStorage} from 'react-native';

import AddDetails from './Add';

let item = AsyncStorage.getItem('UID123');

class Item extends Component {

  //   state = {
  //     genus: ''
  //  }

  //  componentDidMount = () => AsyncStorage.getItem('UID123').then((value) => this.setState({ 'genus': value }))

  // componentDidUpdate(prevState) {
  //   AsyncStorage.getItem('UID123')
  //   // Typical usage (don't forget to compare props):
  //   // if (this.props.userID !== prevProps.userID) {
  //   //   this.fetchData(this.props.userID);
  //   // }
  // }
   
  //  setGenus = (value) => {
  //     AsyncStorage.setItem('genus', value);
  //     this.setState({ 'genus': value });
  //  }
  

 
  render() {
    return(
        <View
        style={{
          backgroundColor: '#EFD09E',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
		<Text>Item Component</Text>
        <Text>Item Genus: {this.props.genus}</Text>
        <Text>Item Species: placeholder</Text>
        <Text>Item Img: placeholder</Text>

      </View>
      )
  }
}

export default Item; 