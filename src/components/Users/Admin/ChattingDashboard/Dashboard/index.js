import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AdminChattingDashboardDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from "../../../../../res/strings";
const AdminChattingDashboardActivity = ({ navigation, nav_title, user, user_type }) => {
    const [group1, setGroup1] = useState('');
    const [group2, setGroup2] = useState('');
    const [group, setGroup] = useState('');

    useEffect(() => {
        navigation.setOptions({
            title: nav_title, //Set Header Title
            headerStyle: {
                backgroundColor: '#075E54',
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => { alert("Logout") }}>
                        <Icon name="logout" size={30} color="white" style={styles.logoutEdit} />
                    </TouchableOpacity>
                </View>
            ),
        });
        setGroup("UserGroup");
        setGroup1("MU_IT_Group");
        setGroup2("MU_Civil_Group");
    }, []);
    return (
        <AdminChattingDashboardDesign
            navigation={navigation}
            nav_title={nav_title}
            group_name1={group1}
            group_name2={group2}
            group_name={group}
            user={user}
            user_type={user_type}
        />
    );
}
export default AdminChattingDashboardActivity;