import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button, 
  Alert
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import UserPage from './userinfo.js'
import ContactsPage from './contactinfo.js'

const Navigation = StackNavigator({
  Home: {
    screen: UserPage,
  },
  Second: {
    screen: ContactsPage,
  },
})

export default Navigation;




