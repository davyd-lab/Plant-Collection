import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createDrawerNavigator, createSwitchNavigator } from "react-navigation";


import { Ionicons } from '@expo/vector-icons';

export default class Nav extends Component {
  constructor(props){
  super(props);

};
   static navigationOptions = {
     header: null
  };
  render() {
    return (
     <View
        style={{
          position: 'relative',
          backgroundColor: '#90A9B7',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          zIndex: 9,
          borderStyle: 'solid',
          borderBottomWidth: 1,
          borderBottomColor: '#666'
        }}>
        <View style={{display: 'flex'}} ><Text>Edit</Text></View>
        <View style={{display: 'flex'}} ><Text>Collection</Text></View>
        <View ><Ionicons style={{
          padding: 5
        }}
      name="md-menu"
      size={32}
      color="black"
       onPress={() => this.props.navigation.toggleDrawer()}
    /></View>
      </View>
    );
  }
}
