import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AdminChattingGroupDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from "../../../../../res/strings";
import firestore from "@react-native-firebase/firestore";

const AdminChattingGroupActivity = ({ route, navigation }) => {
    const [group, setgroup] = useState([]);

    const GroupName = route.params.group;
    useEffect(() => {
        console.log(GroupName);
        groupChats(GroupName);
        navigation.setOptions({
            title: route.params.group, //Set Header Title
            headerStyle: {
                backgroundColor: '#075E54',
            },
            headerTintColor: '#fff',
        });
    }, []);


    function groupChats(GroupName) {
        const subscribe = firestore()
            .collection(GroupName)
            //   .orderBy('department', 'asc')
            .onSnapshot(querySnapshot => {
                const groupChat = [];
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    groupChat.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setgroup(groupChat);
                group.map((item, index) => {
                    console.log("data saved");
                })

            });
        return () => subscribe();
        // Unsubscribe from events w
    }






    return (
        <AdminChattingGroupDesign
            navigation={navigation}
            groupChats={group} />
    );
}
export default AdminChattingGroupActivity;