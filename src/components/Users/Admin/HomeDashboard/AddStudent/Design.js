import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import firestore from '@react-native-firebase/firestore';
import { UserSignUp } from "../../../../../firebase/firestore/UserSignUp";

const AddStudentDesign = ({ navigation, departmentlist }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [branch, setBranch] = useState("");
    const [gender, setGender] = useState("Female");
    const [enrollment, setEnroll] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [departmentKey, setDepartmentKey] = useState('');

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: strings.onBoarding.add_student, //Set Header Title
        });
    }, [navigation]);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.activityView}>
                        <View style={styles.activityHeadingView}>
                            <Text style={styles.activityHeadingText}>{strings.onBoarding.add_student}</Text>
                            <Icon style={styles.activityHeadingIcon} name='arrow-down-drop-circle-outline' type='MaterialIcons' color='#517fa4' />
                        </View>
                        <View style={styles.activityListView}>
                            <View>
                                <TextInput
                                    autoCompleteType="name"
                                    label={strings.textInput.first_name}
                                    mode="outlined"
                                    placeholder={strings.textInput.first_name}
                                    blurOnSubmit={true}
                                    autoCapitalize='words'
                                    // autoFocus
                                    error={false}
                                    value={firstName}
                                    onChangeText={(firstName) => { setFirstName(firstName) }}
                                    left={<TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={true}>Error Message</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View>
                                <TextInput
                                    autoCompleteType="name"
                                    label={strings.textInput.last_name}
                                    mode="outlined"
                                    placeholder={strings.textInput.last_name}
                                    blurOnSubmit={true}
                                    autoCapitalize='words'
                                    // autoFocus
                                    error={false}
                                    value={lastName}
                                    onChangeText={(lastName) => { setLastName(lastName) }}
                                    left={<TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={true}>Error Message</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View style={styles.textInputFieldRadio}>
                                <View style={styles.textInputFieldRadioButtonView}>
                                    <RadioButton style={styles.textInputFieldRadioButton}
                                        value="first"
                                        status={gender === 'Male' ? 'checked' : 'unchecked'}
                                        color="black"
                                        uncheckedColor="gray"
                                        onPress={() => { setGender('Male') }}
                                    //    setgender('Male')
                                    // setGender('Male')
                                    />
                                    <Text style={styles.textInputFieldRadioButtonText}>Male</Text>
                                </View>
                                <View style={styles.textInputFieldRadioButtonView}>
                                    <RadioButton style={styles.textInputFieldRadioButton}
                                        value="second"
                                        status={gender === 'Female' ? 'checked' : 'unchecked'}
                                        color="black"
                                        uncheckedColor="gray"
                                        onPress={() => { setGender('Female') }}
                                    // setGender('Female')
                                    />
                                    <Text style={styles.textInputFieldRadioButtonText}>Female</Text>
                                </View>
                            </View>
                            <View>
                                <TextInput
                                    autoCompleteType="email"
                                    label={strings.textInput.email}
                                    mode="outlined"
                                    placeholder={strings.textInput.email}
                                    blurOnSubmit={true}
                                    autoCapitalize='none'
                                    keyboardType="email-address"
                                    // autoFocus
                                    error={false}
                                    value={email}
                                    onChangeText={(email) => { setEmail(email) }}
                                    left={<TextInput.Icon name="email" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={true}>Error</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View>
                                <TextInput
                                    autoCompleteType="tel"
                                    label={strings.textInput.contact}
                                    mode="outlined"
                                    placeholder={strings.textInput.contact}
                                    blurOnSubmit={true}
                                    autoCapitalize='none'
                                    keyboardType="phone-pad"
                                    // autoFocus
                                    error={false}
                                    value={phoneno}
                                    onChangeText={(phoneno) => { setphoneno(phoneno) }}
                                    // text.replace(/[^0-9]/g, '')
                                    left={<TextInput.Icon name="phone" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={true}>Error</HelperText>
                            </View>
                            <View style={styles.spacing15}></View>
                            <View>
                                <View style={styles.pickerView}>
                                    <Picker
                                        style={{}}
                                        selectedValue={selectedDepartment}
                                        onValueChange={(itemValue, itemIndex) => { setDepartmentKey(itemValue); departmentName(itemValue) }} >
                                        <Picker.Item label="--- Select Branch ---" value="" />
                                        {departmentlist.map((item, index) => {
                                            return (
                                                <Picker.Item label={item.department} value={item.key} key={item.key} />
                                            )
                                        })}
                                    </Picker>
                                </View>
                                <HelperText type="error" visible={true}>Error</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View>
                                <TextInput
                                    autoCompleteType="username"
                                    label={strings.textInput.enrollment}
                                    mode="outlined"
                                    placeholder={strings.textInput.enrollment}
                                    blurOnSubmit={true}
                                    autoCapitalize='characters'
                                    error={false}
                                    value={enrollment}
                                    onChangeText={(enrollment) => { setEnroll(enrollment) }}
                                    left={<TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={true}>Error Message</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View>
                                <TextInput
                                    autoCompleteType="password"
                                    label={strings.textInput.password}
                                    mode="outlined"
                                    label={strings.textInput.password}
                                    blurOnSubmit={true}
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    textContentType={'password'}
                                    multiline={false}
                                    //value={pass}
                                    //error={isErrorPass}
                                    value={password}
                                    onChangeText={(password) => { setPassword(password) }}
                                    left={<TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                                    right={<TextInput.Icon name="eye" color={"darkblue"} disabled={false} onPress={() => { }} />}
                                />
                                <HelperText type="error" visible={true}>Error Message</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View>
                                <TextInput
                                    autoCompleteType="password"
                                    label={strings.textInput.confirm_password}
                                    mode="outlined"
                                    placeholder={strings.textInput.confirm_password}
                                    blurOnSubmit={true}
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    textContentType={'password'}
                                    multiline={false}
                                    value={confirmPassword}
                                    //error={isErrorPassConf}
                                    onTextInput={() => { }}
                                    onChangeText={(confirmPassword) => { setConfirmPassword(confirmPassword) }}
                                    left={<TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                                    right={<TextInput.Icon name="eye" color={"darkblue"} disabled={false} onPress={() => { }} />}
                                />
                                <HelperText type="error" visible={true}>Error Message</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View style={styles.submitButton} >
                                <Button
                                    style={styles.loginButton}
                                    mode="contained"
                                    onPress={() => {
                                        UserSignUp(firstName, lastName,
                                            gender, email, password, phoneno, selectedDepartment, enrollment)
                                    }}
                                >
                                    {strings.buttons.create_account}
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );


    function departmentName(userId) {
        firestore()
            .collection('departments')
            .doc(userId)
            .get()
            .then(documentSnapshot => {
                console.log('User exists: ', documentSnapshot.exists);

                if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data());
                    console.log(documentSnapshot.get('department'));
                    setSelectedDepartment(documentSnapshot.get('department'));
                }
            });
    }
}



export default AddStudentDesign;