import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AdminChattingDashboardDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import firestore from "@react-native-firebase/firestore";
import strings from "../../../../../res/strings";
const AdminChattingDashboardActivity = ({ navigation, nav_title, user, user_type }) => {
    const [group1, setGroup1] = useState('');
    const [group2, setGroup2] = useState('');
    const [group, setGroup] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setGroup("UserGroup");
        setGroup1("MU_IT_Group");
        setGroup2("MU_Civil_Group");

        const subscriber = firestore()
            .collection('GroupList')
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
                // setUsers(users);
                setUsers(users)
            });
        // Unsubscribe from events when no longer in use
        return () => { subscriber() };


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
    return (
        <AdminChattingDashboardDesign
            navigation={navigation}
            nav_title={nav_title}
            logout={() => logout()}
            group_name1={group1}
            group_name2={group2}
            group_name={group}
            user={user}
            groupList={users}
            user_type={user_type}
        />
    );
}
export default AdminChattingDashboardActivity;