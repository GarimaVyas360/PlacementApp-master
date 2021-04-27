import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';


export default CreateUserAuth = (email, password, onSuccess) => {
    console.log(email, password);
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
            onSuccess(true);
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                onSuccess(false);
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                onSuccess(false);
            }

            console.error(error);
        });

}


const Signout = () => {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}
