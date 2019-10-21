import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { createStore } from 'redux';
import { createStackNavigator } from "react-navigation";
import AddDetails from './Add';

function reducer(state, action) {
  console.log('reducer', state, action);
  return state;
}


const store = createStore(reducer);

class AddPlant extends Component {

	 constructor(props) {
        super(props)

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);
		 
    }
	
	
	handler() {
		
		console.log("hi hi");
	};



  render() {
    return(
     <View style={styles.circleWrap}>
       <TouchableHighlight onPress={() => this.props.navigation.navigate('PlantView')} >
          <View style={styles.circle}>
            <View style={styles.horizontal}></View>
            <View style={styles.vertical}></View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

function whatsup(){

}

//my second navigator for page(s) not in drawer
const HomeStack = createStackNavigator({
  PlantView: {
    screen: AddDetails,
    title: 'Add New Plant'
  }
});

// const AddPlantNavigator = createSwitchNavigator(
// {
//   AddPlantPage: AddPlant,
// });

const styles = StyleSheet.create({
  circleWrap:{
    width: "auto",
    height: "auto",
    right: "5%",
    bottom: "12%",
    zIndex: 9,
    position: "absolute"
  },
  circle: {
    borderRadius: 50,
    width: 75,
    height: 75,
    backgroundColor: "rgb(44,108,128)",
    position: "relative"
  },
  vertical: {
    width: "20%",
    height: "70%",
    left: "40%",
    top: "15%",
    position: "absolute",
    backgroundColor: "#FFF"
  },
  horizontal:{
    width: "70%",
    height: "20%",
    left: "15%",
    top: "40%",
    position: "absolute",
    backgroundColor: "#FFF"
  }
});


export default AddPlant; 