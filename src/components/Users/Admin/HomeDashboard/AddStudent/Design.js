import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import dimensions from '../../../../../res/dimensions';
import { addTPO } from '../../../../../firebase/firestore/UserSignUp';
import firestore from '@react-native-firebase/firestore';

const AddStudentDesign = ({ navigation, departmentlist, submitAccount, validateFirstName, validateLastName, validateEmail,
    validateMobile, validateEnrollment, validateBranch, validatePassword, validatePassConf, validatePasswordChecker, formClear
    , changePassIcon, changePassConfIcon, keyboardHide }) => {

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

    const [branch, setBranch] = useState('');
    const [errorBranch, setErrorBranch] = useState(false);
    const [errorBranchText, setErrorBranchText] = useState('');
    const [isErrorBranch, setIsErrorBranch] = useState(false);

    const [enrollment, setEnrollment] = useState('');
    const [errorEnrollment, setErrorEnrollment] = useState(false);
    const [errorEnrollmentText, setErrorEnrollmentText] = useState('');
    const [isErrorEnrollment, setIsErrorEnrollment] = useState(false);

    const [password, setPassword] = useState('');
    const [errorPass, setErrorPass] = useState(false);
    const [errorPassText, setErrorPassText] = useState('');
    const [isErrorPass, setIsErrorPass] = useState(false);

    const [passConf, setPassConf] = useState('');
    const [errorPassConf, setErrorPassConf] = useState(false);
    const [errorPassConfText, setErrorPassConfText] = useState('');
    const [isErrorPassConf, setIsErrorPassConf] = useState(false);

    const [passHide, setPassHide] = useState(true);
    const [passIcon, setPassIcon] = useState('eye');

    const [passConfHide, setPassConfHide] = useState(true);
    const [passConfIcon, setPassConfIcon] = useState('eye');

    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [departmentKey, setDepartmentKey] = useState('');

    return (
        <View style={styles.mainContainer} onPress={() => keyboardHide()}>
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
                            <View style={styles.textInputFieldRadio}>
                                <View style={styles.textInputFieldRadioButtonView}>
                                    <RadioButton style={styles.textInputFieldRadioButton}
                                        value="Male"
                                        status={gender === 'Male' ? 'checked' : 'unchecked'}
                                        color="black"
                                        uncheckedColor="gray"
                                        onPress={() => { setGender('Male') }}
                                    />
                                    <Text style={styles.textInputFieldRadioButtonText}>Male</Text>
                                </View>
                                <View style={styles.textInputFieldRadioButtonView}>
                                    <RadioButton style={styles.textInputFieldRadioButton}
                                        value="Female"
                                        status={gender === 'Female' ? 'checked' : 'unchecked'}
                                        color="black"
                                        uncheckedColor="gray"
                                        onPress={() => { setGender('Female') }}
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
                                    maxLength={10}
                                    onChangeText={(mobile) => {
                                        setMobile(mobile.replace(/[^0-9]/g, ''));
                                        validateMobile(mobile);
                                        checkMobile(mobile);
                                    }}
                                    selectionColor={dimensions.color.select_color}
                                    left={<TextInput.Icon name="phone" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={errorMobile}>{errorMobileText}</HelperText>
                            </View>
                            <View style={styles.spacing15}></View>
                            <View>
                                <View style={styles.pickerView}>
                                    <Picker
                                        style={{}}
                                        error={isErrorBranch}
                                        //     selectedValue={branch}
                                        //     onValueChange={(itemValue, itemIndex) => {
                                        //        setBranch(itemValue);
                                        //        validateBranch(itemValue);
                                        //        checkBranch(itemValue);
                                        //    } }>
                                        //     <Picker.Item label="--- Select Branch ---" value="" />
                                        //     <Picker.Item label="Ankush" value="A" />
                                        //     <Picker.Item label="Shefali" value="S" />
                                        //     <Picker.Item label="Garima" value="G" />

                                        selectedValue={branch}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setBranch(itemValue);
                                            validateBranch(itemValue);
                                            checkBranch(itemValue);
                                            setDepartmentKey(itemValue);
                                            departmentName(itemValue);
                                        }}>
                                        <Picker.Item label="--- Select Branch ---" value="" />
                                        {departmentlist.map((item, index) => {
                                            return (
                                                <Picker.Item label={item.department} value={item.key} key={item.key} />
                                            )
                                        })}
                                    </Picker>
                                </View>
                                <HelperText type="error" visible={errorBranch}>{errorBranchText}</HelperText>
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
                                    error={isErrorEnrollment}
                                    value={enrollment}
                                    onChangeText={(enrollment) => {
                                        setEnrollment(enrollment.replace(/[\s]/g, ''));
                                        validateEnrollment(enrollment);
                                        checkEnrollment(enrollment);
                                    }}
                                    selectionColor={dimensions.color.select_color}
                                    left={<TextInput.Icon name="identifier" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={errorEnrollment}>{errorEnrollmentText}</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View>
                                <TextInput
                                    autoCompleteType="password"
                                    label={strings.textInput.password}
                                    mode="outlined"
                                    label={strings.textInput.password}
                                    blurOnSubmit={true}
                                    secureTextEntry={passHide}
                                    autoCorrect={false}
                                    textContentType={'password'}
                                    multiline={false}
                                    value={password}
                                    error={isErrorPass}
                                    onChangeText={(password) => {
                                        setPassword(password.replace(/[\s]/g, ''));
                                        validatePassword(password);
                                        checkPassword(password);
                                    }}
                                    selectionColor={dimensions.color.select_color}
                                    left={<TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                                    right={<TextInput.Icon name={passIcon} color={"darkblue"} disabled={false} onPress={() => hidePasswordIcon(passIcon)} />}
                                />
                                <HelperText type="error" visible={errorPass}>{errorPassText}</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View>
                                <TextInput
                                    autoCompleteType="password"
                                    label={strings.textInput.confirm_password}
                                    mode="outlined"
                                    placeholder={strings.textInput.confirm_password}
                                    blurOnSubmit={true}
                                    secureTextEntry={passConfHide}
                                    autoCorrect={false}
                                    textContentType={'password'}
                                    multiline={false}
                                    value={passConf}
                                    error={isErrorPassConf}
                                    onTextInput={() => { }}
                                    onChangeText={(passConf) => {
                                        setPassConf(passConf.replace(/[\s]/g, ''));
                                        validatePassConf(passConf);
                                        checkPassConf(passConf);
                                        checkPasswordChecker(password, passConf);
                                    }}
                                    selectionColor={dimensions.color.select_color}
                                    left={<TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                                    right={<TextInput.Icon name={passConfIcon} color={"darkblue"} disabled={false} onPress={() => hideConfPasswordIcon(passConfIcon)} />}
                                />
                                <HelperText type={validatePasswordChecker(password, passConf).isValidate ? "info" : "error"} visible={errorPassConf}>{errorPassConfText}</HelperText>
                            </View>
                            <View style={styles.spacing5}></View>
                            <View style={styles.submitButton} >
                                <Button
                                    style={styles.loginButton}
                                    mode="contained"
                                    // onPress={ () => { navigation.goBack(); }}
                                    onPress={() => {
                                        submitAccount(firstName, lastName, gender, email, mobile, selectedDepartment, enrollment, password, passConf);
                                        checkFirstName(firstName);
                                        checkLastName(lastName);
                                        checkEmail(email);
                                        checkMobile(mobile);
                                        checkEnrollment(enrollment);
                                        checkBranch(branch);
                                        checkPassword(password);
                                        checkPassConf(passConf);
                                        validatePasswordChecker(password, passConf);
                                        checkPasswordChecker(password, passConf);
                                        formDataClear(formClear(true));

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
    function hidePasswordIcon(icon) {
        setPassIcon(changePassIcon(icon).passIcon);
        setPassHide(changePassIcon(icon).passHide)
    }
    function hideConfPasswordIcon(icon) {
        setPassConfIcon(changePassConfIcon(icon).passConfIcon);
        setPassConfHide(changePassConfIcon(icon).passConfHide)
    }
    function formDataClear(allow) {
        if (submitAccount(firstName, lastName, gender, email, mobile, selectedDepartment, enrollment, password, passConf)) {
            setFirstName('');
            setLastName('');
            setEmail('');
            setMobile('');
            setBranch('');
            setSelectedDepartment('');
            setEnrollment('');
            setPassword('');
            setPassConf('');
            setGender('');
        }
    }
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
    function checkEnrollment(enrollment) {
        setErrorEnrollment(validateEnrollment(enrollment).errorEnrollment);
        setErrorEnrollmentText(validateEnrollment(enrollment).errorEnrollmentText);
        setIsErrorEnrollment(validateEnrollment(enrollment).isErrorEnrollment);
    }
    function checkBranch(branch) {
        setErrorBranch(validateBranch(branch).errorBranch);
        setErrorBranchText(validateBranch(branch).errorBranchText);
        setIsErrorBranch(validateBranch(branch).isErrorBranch);
    }
    function checkPassword(password) {
        setErrorPass(validatePassword(password).errorPass);
        setErrorPassText(validatePassword(password).errorPassText);
        setIsErrorPass(validatePassword(password).isErrorPass);

    }
    function checkPassConf(passConf) {
        setErrorPassConf(validatePassConf(passConf).errorPassConf);
        setErrorPassConfText(validatePassConf(passConf).errorPassConfText);
        setIsErrorPassConf(validatePassConf(passConf).isErrorPassConf);
    }
    function checkPasswordChecker(password, passConf) {
        setErrorPassConf(validatePasswordChecker(password, passConf).errorPassConf);
        setErrorPassConfText(validatePasswordChecker(password, passConf).errorPassConfText);
        setIsErrorPassConf(validatePasswordChecker(password, passConf).isErrorPassConf);
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
export default AddStudentDesign;