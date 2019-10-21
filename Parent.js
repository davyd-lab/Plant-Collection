import React, { Component } from 'react';
import { AsyncStorage, Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';

import Child from './Child';


class Parent extends Component {
	
	
	
	 constructor(props) {
        super(props)

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);

        // Set some state
        this.state = {
            messageShown: false
        };
		 
    }
	

	
	componentDidMount = () => AsyncStorage.getItem('myCollection').then((value) => this.setState({ 'collectionState': value }))

    // This method will be sent to the child component
    handler() {
        this.setState({
            messageShown: true
        });
		console.log('pressed');
		console.log(this.state.messageShown);
		
	
		
		//AsyncStorage.setItem('myCollection', "testinginfile", () => {
		
		getData = async () => {
		  try {
			const value = await AsyncStorage.getItem('myCollection')
			if(value !== null) {
			  // value previously stored
				console.log("value: " + value);
				this.setState({ 'collectionState': value });
			}
		  } catch(e) {
			// error reading value
		  }
		}
		getData();
		
}


    // Render the child component and set the action property with the handler as value
    render() {
        return (
			        <View
        style={{
          backgroundColor: '#A0B09E',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
			
			
			<Text>{this.state.collectionState}</Text>
			<Child action={this.handler} />
			</View>
			)
		
    }

}

export default Parent; 