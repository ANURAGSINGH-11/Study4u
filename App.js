import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './Components/Container.js';
export default function App() {
  return (
    <View>
        <Container/>
      <StatusBar style="auto" />
    </View>
  );
}

