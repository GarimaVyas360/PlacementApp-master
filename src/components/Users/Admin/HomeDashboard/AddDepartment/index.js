import React, { useEffect, useState } from 'react';
import AddDepartmentDesign from './Design';
import prompt from "react-native-prompt-android";
import firestore from "@react-native-firebase/firestore";

const AddDepartmentActivity = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const departmentlist = [];

    useEffect(() => {
        const subscriber = firestore()
            .collection('departments')
            .orderBy('department', 'asc')
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
                    console.log(item.department, item.key);
                })

            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);




    return (
        <AddDepartmentDesign
            navigation={navigation}
            list={users}
            validateDepartment={(department) => { validateDepartment(department) }}
        />
    );


    function validateDepartment(department) {
        if (!department) {
            return (
                setError = 'true',
                setErrorText = "Enter the Department"
            );
        }
    }
}
export default AddDepartmentActivity;