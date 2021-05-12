import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import strings from '../../../../../res/strings';
import AdminProfileDashboardDesign from './Design';
import firestore from "@react-native-firebase/firestore";

const AdminProfileDashboardActivity = ({ navigation, nav_title }) => {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

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
                    setPassword(item.Password)
                })

                // setUsers(users)
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber()
    }, []);
    function logout() {
        Alert.alert("Want to Logout!", "",
            [
                {
                    text: "Cancel",
                    onPress: () => {  },
                    style: "cancel"
                },
                {

                },
                {
                    text: "Logout!",
                    onPress: () => {
                        navigation.replace("UserDashboardActivity")
                    },
                    style: "destructive"
                }
            ],
            { cancelable: false }
        );
    }
    return (
        <AdminProfileDashboardDesign
            navigation={navigation}
            nav_title={nav_title}
            logout={()=>logout()}
            list={users}
            FirstName={firstName}
            LastName={lastName}
            Email={email}
            Gender={gender}
            Password={password} />
    );
}
export default AdminProfileDashboardActivity;