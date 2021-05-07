import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import { styles } from "./styles";
import strings from '../../../../res/strings';
import images from '../../../../res/images';
import dimensions from '../../../../res/dimensions';
import SignupAuth from "../../../../firebase/firebaseAuth";

const UserLoginDesign = ({ navigation, user, submitLogin, validateEmail, validatePassword, formClear, changePassIcon, keyboardHide }) => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorEmailText, setErrorEmailText] = useState('');
    const [isErrorEmail, setIsErrorEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [errorPass, setErrorPass] = useState(false);
    const [errorPassText, setErrorPassText] = useState('');
    const [isErrorPass, setIsErrorPass] = useState(false);

    const [passHide, setPassHide] = useState(true);
    const [passIcon, setPassIcon] = useState('eye');
    return (
        <View style={styles.mainContainer} onPress={() => keyboardHide()}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.headerView}>
                        <Text style={styles.headingText}>{strings.users.welcome}&nbsp;{user}</Text>
                    </View>
                    <View style={styles.loginView}>
                        <View style={styles.cardView}>
                            <View style={styles.cardIcon}>
                                <Image source={images.onboarding.user_admin}
                                    style={styles.cardImage} />
                            </View>
                            <View style={styles.spacing25}></View>
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
                                        setEmail((email.replace(/[\s]/g, '')));
                                        validateEmail(email);
                                        checkEmail(email);
                                    }}
                                    selectionColor={dimensions.color.select_color}
                                    left={<TextInput.Icon name="email" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={errorEmail}>{errorEmailText}</HelperText>
                            </View>
                            <View style={styles.spacing15}></View>
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
                            <View style={styles.spacing25}></View>
                            <View style={styles.submitButton} >
                                <Button
                                    style={styles.loginButton}
                                    icon="login"
                                    mode="contained"
                                    onPress={() => {
                                        { () => submitLogin(email, password); }
                                        checkEmail(email);
                                        checkPassword(password);
                                        formDataClear(formClear(true));

                                    }}
                                >
                                    {strings.buttons.login}
                                </Button>
                                <View style={styles.spacing15}></View>
                            </View>
                            {user == strings.users.student ? newAccount() : []}
                        </View>
                    </View>
                </ScrollView>
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
    function newAccount() {
        return (
            <View style={styles.newAcc}>
                <TouchableOpacity onPress={() => navigation.navigate('UserSignupActivity')}>
                    <Text style={styles.newAccText}>{strings.buttons.signup_page}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    function hidePasswordIcon(icon) {
        setPassIcon(changePassIcon(icon).passIcon);
        setPassHide(changePassIcon(icon).passHide)
    }
    function formDataClear(allow) {
        if (submitLogin(email, password)) {
            setEmail('');
            setPassword('');
        }
    }
    function checkEmail(email) {
        setErrorEmail(validateEmail(email).errorEmail);
        setErrorEmailText(validateEmail(email).errorEmailText);
        setIsErrorEmail(validateEmail(email).isErrorEmail);
    }
    function checkPassword(password) {
        setErrorPass(validatePassword(password).errorPass);
        setErrorPassText(validatePassword(password).errorPassText);
        setIsErrorPass(validatePassword(password).isErrorPass);
    }
}
export default UserLoginDesign;