import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';


export const SignupAuth = (email, password) => {
    console.log("EMail + Password" + email + password);
    auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
}



// export function studentVerify(email) {
//     console.log("EMail" + email);
//     firestore()
//         .collection('Students')
//         .where('Email', '==', email)
//         .get()
//         .then(documentSnapshot => {
//             console.log('User exists: ', documentSnapshot.exists);

//             if (documentSnapshot.exists) {
//                 console.log('User data: ', documentSnapshot.data());
//                 console.log(documentSnapshot.get('Email'));

//             }
//         });
// }
