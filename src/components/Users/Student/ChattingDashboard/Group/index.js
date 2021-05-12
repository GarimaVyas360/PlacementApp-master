import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import StudentChattingGroupDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import moment from 'moment';
import strings from "../../../../../res/strings";
import firestore from "@react-native-firebase/firestore";
import { addGroups, addGroupsChats } from '../../../../../firebase/firestore/UserSignUp';

const StudentChattingGroupActivity = ({ route, navigation }) => {
    const [group, setgroup] = useState([]);
    const user = route.params.user;
    const groupName = route.params.group;
    const user_type = route.params.user_type;
    const department = route.params.department;
    var Size;                // group: group_name, department: department, user: user, user_type: user_type
    const [groupSize, setGroupSize] = useState('');
    // const GroupName = route.params.group;
    useEffect(() => {
        console.log("user routee  " + groupName + department);
        // groupChats();
        navigation.setOptions({
            title: route.params.group, //Set Header Title
            headerStyle: {
                backgroundColor: '#075E54',
            },
            headerTintColor: '#fff',
        });
        const subscribe = firestore()
            .collection('UserGroup')
            .doc(department)
            .collection(groupName)
            .orderBy('id', 'asc')
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
                Size = querySnapshot.size;
                // console.log("Size", Size);
                showSize(Size);
            });
        return () => subscribe();


    }, []);

    function showSize(size) {
        Size = size;
        console.log("Total Size", Size);
        setGroupSize(Size);
        return size;
    }
    // const groupChats = () => {
    //     const subscribe = firestore()
    //         .collection('Group1')
    //         //   .orderBy('department', 'asc')
    //         .onSnapshot(querySnapshot => {
    //             const groupChat = [];
    //             console.log('Total users: ', querySnapshot.size);

    //             querySnapshot.forEach(documentSnapshot => {
    //                 console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //                 groupChat.push({
    //                     ...documentSnapshot.data(),
    //                     key: documentSnapshot.id,
    //                 });
    //             });
    //             setgroup(groupChat);
    //             group.map((item, index) => {
    //                 console.log("data saved");
    //             })

    //         });
    //     return () => subscribe();
    //     // Unsubscribe from events w
    // }
    // 

    return (
        <StudentChattingGroupDesign
            navigation={navigation}
            groupChats={group}
            user={user}
            user_type={user_type}
            submitButton={(message) => submitButton(message)}
            validateInput={(text) => { validateInput(text) }} />
    );


    function submitButton(message) {
        // sender, message, date, time //
        var sender = user;
        var date = getCurrentDate().date;
        var time = getCurrentDate().time + " " + getCurrentDate().AMPM;
        if (validateInput(message)) {
            // addGroupsChats(sender, message, date, time, groupSize, groupName);
            addGroups(sender, groupName, message, date, time, groupSize, department);
            console.log("Group Size and Name", groupSize, groupName);
            console.log(sender + "\n" + message + "\n" + date + "\n" + time);
        }
    }
    function getCurrentDate() {
        var date = moment().utcOffset('+05:30').format('DD/MM/YYYY');
        var time = moment().utcOffset('+05:30').format('hh:mm');
        var AMPM = moment().utcOffset('+05:30').format('a');
        AMPM = AMPM == "am" ? "AM" : "PM";
        return {
            date: date,
            time: time,
            AMPM: AMPM,
        }
    }
    function validateInput(text) {
        if (text) {
            return true;
        }
        else {
            return false;
        }
    }
    function onSuccess(status) {
        console.log("allow", status);
        // setuserexist(status);
        // console.log(userexist);
        return status;
    }

    function ChatsSenderVerify(sender) {
        var size;
        firestore()
            .collection('Group1')
            // order by asc and desc order
            .where('Sender', '==', sender)
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                size = querySnapshot.size;
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User exists: ', size);

                    if (documentSnapshot.exists) {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        // return true;
                        setuserName(documentSnapshot.get('FirstName'));
                        console.log("userName" + documentSnapshot.get('FirstName'));
                        onSuccess(true);
                    }
                });
                if (size == 0) {
                    console.log('Total success user: ', querySnapshot.size);
                    onSuccess(false);
                }
            });
    }

}
export default StudentChattingGroupActivity;