import React, { useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AdminChattingDashboardDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from "../../../../../res/strings";
const AdminChattingDashboardActivity = ({ navigation, nav_title }) => {
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
    }, []);
    return (
        <AdminChattingDashboardDesign
            navigation={navigation}
            nav_title={nav_title} />
    );
}
export default AdminChattingDashboardActivity;