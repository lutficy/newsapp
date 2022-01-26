import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

