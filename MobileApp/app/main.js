import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

export default class Main extends Component {
render() {

  const { phone } = this.props.navigation.state.params;
  var SmsAndroid = require('react-native-sms-android');
  SmsAndroid.sms(
    '4083180907', // phone number to send sms to
    'This is the sms text', // sms body
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