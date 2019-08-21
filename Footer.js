import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Footer extends Component {
  render() {
    return(
        <View
        style={{
          backgroundColor: 'hotpink',
          width: '100%',
          height: 50,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 10,
          borderStyle: 'solid',
          borderTopWidth: 1,
          borderTopColor: '#666'
        }}>
        <Text>Footer Component</Text>
      </View>
      )
  }
}

export default Footer; 