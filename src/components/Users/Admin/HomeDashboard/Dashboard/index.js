import React, {useEffect} from 'react';
import { View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AdminDashboardDesign from './Design';
import strings from "../../../../../res/strings";
const AdminDashboardActivity = ({navigation,nav_title}) => {
    return(
        <AdminDashboardDesign 
            navigation={navigation} 
            nav_title={nav_title} 
            logout={()=>logout()}/>
    );
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
}
export default AdminDashboardActivity;