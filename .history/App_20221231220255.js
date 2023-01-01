import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Doctors from './Components/Doctors';
import Home from './Components/Home';
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello SHARIF!</Text>
      <Text>REACT NATIVE!</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
