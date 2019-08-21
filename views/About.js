import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Nav from '../Nav';
import StatusBarBackground from '../StatusBarBackground';

export default class About extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarBackground style={{backgroundColor:'#90A9B7'}}/>
        <Nav navigation={this.props.navigation} />
       <Text>App by David E.</Text>
      </View>
    );
  }
}