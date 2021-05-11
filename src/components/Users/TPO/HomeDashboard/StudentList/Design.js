import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity, FlatList, Linking } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import firestore from "@react-native-firebase/firestore";
import { deleteStudents, suspendStudentList } from '../../../../../firebase/firestore/UserSignUp';

const TpoStudentListDesign = ({ navigation, StudentData, departmentList }) => {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [departmentKey, setDepartmentKey] = useState('');
    var dataList = StudentData.slice();
    var emptyList = [];
    const [user, setusers] = useState(dataList);
    const [suspendedList, setSuspendedList] = useState([]);

    useEffect(() => {
        if (selectedDepartment == "") {
            setusers(StudentData);
        }

    })



    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: strings.onBoarding.students, //Set Header Title
        });
    }, [navigation]);

    const renderItem = ({ item }) => {
        return (
            // <TouchableOpacity style={styles.item}>
            //     <Text style={styles.title}>{item.title}</Text>
            // </TouchableOpacity>
            <View style={styles.listArea}>
                <View style={styles.listData}>
                    <Text style={styles.listDataName}>{item.FirstName + " " + item.LastName}</Text>
                    <View style={styles.listDataEmailView}>
                        <Icon style={styles.activityHeadingIcon} name='email' type='MaterialIcons' color='gray' />
                        <Text onPress={() => { Linking.openURL('mailto:' + item.Email); }} style={styles.listDataEmail}>{item.Email}</Text>
                    </View>
                    <View style={styles.listDataContactView}>
                        <Icon style={styles.activityHeadingIcon} name='phone' type='MaterialIcons' color='gray' />
                        <Text onPress={() => { Linking.openURL('tel:' + item.Phoneno); }} style={styles.listDataContact}>{item.Phoneno}</Text>
                    </View>
                </View>
                <View style={styles.listAction}>
                    <Button
                        style={styles.listActionButton}
                        mode="contained"
                        labelStyle={{ fontSize: 10 }}
                        onPress={() => {
                            console.log("btn click" + item.key);
                            suspendStudentList(item.FirstName, item.LastName, item.Email, item.Phoneno, item.Department, item.Password, item.key);
                        }}
                    >
                        {strings.buttons.suspend}
                    </Button>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.activityView}>
                    <View style={styles.spacing15}>
                        <Picker
                            style={{}}
                            selectedValue={selectedDepartment}
                            onValueChange={(itemValue, itemIndex) => {
                                // checkBranch(itemValue);
                                // setDepartmentKey(itemValue);
                                // departmentName(itemValue);
                                setSelectedDepartment(itemValue);
                                filterList(itemValue);
                                // setModalVisible(true)
                            }} >

                            <Picker.Item label="--- All Departments  ---" value="" />
                            {departmentList.map((item, index) => {
                                return (
                                    <Picker.Item label={item.department} value={item.department} key={item} />
                                )
                            })}
                        </Picker>
                        <Divider style={{ height: 1, backgroundColor: 'lightgray', }}></Divider>
                    </View>
                    <View style={styles.emptyListArea} >
                        {user == "" || user == null ? <Text style={styles.emptyTextArea}>Record not found</Text> : []}
                    </View>
                    <View style={styles.listView}>
                        <FlatList
                            data={user}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => item.key}
                        />
                    </View>
                </View>
            </View>
        </View>
    );




    function filterList(selectedDepartment) {
        var size, filterList = [];
        firestore()
            .collection('Students')
            // order by asc and desc order
            .where('Department', '==', selectedDepartment)
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                size = querySnapshot.size;
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User exists: ', size);

                    if (documentSnapshot.exists) {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        // var dataList = documentSnapshot.data();
                        // filterList = dataList.slice();
                        //    filterList.push(documentSnapshot.data());
                        filterList.push({
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                        });
                        dataList = filterList.slice();
                        setusers(filterList);
                        user.map((item, index) => {
                            console.log("item :--" + item.FirstName);
                        })
                    }
                });
                if (size == 0) {
                    console.log('Total success user: ', querySnapshot.size);
                    setusers(emptyList);
                    // onSuccess(false);
                }
            });
    }

}
export default TpoStudentListDesign;