import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Doctor = ({doctor}) => {
    const {name, email, image} = doctor;

    return (
        <View>
            <Text>{name}</Text>
            <Text>{email}</Text>
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
