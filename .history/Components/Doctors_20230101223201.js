import React, { useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        fetch('https://doctors-portal-372608.et.r.appspot.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <View>
            This is Doctors: {doctors.length}
        </View>
    );
}

const styles = StyleSheet.create({})

export default Doctors;
