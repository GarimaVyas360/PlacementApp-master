import React, { useEffect, useState } from 'react';
import strings from '../../../../../res/strings';
import StudentProfileDashboardDesign from './Design';
import firestore from "@react-native-firebase/firestore";

const StudentProfileDashboardActivity = ({ navigation, Key, nav_title }) => {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('');
    const [enrollment, setEnrollment] = useState('');
    // const [key, setKey] = useState('');

    // useEffect(() => {
    //     var size;
    //     firestore()
    //         .collection('Students')
    //         // order by asc and desc order
    //         .where('Email', '==', Email)
    //         .get()
    //         .then(querySnapshot => {
    //             console.log('Total users: ', querySnapshot.size);
    //             size = querySnapshot.size;
    //             const users = [];
    //             querySnapshot.forEach(documentSnapshot => {
    //                 console.log('User exists: ', size);

    //                 if (documentSnapshot.exists) {
    //                     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //                     console.log(" Users Data", documentSnapshot.data().FirstName);
    //                     users.push({
    //                         ...documentSnapshot.data(),
    //                         key: documentSnapshot.id,
    //                     });

    //                     users.map((item, index) => {
    //                         console.log(item.FirstName, item.key);
    //                         setFirstName(item.FirstName);
    //                         setLastName(item.LastName);
    //                         setGender(item.Gender);
    //                         setEmail(item.Email);
    //                         setMobileNo(item.Phoneno);
    //                         setPassword(item.Password);
    //                         setEnrollment(item.Enrollment);
    //                         setDepartment(item.Department);
    //                         setKey(item.key);
    //                     })
    //                 }
    //             });
    //             if (size == 0) {
    //                 console.log('Total success user: ', querySnapshot.size);

    //             }
    //         });

    //     // Unsubscribe from events when no longer in use

    // }, []);


    // useEffect(() => {
    //     firestore()
    //         .collection('Students')
    //         .doc(Key)
    //         .get()
    //         .then(documentSnapshot => {
    //             console.log('User exists: ', documentSnapshot.exists);
    //             const users = [];
    //             if (documentSnapshot.exists) {
    //                 console.log('User data: ', documentSnapshot.data());
    //                 users.push({
    //                     ...documentSnapshot.data(),
    //                     key: documentSnapshot.id,
    //                 });

    //                 users.map((item, index) => {
    //                     console.log(item.FirstName, item.key);
    //                     setFirstName(item.FirstName);
    //                     setLastName(item.LastName);
    //                     setGender(item.Gender);
    //                     setEmail(item.Email);
    //                     setMobileNo(item.Phoneno);
    //                     setPassword(item.Password);
    //                     setEnrollment(item.Enrollment);
    //                     setDepartment(item.Department);
    //                     setKey(item.key);
    //                 })
    //             }
    //         });
    // })

    return (
        <StudentProfileDashboardDesign
            navigation={navigation}
            nav_title={nav_title}
            list={users}
            // FirstName={firstName}
            // LastName={lastName}
            // Email={email}
            // Gender={gender}
            // Password={password}
            // Department={department}
            // Enrollment={enrollment}
            // Phoneno={mobileNo}
            Key={Key} />
    );
}
export default StudentProfileDashboardActivity;