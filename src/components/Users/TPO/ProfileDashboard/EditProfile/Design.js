import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, ScrollView, ToastAndroid, BackHandler, Alert,
    Image, TouchableOpacity, PermissionsAndroid, Animated, Easing, Dimensions, TouchableNativeFeedback
} from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider, RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import dimensions from '../../../../../res/dimensions';
import firestore from "@react-native-firebase/firestore";

const TpoProfileEditDesign = ({ navigation, Token, submitEditeProfileTpo, list, validateFirstName, validateLastName, validateEmail
    , validateMobile, validateBranch, validateWhatsAppNumber }) => {


    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [errorFirstNameText, setErrorFirstNameText] = useState('');
    const [isErrorFirstName, setIsErrorFirstName] = useState(false);

    const [lastName, setLastName] = useState('');
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorLastNameText, setErrorLastNameText] = useState('');
    const [isErrorLastName, setIsErrorLastName] = useState(false);

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorEmailText, setErrorEmailText] = useState('');
    const [isErrorEmail, setIsErrorEmail] = useState(false);

    const [branch, setBranch] = useState('');
    const [errorBranch, setErrorBranch] = useState(false);
    const [errorBranchText, setErrorBranchText] = useState('');
    const [isErrorBranch, setIsErrorBranch] = useState(false);

    const [mobile, setMobile] = useState('');
    const [errorMobile, setErrorMobile] = useState(false);
    const [errorMobileText, setErrorMobileText] = useState('');
    const [isErrorMobile, setIsErrorMobile] = useState(false);

    const [whatsAppNumber, setWhatsAppNumber] = useState('');
    const [errorWhatsAppNumber, setErrorWhatsAppNumber] = useState(false);
    const [errorWhatsAppNumberText, setErrorWhatsAppNumberText] = useState('');
    const [isErrorWhatsAppNumber, setIsErrorWhatsAppNumber] = useState(false);
    const [tpoKey, setTpoKey] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [departmentKey, setDepartmentKey] = useState('');

    useEffect(() => {
        const users = [];
        console.log(Token);
        const subscriber = firestore()
            .collection('TPO')
            .doc(Token)
            .onSnapshot(documentSnapshot => {
                console.log('User data: ', documentSnapshot.data());
                console.log('User data: ', documentSnapshot.get('FirstName'));

                setFirstName(documentSnapshot.get('FirstName'));
                setLastName(documentSnapshot.get('LastName'));
                // setGender(documentSnapshot.get('Gender'));
                setBranch(documentSnapshot.get('Department'));
                setEmail(documentSnapshot.get('Email'));
                setMobile(documentSnapshot.get('Mobileno'));
                // setSelectedDepartment(documentSnapshot.get('Department'));


            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, [Token]);





    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    {/* <TouchableOpacity style={styles.updateView}>
                      <Icon name="check" size={30} color="#fff" style={styles.imageEdit} 
                          onPress={ () => {alert("Update Profile") } }/>
                    </TouchableOpacity> */}
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
                                source={images.user_dash.tpo}
                            />
                        </TouchableNativeFeedback>
                    </CardView>
                </View>
                <View style={styles.baseContainer}>
                    <View>
                        <TextInput
                            autoCompleteType="name"
                            label={strings.textInput.first_name}
                            mode="outlined"
                            placeholder={strings.textInput.first_name}
                            blurOnSubmit={true}
                            autoCapitalize='words'
                            // autoFocus
                            error={isErrorFirstName}
                            value={firstName}
                            onChangeText={(firstName) => {
                                setFirstName(firstName);
                                validateFirstName(firstName);
                                checkFirstName(firstName);
                            }}
                            selectionColor={dimensions.color.select_color}
                            left={<TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={errorFirstName}>{errorFirstNameText}</HelperText>
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
                            error={isErrorLastName}
                            value={lastName}
                            onChangeText={(lastName) => {
                                setLastName(lastName);
                                validateLastName(lastName);
                                checkLastName(lastName);
                            }}
                            selectionColor={dimensions.color.select_color}
                            left={<TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={errorLastName}>{errorLastNameText}</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
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
                            error={isErrorEmail}
                            value={email}
                            onChangeText={(email) => {
                                setEmail(email);
                                validateEmail(email);
                                checkEmail(email);
                            }}
                            selectionColor={dimensions.color.select_color}
                            left={<TextInput.Icon name="email" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={errorEmail}>{errorEmailText}</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
                    <View>
                        <View style={styles.pickerView}>
                            <Picker
                                style={{}}
                                error={isErrorBranch}
                                selectedValue={branch}
                                onValueChange={(itemValue, itemIndex) => {
                                    setBranch(itemValue);
                                    validateBranch(itemValue);
                                    checkBranch(itemValue);
                                    // departmentName(itemValue);
                                }}>
                                <Picker.Item label="--- Select Branch ---" value="" />
                                {list.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.department} value={item.department} key={item.key} />
                                    )
                                })}
                            </Picker>
                        </View>
                        <HelperText type="error" visible={errorBranch}>{errorBranchText}</HelperText>
                    </View>
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
                            error={isErrorMobile}
                            value={mobile}
                            onChangeText={(mobile) => {
                                setMobile(mobile.replace(/[^0-9]/g, ''));
                                validateMobile(mobile);
                                checkMobile(mobile)
                            }}
                            selectionColor={dimensions.color.select_color}
                            // text.replace(/[^0-9]/g, '')
                            left={<TextInput.Icon name="phone" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={errorMobile}>{errorMobileText}</HelperText>
                    </View>
                    {/* <View style={styles.spacing5}></View>
                    <View>
                        <TextInput
                            autoCompleteType="username"
                            label={strings.textInput.whatsapp_number}
                            mode="outlined"
                            placeholder={strings.textInput.whatsapp_number}
                            blurOnSubmit={true}
                            autoCapitalize='characters'
                            // autoFocus
                            error={isErrorWhatsAppNumber}
                            value={whatsAppNumber}
                            onChangeText={(whatsAppNumber) => {
                                setWhatsAppNumber(whatsAppNumber.replace(/[^0-9]/g, ''));
                                validateWhatsAppNumber(whatsAppNumber);
                                checkWhatsAppNumber(whatsAppNumber);
                            }}
                            selectionColor={dimensions.color.select_color}
                            left={<TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={errorWhatsAppNumber}>{errorWhatsAppNumberText}</HelperText>
                    </View> */}
                    <View style={styles.spacing5}></View>
                    <View style={styles.submitButton} >
                        <Button
                            style={styles.loginButton}
                            mode="contained"
                            onPress={() => {
                                submitEditeProfileTpo(firstName, lastName, branch, email, mobile);
                                validateFirstName(firstName);
                                checkFirstName(firstName);
                                validateLastName(lastName);
                                validateEmail(email);
                                validateBranch(branch)
                                validateMobile(mobile);
                                validateWhatsAppNumber(whatsAppNumber);
                                checkLastName(lastName);
                                checkEmail(email);
                                checkMobile(mobile);
                                checkBranch(branch);
                                checkWhatsAppNumber(whatsAppNumber);
                            }}
                        >
                            {strings.buttons.update_profile}
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
    function checkFirstName(firstName) {
        setErrorFirstName(validateFirstName(firstName).errorFirstName);
        setErrorFirstNameText(validateFirstName(firstName).errorFirstNameText);
        setIsErrorFirstName(validateFirstName(firstName).isErrorFirstName);
    }
    function checkLastName(lastName) {
        setErrorLastName(validateLastName(lastName).errorLastName);
        setErrorLastNameText(validateLastName(lastName).errorLastNameText);
        setIsErrorLastName(validateLastName(lastName).isErrorLastName);
    }
    function checkEmail(email) {
        setErrorEmail(validateEmail(email).errorEmail);
        setErrorEmailText(validateEmail(email).errorEmailText);
        setIsErrorEmail(validateEmail(email).isErrorEmail);
    }
    function checkBranch(branch) {
        setErrorBranch(validateBranch(branch).errorBranch);
        setErrorBranchText(validateBranch(branch).errorBranchText);
        setIsErrorBranch(validateBranch(branch).isErrorBranch);
    }
    function checkMobile(mobile) {
        setErrorMobile(validateMobile(mobile).errorMobile);
        setErrorMobileText(validateMobile(mobile).errorMobileText);
        setIsErrorMobile(validateMobile(mobile).isErrorMobile);
    }
    function checkWhatsAppNumber(whatsAppNumber) {
        setErrorWhatsAppNumber(validateWhatsAppNumber(whatsAppNumber).errorWhatsAppNumber);
        setErrorWhatsAppNumberText(validateWhatsAppNumber(whatsAppNumber).errorWhatsAppNumberText);
        setIsErrorWhatsAppNumber(validateWhatsAppNumber(whatsAppNumber).isErrorWhatsAppNumber);
    }

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
export default TpoProfileEditDesign;