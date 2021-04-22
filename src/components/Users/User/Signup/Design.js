import React from 'react';
import { View, Image, ScrollView, } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider, RadioButton, } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./styles";
import strings from '../../../../res/strings';
import images from '../../../../res/images';
import { useState } from 'react/cjs/react.development';
import CreateUserAuth from "../../../../firebase/CreateUser";
import { UserSignUp } from '../../../../firebase/firestore/UserSignUp';
import firestore from '@react-native-firebase/firestore';

const UserSignupDesign = ({ navigation, departmentlist }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [branch, setBranch] = useState("");
    const [gender, setGender] = useState("Female");
    const [enrollment, setEnroll] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [departmentKey, setDepartmentKey] = useState('');

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.headingText}>{strings.users.welcome_signup}</Text>
                </View>
                <View style={styles.loginView}>
                    <View style={styles.cardView}>
                        <View style={styles.cardIcon}>
                            <Image source={images.onboarding.user_admin}
                                style={styles.cardImage} />
                        </View>
                        <ScrollView contentContainerStyle={styles.scrollView}>
                            <View style={styles.spacing15}></View>
                            {/* <Text style={styles.label}>Personal Detail</Text> */}
                            <View>
                                <TextInput
                                    autoCompleteType="name"
                                    label={strings.textInput.first_name}
                                    mode="outlined"
                                    placeholder={strings.textInput.first_name}
                                    blurOnSubmit={true}
                                    autoCapitalize='words'
                                    // autoFocus
                                    error={true}
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
                            <View>
                                <TextInput
                                    label={strings.textInput.password}
                                    placeholder={strings.textInput.password}
                                    textContentType={'password'}
                                    secureTextEntry={true}
                                    mode="outlined"
                                    value={password}
                                    onChangeText={(password) => { { password.replace(/[^0-9]/g, ''), setPassword(password) } }}
                                    left={<TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                                    right={<TextInput.Icon name="eye" color={"darkblue"} disabled={false} onPress={() => { }} />}
                                />
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
                                    // autoFocus
                                    error={false}
                                    value={enrollment}
                                    onChangeText={(enrollment) => { setEnroll(enrollment) }}
                                    left={<TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={true}>Error Message</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View style={styles.terms}>
                                <CheckBox
                                    value={false}
                                    onValueChange={false}
                                />
                                <Text>I read agree to&nbsp;</Text>
                                <Text style={styles.termsText} >Terms &amp; Conditions.</Text>
                                {/* onTouchStart={ () => navigation.navigate('TermsConditionActivity') } */}
                            </View>
                            <View style={styles.spacing25}></View>
                            <View style={styles.submitButton} >
                                <Button
                                    style={styles.loginButton}
                                    icon="login"
                                    mode="contained"
                                    onPress={() => { UserSignUp(firstName, lastName, gender, email, password, phoneno, selectedDepartment, enrollment) }}
                                >
                                    SIGNUP
                                </Button>
                            </View>
                            <View style={styles.newAcc}>
                                <View style={styles.spacing15}></View>
                                <View style={styles.loginPage}>
                                    <Text style={styles.loginPageTextLink}>Already have an account, </Text>
                                    <Text style={styles.loginPageTextLink}>Login!</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerView}>{strings.footer.powered_by}</Text>
                <View style={styles.logoContainer}>
                    <Image source={images.college.logo_square}
                        style={styles.logoContent} />
                </View>
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
export default UserSignupDesign;