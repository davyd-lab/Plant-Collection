import React, { Component } from 'react';
import { AsyncStorage, Text, View, TextInput, StyleSheet, Button, Alert} from 'react-native';


let UID123_object = {
  Genus: 'Chris',
  traits: {Genus: 'brown', Species: 'brown'},
};
// You only need to define what will be added or updated
let UID123_delta = {
  traits: {Genus: 'Beallaa', Species: 'Pacific Pastel'},
};

AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
  AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
    AsyncStorage.getItem('UID123', (err, result) => {
      console.log(result);
    });
  });
});


class AddDetails extends Component {


   componentDidMount = () => AsyncStorage.getItem('items').then((value) => this.setState({ 'itmes': value }))
   
   setName = (value) => {
      AsyncStorage.setItem('items', value);
      this.setState({ 'items': value });
   }

  constructor (props) {
    super(props)
    this.state = {
      number: 20
    }

    this.setValue = this.setValue.bind(this)
    this.verify = this.verify.bind(this)
  }

  setValue (event) {
    this.setState({ number: event.nativeEvent.text })
  }

  verify () {
    const { number } = this.state
    Alert.alert('verify', number)
  }


   render() {
      return (
         <View style = {styles.container}>

           <View style = {[styles.containerInner, styles.oddRow]}>
              <Text style={styles.label}>Genus:</Text>
              <TextInput style = {styles.textInput} onChange={this.setValue} autoCapitalize = 'none'
            />
            </View>

           <View style = {[styles.containerInner, styles.evenRow]}>
              <Text style={styles.label}>Species:</Text>
              <TextInput style = {styles.textInput} autoCapitalize = 'none'
            />
            </View>


           <View style = {[styles.containerInner, styles.oddRow]}>
              <Text style={styles.label}>Cultivar:</Text>
              <TextInput style = {styles.textInput} autoCapitalize = 'none'
            />
            </View>

          <View style = {[styles.containerInner, styles.evenRow]}>
              <Text style={styles.label}>Purchase Date</Text>
              <TextInput style = {styles.textInput} autoCapitalize = 'none'
            />
            </View>

              <Button onPress={this.verify} title='Verify' />


         </View>
      )
   }
}
export default AddDetails

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 6
   },
   textInput: {
     width: '40%'
   },
   label: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center'
   },
   oddRow:{
      backgroundColor: '#b7dfb8'
   },
   evenRow:{
      backgroundColor: '#dbefdc'
   },
   containerInner: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   label: {
      width: '50%',
   },
   textInput: {
      width: '50%',
      height: 50,
   }
})