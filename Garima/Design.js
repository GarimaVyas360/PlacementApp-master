import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, ScrollView, ToastAndroid, BackHandler, Alert,
    Image, TouchableOpacity, PermissionsAndroid, Animated, Easing, Dimensions, TouchableNativeFeedback
} from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import firestore from "@react-native-firebase/firestore";

const StudentProfileDashboardDesign = ({ navigation, Key, nav_title }) => {

    const [users, setUsers] = useState([]);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Gender, setGender] = useState('');
    const [Email, setEmail] = useState('');
    const [MobileNo, setMobileNo] = useState('');
    const [Password, setPassword] = useState('');
    const [Department, setDepartment] = useState('');
    const [Enrollment, setEnrollment] = useState('');
    const [key, setKey] = useState('');


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
        });

        firestore()
            .collection('Students')
            .doc(Key)
            .get()
            .then(documentSnapshot => {
                console.log('User exists: ', documentSnapshot.exists);
                const users = [];
                if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data());
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });

                    users.map((item, index) => {
                        console.log(item.FirstName, item.key);
                        setFirstName(item.FirstName);
                        setLastName(item.LastName);
                        setGender(item.Gender);
                        setEmail(item.Email);
                        setMobileNo(item.Phoneno);
                        setPassword(item.Password);
                        setEnrollment(item.Enrollment);
                        setDepartment(item.Department);
                        setKey(item.key);
                    })
                }
            });
    }, []);

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.imageEditView} onPress={() => { }}>
                        <Icon name="image-edit" size={30} color="#fff" style={styles.imageEdit} />
                    </TouchableOpacity>
                    <CardView
                        cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={100}
                        style={styles.cardViewStyle}
                    >
                        <TouchableNativeFeedback
                            style={styles.tinyLogo}>
                            <Image
                                style={styles.tinyImageLogo}
                                source={images.user_dash.admin}
                            />
                        </TouchableNativeFeedback>
                    </CardView>
                </View>
                <View style={styles.baseContainer}>
                    <TouchableOpacity style={styles.textEditViewStyle}
                        onPress={() => {
                            navigation.navigate('StudentProfileEditActivity',
                                { email: Email, department: Department, firstName: FirstName, lastName: LastName, password: Password, enrollment: Enrollment, phoneno: MobileNo, gender: Gender })
                            // console.log("FirstName" + FirstName);
                        }} >
                        <Icon name="account-edit" size={30} color="black" style={styles.textEdit} />
                    </TouchableOpacity>
                    <View style={styles.baseContainerView}>
                        <Text style={styles.detailHeading}>Name</Text>
                        <Text style={styles.detailText}>{FirstName}&nbsp;{LastName}</Text>
                    </View>
                    <Divider style={styles.headingDividerBase}></Divider>
                    <View style={styles.baseContainerView}>
                        <Text style={styles.detailHeading}>Gender</Text>
                        <Text style={styles.detailText}>{Gender}</Text>
                    </View>
                    <Divider style={styles.headingDividerBase}></Divider>
                    <View style={styles.baseContainerView}>
                        <Text style={styles.detailHeading}>Email</Text>
                        <Text style={styles.detailText}>{Email}</Text>
                    </View>
                    <Divider style={styles.headingDividerBaseBottom}></Divider>
                    <View style={styles.baseContainerView}>
                        <Text style={styles.detailHeading}>Department</Text>
                        <Text style={styles.detailText}>{Department}</Text>
                    </View>
                    {/* <Divider style={styles.headingDividerBaseBottom}></Divider>
                </View> */}


                    <Divider style={styles.headingDividerBaseBottom}></Divider>
                </View>
                <View style={styles.footerView}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('StudentProfileChangePasswordActivity', { oldPassword: Password, Key: Key }); console.log("old Password ,Key" + Password, Key); }}>
                        <Button>{strings.buttons.change_password}</Button>
                        <Divider style={styles.headingDividerBase}></Divider>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.mpinView}
                    onPress={() => { navigation.navigate('StudentProfileSetMpinActivity') }}>
                    {/* <Icon name="delete" size={30} color='#Ba020a' style={styles.deleteEdit} /> */}
                    <Text style={styles.mpinEdit}>{strings.buttons.set_mpin}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
export default StudentProfileDashboardDesign;