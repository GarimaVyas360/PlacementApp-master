import React, { useEffect, useState } from 'react';
import strings from '../../../../../res/strings';
import AdminProfileEditDesign from './Design';
import firestore from "@react-native-firebase/firestore";

const AdminProfileEditActivity = ({ navigation, nav_title }) => {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [departments, setDepartmentList] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');

    useEffect(() => {
        list();
        const subscriber = firestore()
            .collection('Admin')
            // .orderBy('department', 'asc')
            .onSnapshot(querySnapshot => {
                const users = [];
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setUsers(users);
                users.map((item, index) => {
                    console.log(item.FirstName, item.key);
                    setFirstName(item.FirstName);
                    setLastName(item.LastName);
                    setGender(item.Gender);
                    setEmail(item.Email);
                    setMobileNo(item.Mobile);
                    setEnrollment(item.Enrollment);
                    setSelectedDepartment(item.Department);

                })

                // setUsers(users)
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber()
    }, []);


    const list = () => {
        const subscribe = firestore()
            .collection('departments')
            .orderBy('department', 'asc')
            .onSnapshot(querySnapshot => {
                const department = [];
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    department.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setDepartmentList(department);
                departments.map((item, index) => {
                    console.log("data saved");
                })

            });
        return () => subscribe();
        // Unsubscribe from events when no longer in use
    }



    return (
        <AdminProfileEditDesign
            navigation={navigation}
            nav_title={nav_title}
            list={users}
            FirstName={firstName}
            LastName={lastName}
            Email={email}
            Gender={gender}
            Mobile={mobileNo}
            Enrollment={enrollment}
            Department={selectedDepartment}
            list={departments} />
    );
}
export default AdminProfileEditActivity;