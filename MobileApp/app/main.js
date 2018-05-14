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
  return (
    <View style={styles.container}>
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