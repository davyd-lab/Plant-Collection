import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AsyncStorage} from 'react-native';

import AddDetails from './Add';
import Item from './Item';



class Collection extends Component {

    state = {
      collectionState: []
   }

   componentDidMount = () => AsyncStorage.getItem('myCollection').then((value) => this.setState({ 'collectionState': value }))

  componentDidUpdate(prevState) {
    // AsyncStorage.getItem('myCollection')
    // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
    console.log("THIS HAPPENED");
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
        <Text>Collection Component is here.  {this.state.collectionState}</Text>
        <Item genus={this.state.collectionState}/>
      </View>
      )
  }
}

export default Collection; 