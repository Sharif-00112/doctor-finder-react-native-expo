import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Home = () => {
    return (
        <View>
            <Text>Click 'Doctors' to view all the available doctors</Text>
            {/* <Text>This is Home</Text> */}
            <Button
                onPress={ e => alert('Please contact sh.hossain.24@gmail.com')}
                title='Contact'
                color='coral'
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
