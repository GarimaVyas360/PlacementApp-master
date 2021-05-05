import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import TpoChattingDashboardDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";

import strings from "../../../../../res/strings";
const TpoChattingDashboardActivity = ({ navigation, nav_title, user, user_type }) => {
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
        setGroup("Group...");
    }, []);
    return (
        <TpoChattingDashboardDesign
            navigation={navigation}
            nav_title={nav_title}
            group_name={group}
            user={user}
            user_type={user_type}
        />
    );
}
export default TpoChattingDashboardActivity;