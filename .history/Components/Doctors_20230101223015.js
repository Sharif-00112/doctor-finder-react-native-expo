import React, { useEffect, useState } from 'react';
import {UIView, StyleSheet} from 'react-native';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        fetch('https://doctors-portal-372608.et.r.appspot.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <UIView>
            This is Doctors: {doctors.length}
        </UIView>
    );
}

const styles = StyleSheet.create({})

export default Doctors;
