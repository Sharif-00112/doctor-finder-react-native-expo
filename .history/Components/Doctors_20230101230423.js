import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, UIScrollView} from 'react-native';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        fetch('https://doctors-portal-372608.et.r.appspot.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <View>
            <Text>Available Doctors: {doctors.length}</Text>
            <br />
            {
                doctors.map(doctor => 
                    <Doctor 
                        key={doctor._id}
                        doctor={doctor}
                    ></Doctor>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default Doctors;
