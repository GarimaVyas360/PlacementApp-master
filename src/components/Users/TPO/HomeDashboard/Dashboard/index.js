import React, { useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import TpoDashboardDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from "../../../../../res/strings";
const TpoDashboardActivity = ({ navigation, nav_title, department, user }) => {
    console.log("department tpo", department);
    useEffect(() => {
        navigation.setOptions({
            title: nav_title, //Set Header Title
            headerRight: () => (
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => { logout() }}>
                        <Icon name="logout" size={30} color="black" style={styles.logoutEdit} />
                    </TouchableOpacity>
                </View>
            ),
            headerLeft: () => { }
        });
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
        <TpoDashboardDesign
            navigation={navigation}
            department={department}
            user={user} />
    );
}
export default TpoDashboardActivity;