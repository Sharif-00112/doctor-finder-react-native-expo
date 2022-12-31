import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Doctors from './Components/Doctors';
import Home from './Components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello REACT NATIVE!</Text>
      <StatusBar style="auto" />
      <Home></Home>
      <Doctors></Doctors>
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
