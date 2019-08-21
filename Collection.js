import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AsyncStorage} from 'react-native';





class Collection extends Component {

    state = {
      'name': ''
   }
   componentDidMount = () => AsyncStorage.getItem('UID123').then((value) => this.setState({ 'name': value }))
   
   setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   }


 
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
        <Text>Collection Component is here.  {this.state.name}</Text>
      </View>
      )
  }
}

export default Collection; 