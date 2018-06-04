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
        position: null
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

  onClick = (phone) => {
    
    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);
    var text = "Lat: " + this.state.latitude + " Long: " + this.state.longitude + " Time: " + timestamp;

    var SmsAndroid = require('react-native-sms-android');
    SmsAndroid.sms(
      phone, // phone number to send sms to
      text, // sms body
      'sendDirect', // sendDirect or sendIndirect
      (err, message) => {
        if (err){
          console.log("error");
        } else {
          console.log(message); // callback message
        }
      }
    );

    //CHANGE LOCALHOST
    fetch('http://131.179.42.187:5500/api/newLoc', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'uniqueid': "Sahil",
        'timestamp': timestamp,
        'latitude': this.state.latitude,
        'longitude': this.state.longitude //CHECK THIS FOR FINAL IMPLEMENTATION
      })
    }).then(function(response) {
      console.log(response.json())
    }).catch(function(err) {
      console.log(err);
    })
  }

render() {
  const { phone } = this.props.navigation.state.params;

  return (
    <View style={styles.container}>
        <TouchableOpacity
          	style={styles.startbutton} 
            onPress={ () => this.onClick(phone)}>
          	<Text style={styles.starttext}>START</Text>
        </TouchableOpacity>
         <TouchableOpacity
            style={styles.stopbutton} 
            onPress={ () => this.onClick(phone)}>
            <Text style={styles.stoptext}>STOP</Text>
        </TouchableOpacity>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
    );
  }
}


const styles = StyleSheet.create({
  startbutton: {
    borderWidth:1,
   borderColor:'rgba(0,0,0,0.2)',
   alignItems:'center',
   justifyContent:'center',
   width:400,
   height:300,
   backgroundColor: '#4286F4',
   flex: 1
  },
  stopbutton: {
    borderWidth:1,
   borderColor:'rgba(0,0,0,0.2)',
   alignItems:'center',
   justifyContent:'center',
   width:400,
   height:300,
   backgroundColor: '#93BAF9',
   flex: 1
  },
  starttext: {
  	fontSize: 70,
  	color: 'white'
  },
  stoptext: {
    fontSize: 70,
    color: 'white'
  },
  container: {
  	flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});