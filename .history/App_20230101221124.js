import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Doctors from './Components/Doctors';
import Home from './Components/Home';
import { NativeRouter, Route, Link, Routes } from "react-router-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello SHARIF!</Text> */}
      {/* <Text>REACT-NATIVE!</Text> */}
      <StatusBar style="auto" />
      
      <NativeRouter>
        {/* <Link to='/'><Text>Home</Text></Link> */}
        <Link to='/home'><Text>Home</Text></Link>
        <Link to='/doctors'><Text>Doctors</Text></Link>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/doctors' element={<Doctors></Doctors>}></Route>
        </Routes>
      </NativeRouter>
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
