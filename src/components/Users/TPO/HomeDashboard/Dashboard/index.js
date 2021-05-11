import React, { useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import TpoDashboardDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from "../../../../../res/strings";
const TpoDashboardActivity = ({ navigation, nav_title, department }) => {
    console.log("department tpo", department);
    useEffect(() => {
        navigation.setOptions({
            title: nav_title, //Set Header Title
            headerRight: () => (
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => { navigation.replace("UserDashboardActivity") }}>
                        <Icon name="logout" size={30} color="black" style={styles.logoutEdit} />
                    </TouchableOpacity>
                </View>
            ),
            headerLeft: () => { }
        });
    }, []);
    return (
        <TpoDashboardDesign
            navigation={navigation}
            department={department} />
    );
}
export default TpoDashboardActivity;