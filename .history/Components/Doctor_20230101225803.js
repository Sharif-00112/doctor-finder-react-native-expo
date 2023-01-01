import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Doctor = ({doctor}) => {
    const {name, email, image} = doctor;

    return (
        <View>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Image
                source={{
                    uri: '',
                }}
                style={{ width: 200, height: 200 }}
                />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Doctor;
