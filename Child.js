import React, { Component } from 'react';
import { AsyncStorage, Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';


class Child extends React.Component {
    render() {
        return (
            <View>
                {/* The button will execute the handler function set by the parent component */}
                <Button onPress={this.props.action} title='press me'/>
            </View>
        )
    }
}
export default Child; 