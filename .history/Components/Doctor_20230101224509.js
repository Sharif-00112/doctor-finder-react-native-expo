import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Doctor = ({doctor}) => {
    const {name, email, image} = doctor;

    return (
        <View>
            <Text>{name}</Text>
            <Text>{email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Doctor;
