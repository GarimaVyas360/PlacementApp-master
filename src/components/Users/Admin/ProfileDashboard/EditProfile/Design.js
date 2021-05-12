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

const AdminProfileEditDesign = ({ navigation, submitEditeProfileAdmin, validateFirstName, validateLastName, validateEmail
    , validateMobile, validateBranch, validateWhatsAppNumber, FirstName, LastName, Email, Gender, Mobile, Enrollment, Department }) => {

    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [errorFirstNameText, setErrorFirstNameText] = useState('');
    const [isErrorFirstName, setIsErrorFirstName] = useState(false);

    const [lastName, setLastName] = useState('');
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorLastNameText, setErrorLastNameText] = useState('');
    const [isErrorLastName, setIsErrorLastName] = useState(false);

    const [gender, setGender] = useState('Male');

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorEmailText, setErrorEmailText] = useState('');
    const [isErrorEmail, setIsErrorEmail] = useState(false);

    const [mobile, setMobile] = useState('');
    const [errorMobile, setErrorMobile] = useState(false);
    const [errorMobileText, setErrorMobileText] = useState('');
    const [isErrorMobile, setIsErrorMobile] = useState(false);

    const [whatsAppNumber, setWhatsAppNumber] = useState('');
    const [errorWhatsAppNumber, setErrorWhatsAppNumber] = useState(false);
    const [errorWhatsAppNumberText, setErrorWhatsAppNumberText] = useState('');
    const [isErrorWhatsAppNumber, setIsErrorWhatsAppNumber] = useState(false);
    const [adminKey, setAdminKey] = useState('');

    useEffect(() => {
        const subscriber = firestore()
            .collection('Admin')
            .onSnapshot(querySnapshot => {
                const users = [];
                console.log('Total users: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setUsers(users);
                users.map((item, index) => {
                    console.log(item.FirstName, item.key);
                    setFirstName(item.FirstName);
                    setLastName(item.LastName);
                    setGender(item.Gender);
                    setEmail(item.Email);
                    setMobile(item.Mobile);
                    setWhatsAppNumber(item.WhatsAppNumber);
                    // setAdminKey(item.adminKey);

                    // setEnrollment(item.Enrollment);
                    // setSelectedDepartment(item.Department);

                })

                // setUsers(users)
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber()
    }, []);





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
                                source={images.user_dash.admin}
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
                                validateLastName(LastName);
                                checkLastName(LastName);
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
                                setEmail(email.replace(/[\s]/g, '').toLowerCase());
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

                    <View style={styles.spacing5}></View>
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
                    </View>
                    <View style={styles.spacing5}></View>
                    <View style={styles.submitButton} >
                        <Button
                            style={styles.loginButton}
                            mode="contained"
                            onPress={() => {
                                submitEditeProfileAdmin(firstName, lastName, email, mobile, whatsAppNumber);
                                validateFirstName(firstName);
                                checkFirstName(firstName);
                                validateLastName(lastName);
                                validateEmail(email);
                                validateMobile(mobile);
                                validateWhatsAppNumber(whatsAppNumber);
                                checkLastName(lastName);
                                checkEmail(email);
                                checkMobile(mobile);
                                //  checkWhatsAppNumber(whatsAppNumber);
                                // checkBranch(branch);

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

}

export default AdminProfileEditDesign;