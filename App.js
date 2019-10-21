import { Ionicons } from "@expo/vector-icons";
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";
import StatusBarBackground from './StatusBarBackground';
import Nav from './Nav';
import Collection from './Collection';
import AddPlant from './AddPlant';
import AddDetails from './Add';
import Footer from './Footer';

import Parent from './Parent';

import About from "./views/About";


import CustomDrawerNavigator from "./CustomDrawerNavigator";


class HomeScreen extends Component {
	
	    constructor(props) {
        super(props)

			 

        // Set some state
          componentDidMount = () => AsyncStorage.getItem('myCollection').then((value) => this.setState({ 'collectionState': value }))
    }
	




//   constructor(props){
//   super(props);

// };
   static navigationOptions = {
     header: null
  };


  render() {
    return(
    <View style={{flex: 1}}>
        <StatusBarBackground style={{backgroundColor:'#90A9B7'}}/>
        <Nav navigation={this.props.navigation} />
        <ScrollView><Collection navigation={this.props.navigation}  /></ScrollView>
		<ScrollView><Parent /></ScrollView>
		<AddPlant navigation={this.props.navigation}  />
        <Footer />
    </View>
    )
  }

     componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({hello:"All!!- Its a great reactjs tutorial."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   } 
};



///I think this is called a router or a navigator?? Need more research 
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: HomeScreen
    },
    Details: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
           <Ionicons name="ios-person" style={{ color: tintColor }} />
        ),
        drawerLabel: "About"
      },
      screen: About
    }
  },
  {
    navigationOptions: {
      header: null
    }
  },
  {
    contentComponent: CustomDrawerNavigator
  }
);

//my second navigator for page(s) not in drawer
const HomeStack = createStackNavigator({
  Drawer: DrawerNavigator,
  PlantView: {
    screen: AddDetails,
    title: 'Add New Plant'
  }
});

const MainApp = createAppContainer(HomeStack);

export default MainApp;
