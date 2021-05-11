import React, { useEffect } from 'react';
import { View, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import strings from '../../../../../res/strings';
import { styles } from "./styles";
import TpoProfileDashboardDesign from './Design';
import { useState } from 'react';
import firestore from "@react-native-firebase/firestore";

const TpoProfileDashboardActivity = ({ navigation, nav_title, token }) => {
    //  const user = route.params.user;
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        const users = [];
        console.log(token);
        const subscriber = firestore()
            .collection('TPO')
            .doc(token)
            .onSnapshot(documentSnapshot => {
                console.log('User data: ', documentSnapshot.data());
                console.log('User data: ', documentSnapshot.get('FirstName'));

                setFirstName(documentSnapshot.get('FirstName'));
                setLastName(documentSnapshot.get('LastName'));
                setDepartment(documentSnapshot.get('Department'));
                setEmail(documentSnapshot.get('Email'));
                setPassword(documentSnapshot.get('Password'));


            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, [token]);


    return (
        <TpoProfileDashboardDesign
            navigation={navigation}
            nav_title={nav_title}
            list={users}
            FirstName={firstName}
            LastName={lastName}
            Email={email}
            Department={department}
            Password={password}
            Token={token}
        />
    );
}
export default TpoProfileDashboardActivity;