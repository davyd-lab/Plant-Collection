import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AsyncStorage} from 'react-native';

import AddDetails from './Add';
import Item from './Item';
 

import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";

import AddPlant from './AddPlant';



class Collection extends Component {
	
	
	constructor(props) {
        super(props)

			 this.handler = this.handler.bind(this);

        // Set some state
          componentDidMount = () => AsyncStorage.getItem('myCollection').then((value) => this.setState({ 'collectionState': value }))
    }
	
	
		    handler() {
        console.log("hi there!!!!!");
    }
	

    state = {
      collectionState: []
   }

   componentDidMount = () => AsyncStorage.getItem('myCollection').then((value) => this.setState({ 'collectionState': value }))


componentWillReceiveProps(nextProps) {
  if (nextProps.navigation.state.params.token) {
    AsyncStorage.getItem('myCollection').then((value) => this.setState({ 'collectionState': value }))
  }
}

  componentDidUpdate(prevState) {
    // AsyncStorage.getItem('myCollection')
    // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
    console.log("THIS HAPPENED");
	  //console.log("this props " + this.props.navigation.getParam);
	  
  }
   
   setGenus = (value) => {
      AsyncStorage.setItem('collectionState', value);
      this.setState({ 'collectionState': value });
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
        <Text>Collection Component is here.  {this.state.collectionState} </Text>
      </View>
      )
  }
}



export default Collection; 