import React, { useEffect, useState } from 'react';
import strings from '../../../../../res/strings';
import StudentProfileDashboardDesign from './Design';
import firestore from "@react-native-firebase/firestore";

const StudentProfileDashboardActivity = ({ navigation, nav_title, keyid }) => {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');


    // useEffect(() => {

    //     const subscriber = firestore()
    //         .collection('Admin')
    //         // .orderBy('department', 'asc')
    //         .onSnapshot(querySnapshot => {
    //             const users = [];
    //             console.log('Total users: ', querySnapshot.size);

    //             querySnapshot.forEach(documentSnapshot => {
    //                 console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //                 users.push({
    //                     ...documentSnapshot.data(),
    //                     key: documentSnapshot.id,
    //                 });
    //             });
    //             setUsers(users);
    //             users.map((item, index) => {
    //                 console.log(item.FirstName, item.key);
    //                 setFirstName(item.FirstName);
    //                 setLastName(item.LastName);
    //                 setGender(item.Gender);
    //                 setEmail(item.Email);
    //                 setPassword(item.Password)
    //             })

    //             // setUsers(users)
    //         });
    //     // Unsubscribe from events when no longer in use
    //     return () => subscriber()
    // }, []);



    useEffect(() => {
        const users = [];
        console.log(keyid);
        const subscriber = firestore()
            .collection('Students')
            .doc(keyid)
            .onSnapshot(documentSnapshot => {
                console.log('User data: ', documentSnapshot.data());
                console.log('User data: ', documentSnapshot.get('FirstName'));

                setFirstName(documentSnapshot.get('FirstName'));
                setLastName(documentSnapshot.get('LastName'));
                setGender(documentSnapshot.get('Gender'));
                setEmail(documentSnapshot.get('Email'));
                setPassword(documentSnapshot.get('Password'));


            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, [keyid]);





    return (
        <StudentProfileDashboardDesign
            navigation={navigation}
            nav_title={nav_title}
            list={users}
            FirstName={firstName}
            LastName={lastName}
            Email={email}
            Gender={gender}
            Password={password}
            keyid={keyid} />
    );
}
export default StudentProfileDashboardActivity;