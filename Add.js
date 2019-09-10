import React, { Component } from 'react';
import { AsyncStorage, Text, View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";


// let UID123_object = {
//   Genus: 'Chris',
//   traits: {Genus: 'brown', Species: 'brown'},
// };
// // You only need to define what will be added or updated
// let UID123_delta = {
//   traits: {Genus: 'Beallaa', Species: 'Pacific Pastel'},
// };

// AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
//   AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
//     AsyncStorage.getItem('UID123', (err, result) => {
//       console.log(result);
//     });
//   });
// });


class AddDetails extends Component {


   // componentDidMount = () => AsyncStorage.getItem('items').then((value) => this.setState({ 'items': value }))
   
   // setName = (value) => {
   //    AsyncStorage.setItem('items', value);
   //    this.setState({ 'items': value });
   // }

  constructor (props) {
    super(props)
    this.state = {
      genus: '',
      species: '',
      cultivar: '',
      purchaseDate: ''
    }

    this.setGenus = this.setGenus.bind(this)
    this.setSpecies = this.setSpecies.bind(this)
    this.setCultivar = this.setCultivar.bind(this)
    this.setPurchaseDate = this.setPurchaseDate.bind(this)
    this.verifySubmit = this.verifySubmit.bind(this)
  }

  setGenus (event) {
    this.setState({ 
      genus: event.nativeEvent.text
     })
  }

  setSpecies (event) {
    this.setState({ 
      species: event.nativeEvent.text
     })
  }

  setCultivar (event) {
    this.setState({ 
      cultivar: event.nativeEvent.text
     })
  }

  setPurchaseDate (event) {
    this.setState({ 
      purchaseDate: event.nativeEvent.text
     })
  }

  verifySubmit () {
    //runs when you click submit button
    //needs to save data from the inputs
    //get data from inputs and store it in object within asyncStorage
    const { genus, species, cultivar, purchaseDate } = this.state
    // Alert.alert('verifySubmit', genus + species + cultivar + purchaseDate )

    // let UID123_object = {
    //   genus: 'Chris',
    //   species: 'brown',
    //   cultivar: '12',
    //   purchaseDate: 'qwer'
    // };
    // // You only need to define what will be added or updated
    // let UID123_delta = {
      
    // };
    console.log(this.state);
    AsyncStorage.setItem('myCollection', JSON.stringify(this.state), () => {
      // AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
        AsyncStorage.getItem('myCollection', (err, result) => {
          Alert.alert('verifySubmit', result );
        });
      // });
    });
    const { navigate } = this.props.navigation;
    navigate('Home');

  }


   render() {
      return (
         <View style = {styles.container}>

           <View style = {[styles.containerInner, styles.oddRow]}>
              <Text style={styles.label}>Genus:</Text>
              <TextInput style = {styles.textInput} onChange={this.setGenus} autoCapitalize = 'none'
            />
            </View>

           <View style = {[styles.containerInner, styles.evenRow]}>
              <Text style={styles.label}>Species:</Text>
              <TextInput style = {styles.textInput} onChange={this.setSpecies} autoCapitalize = 'none'
            />
            </View>


           <View style = {[styles.containerInner, styles.oddRow]}>
              <Text style={styles.label}>Cultivar:</Text>
              <TextInput style = {styles.textInput} onChange={this.setCultivar} autoCapitalize = 'none'
            />
            </View>

          <View style = {[styles.containerInner, styles.evenRow]}>
              <Text style={styles.label}>Purchase Date:</Text>
              <TextInput style = {styles.textInput} onChange={this.setPurchaseDate} autoCapitalize = 'none'
            />
            </View>

              <Button onPress={this.verifySubmit} title='Save Plant' />


         </View>
      )
   }
}

export default AddDetails;



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