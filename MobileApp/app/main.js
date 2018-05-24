import React, { Component } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { 
  AppRegistry, 
  StyleSheet, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

//import GeoLocationExample from './geo.js' 
//uncomment for separate file implementation 

//location
//sending as JSON 
//make new function to connect phone number to function
//add another button

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude: null,
        longitude: null,
        error: null,
        position: null,
    };
  }

    componentDidMount() {
      if (1) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
              position: position,
            });
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
      }
    }

render() {
  const { phone } = this.props.navigation.state.params;
  var SmsAndroid = require('react-native-sms-android');
  SmsAndroid.sms(
    '4089925459', // phone number to send sms to
    'Wassup boiiii', // sms body
    'sendDirect', // sendDirect or sendIndirect
    (err, message) => {
      if (err){
        console.log("error");
      } else {
        console.log(message); // callback message
      }
    }
  );
  
  return (
    <View style={styles.container}>
        <Text>{phone}</Text>
        <TouchableOpacity
          	style={styles.button} >
          	<Text style={styles.text}>!</Text>
        </TouchableOpacity>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    borderWidth:1,
   borderColor:'rgba(0,0,0,0.2)',
   alignItems:'center',
   justifyContent:'center',
   width:200,
   height:200,
   backgroundColor:'red',
   borderRadius:100,
  },
  text: {
  	fontSize: 70,
  	color: 'white'
  },
  container: {
  	flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});