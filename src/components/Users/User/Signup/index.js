import React, { useEffect, useState } from 'react';
import UserSignupDesign from './Design';
import firestore from '@react-native-firebase/firestore';

const UserSignupActivity = ({ navigation }) => {
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
        <UserSignupDesign
            navigation={navigation}
            departmentlist={users} />
    );
}
export default UserSignupActivity;