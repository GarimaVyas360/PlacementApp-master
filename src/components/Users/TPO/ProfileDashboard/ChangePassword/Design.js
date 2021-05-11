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

const TpoProfileChangePasswordDesign = ({ navigation, submitChangePass, ValidateOldPass, ValidateConfirmPass, ValidateNewPass,
    keyboardHide, changePassIcon, changePassConfIcon, changeNewPassIcon, formClear }) => {


    const [oldPass, setOldPass] = useState('');
    const [errorOldPass, setErrorOldPass] = useState(false);
    const [errorOldPassText, setErrorOldPassText] = useState('');
    const [isErrorOldPass, setIsErrorOldPass] = useState(false);

    const [passConf, setPassConf] = useState('');
    const [errorPassConf, setErrorPassConf] = useState(false);
    const [errorPassConfText, setErrorPassConfText] = useState('');
    const [isErrorPassConf, setIsErrorPassConf] = useState(false);

    const [newPass, setNewPass] = useState('');
    const [errorNewPass, setErrorNewPass] = useState(false);
    const [errorNewPassText, setErrorNewPassText] = useState('');
    const [isErrorNewPass, setIsErrorNewPass] = useState(false);

    const [allow, setAllow] = useState(false);

    const [passHide, setPassHide] = useState(true);
    const [passIcon, setPassIcon] = useState('eye');

    const [passConfHide, setPassConfHide] = useState(true);
    const [passConfIcon, setPassConfIcon] = useState('eye');

    const [newPassHide, setNewPassHide] = useState(true);
    const [newPassIcon, setNewPassIcon] = useState('eye');

    return (
        <View style={styles.mainContainer} onPress={() => keyboardHide}>
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
                    <View style={styles.setCodeView}>
                        <CardView
                            cardElevation={6}
                            cardMaxElevation={5}
                            cornerRadius={5}
                            style={styles.setCodeCardView}
                        >
                            <TouchableOpacity onPress={() => { navigation.replace('TpoProfileSetSecurityCodeActivity') }}>
                                <Text style={styles.setCodeText}>{strings.buttons.set_security_code}</Text>
                            </TouchableOpacity>
                        </CardView>
                    </View>
                    <View>
                        <TextInput
                            autoCompleteType="password"
                            label={strings.textInput.old_password}
                            mode="outlined"
                            placeholder={strings.textInput.old_password}
                            blurOnSubmit={true}
                            secureTextEntry={passHide}
                            autoCorrect={false}
                            textContentType={'password'}
                            multiline={false}
                            value={oldPass}
                            error={isErrorOldPass}
                            onTextInput={() => { }}
                            onChangeText={(oldPass) => {
                                setOldPass(oldPass);
                                ValidateOldPass(oldPass);
                                checkOldPass(oldPass);
                            }}
                            selectionColor={dimensions.color.select_color}
                            left={<TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                            right={<TextInput.Icon name={passIcon} color={"darkblue"} disabled={false} onPress={() => hidePasswordIcon(passIcon)} />}
                        />
                        <HelperText type="error" visible={errorOldPass}>{errorOldPassText}</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
                    <View>
                        <TextInput
                            autoCompleteType="password"
                            label={strings.textInput.new_password}
                            mode="outlined"
                            placeholder={strings.textInput.new_password}
                            blurOnSubmit={true}
                            secureTextEntry={newPassHide}
                            autoCorrect={false}
                            textContentType={'password'}
                            multiline={false}
                            value={newPass}
                            error={isErrorNewPass}
                            onTextInput={() => { }}
                            onChangeText={(newPass) => {
                                setNewPass(newPass);
                                ValidateNewPass(newPass);
                                checkNewPass(newPass);
                                NewPasswordChecker(oldPass, newPass)
                            }}
                            selectionColor={dimensions.color.select_color}
                            left={<TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                            right={<TextInput.Icon name={newPassIcon} color={"darkblue"} disabled={false} onPress={() => hideNewPasswordIcon(newPassIcon)} />}
                        />
                        <HelperText type="error" visible={errorNewPass}>{errorNewPassText}</HelperText>

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
                                setPassConf(passConf);

                                checkConfirmPass(passConf);
                                ConfirmPasswordChecker(newPass, passConf);
                            }}
                            selectionColor={dimensions.color.select_color}
                            left={<TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                            right={<TextInput.Icon name={passConfIcon} color={"darkblue"} disabled={false} onPress={() => hideConfPasswordIcon(passConfIcon)} />}
                        />
                        <HelperText type={ValidateConfirmPass(newPass, passConf).isValidate ? "info" : "error"} visible={errorPassConf}>{errorPassConfText}</HelperText>

                    </View>
                    <View style={styles.spacing5}></View>
                    <View style={styles.submitButton} >
                        <Button
                            style={styles.loginButton}
                            mode="contained"
                            onPress={() => {
                                submitChangePass(oldPass, passConf, newPass);
                                checkOldPass(oldPass);
                                checkNewPass(newPass);
                                checkConfirmPass(passConf);
                                NewPasswordChecker(newPass, oldPass);
                                ConfirmPasswordChecker(passConf, newPass);
                                // ValidateConfirmPass(passConf, newPass);
                                formDataClear(formClear(true));
                            }
                            }
                        >
                            {strings.buttons.update_password}
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );

    function formDataClear(allow) {
        if (allow) {
            setOldPass('');
            setNewPass('');
            setPassConf('');
        }
    }



    function checkOldPass(oldPass) {
        setErrorOldPass(ValidateOldPass(oldPass).errorOldPass);
        setErrorOldPassText(ValidateOldPass(oldPass).errorOldPassText);
        setIsErrorOldPass(ValidateOldPass(oldPass).isErrorOldPass);
    }

    function checkConfirmPass(passConf) {
        setErrorPassConf(ValidateConfirmPass(passConf).errorPassConf);
        setErrorPassConfText(ValidateConfirmPass(passConf).errorPassConfText);
        setIsErrorPassConf(ValidateConfirmPass(passConf).isErrorPassConf);
    }

    function checkNewPass(newPass) {
        setErrorNewPass(ValidateNewPass(newPass).errorNewPass);
        setErrorNewPassText(ValidateNewPass(newPass).errorNewPassText);
        setIsErrorNewPass(ValidateNewPass(newPass).isErrorNewPass);
    }
    function NewPasswordChecker(newPass, oldPass) {

        setErrorNewPass(ValidateNewPass(newPass, oldPass).errorNewPass);
        setErrorNewPassText(ValidateNewPass(newPass, oldPass).errorNewPassText);
        setIsErrorNewPass(ValidateNewPass(newPass, oldPass).isErrorNewPass)
    }
    function ConfirmPasswordChecker(passConf, newPass) {

        setErrorPassConf(ValidateConfirmPass(passConf, newPass).errorPassConf);
        setErrorPassConfText(ValidateConfirmPass(passConf, newPass).errorPassConfText);
        setIsErrorPassConf(ValidateConfirmPass(passConf, newPass).isErrorPassConf);
    }
    function hidePasswordIcon(icon) {
        setPassIcon(changePassIcon(icon).passIcon);
        setPassHide(changePassIcon(icon).passHide)
    }
    function hideConfPasswordIcon(icon) {
        setPassConfIcon(changePassConfIcon(icon).passConfIcon);
        setPassConfHide(changePassConfIcon(icon).passConfHide)
    }
    function hideNewPasswordIcon(icon) {
        setNewPassIcon(changeNewPassIcon(icon).newPassIcon);
        setNewPassHide(changeNewPassIcon(icon).newPassHide)
    }

}
export default TpoProfileChangePasswordDesign;