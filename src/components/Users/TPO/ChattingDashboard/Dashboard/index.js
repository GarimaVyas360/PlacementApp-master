import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import TpoChattingDashboardDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import firestore from "@react-native-firebase/firestore";

import strings from "../../../../../res/strings";
const TpoChattingDashboardActivity = ({ navigation, nav_title, user, user_type, department }) => {
    const [group, setGroup] = useState('');
    var currentUsers, size;

    useEffect(() => {
        navigation.setOptions({
            title: nav_title, //Set Header Title
            headerStyle: {
                backgroundColor: '#075E54',
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => { logout() }}>
                        <Icon name="logout" size={30} color="white" style={styles.logoutEdit} />
                    </TouchableOpacity>
                </View>
            ),
        });
        // setGroup("MU_IT_Group");
        userVerify();
    }, []);

    function logout() {
        Alert.alert("Want to Logout!", "",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
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



    function userVerify() {
        var currentUsers;
        firestore()
            .collection('GroupList')
            // order by asc and desc order
            .where('Department', '==', department)
            // .where('Password', '==', password)
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                size = querySnapshot.size;
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User exists: ', size);

                    if (documentSnapshot.exists) {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        // console.log(" Users Data", documentSnapshot.data().FirstName);

                        currentUsers = documentSnapshot.data().GroupName;
                        // userEmail = documentSnapshot.data().Email;
                        // userPassword = documentSnapshot.data().Password;
                        // FirstName = documentSnapshot.data().FirstName;
                        // LastName = documentSnapshot.data().LastName;
                        // Gender = documentSnapshot.data().Gender;
                        // Department = documentSnapshot.data().Department;
                        // Enrollment = documentSnapshot.data().Enrollment;
                        // Phoneno = documentSnapshot.data().Phoneno;
                        // key = documentSnapshot.id;
                        // setCurrentUser(documentSnapshot.data().FirstName);
                        console.log("currentUser" + currentUsers);
                        // setUsers(currentUsers, userEmail);
                        // onSuccess(true, currentUsers);

                    }
                });
                if (size == 0) {
                    console.log('Total success user: ', querySnapshot.size);
                    // onSuccess(false, currentUsers);

                }

                setGroup(currentUsers);

            });
    }





    return (
        <TpoChattingDashboardDesign
            navigation={navigation}
            nav_title={nav_title}
            group_name={group}
            department={department}
            user={user}
            user_type={user_type}
        />
    );
}
export default TpoChattingDashboardActivity;