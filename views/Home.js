import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBarBackground from '../StatusBarBackground';
import Nav from '../Nav';
import Collection from '../Collection';
import AddPlant from '../AddPlant';
import AddDetails from '../Add';
import Footer from '../Footer';

export default class HomeView extends Component {
  render() {
    return(
    <View>
        <StatusBarBackground style={{backgroundColor:'#90A9B7'}}/>
        <Nav navigation={this.props.navigation} />
        <Collection />
        <AddPlant />
        <Footer />
    </View>
    )
  }
};
