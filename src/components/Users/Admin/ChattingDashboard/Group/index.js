import React, { useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AdminChattingGroupDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from "../../../../../res/strings";
const AdminChattingGroupActivity = ({ route, navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            title: route.params.group, //Set Header Title
            headerStyle: {
                backgroundColor: '#075E54',
            },
            headerTintColor: '#fff',
        });
    }, []);
    return (
        <AdminChattingGroupDesign
            navigation={navigation} />
    );
}
export default AdminChattingGroupActivity;