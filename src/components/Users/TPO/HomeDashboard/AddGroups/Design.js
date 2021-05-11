import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import dimensions from '../../../../../res/dimensions';

const TpoAddStudentDesign = ({ navigation, submitButton, validateFirstName, validateLastName, validateEmail,
    validateMobile, validateEnrollment, validateBranch, validatePassword, validatePassConf, validatePasswordChecker, formClear
    , changePassIcon, changePassConfIcon, keyboardHide }) => {

    let rowHeight = 146;
    const [height, setHeight] = useState(0);
    const [message, setMessage] = useState('');

    const [senderName, setSenderName] = useState('');
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [errorFirstNameText, setErrorFirstNameText] = useState('');
    const [isErrorFirstName, setIsErrorFirstName] = useState(false);

    const [branch, setBranch] = useState('');
    const [errorBranch, setErrorBranch] = useState(false);
    const [errorBranchText, setErrorBranchText] = useState('');
    const [isErrorBranch, setIsErrorBranch] = useState(false);



    return (
        <View style={styles.mainContainer} onPress={() => keyboardHide()}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.activityView}>
                        <View style={styles.activityHeadingView}>
                            <Text style={styles.activityHeadingText}>{strings.onBoarding.add_group}</Text>
                            <Icon style={styles.activityHeadingIcon} name='arrow-down-drop-circle-outline' type='MaterialIcons' color='#517fa4' />
                        </View>
                        <View style={styles.activityListView}>
                            <View>
                                <TextInput
                                    autoCompleteType="name"
                                    label={strings.textInput.sender}
                                    mode="outlined"
                                    placeholder={strings.textInput.sender}
                                    blurOnSubmit={true}
                                    autoCapitalize='words'
                                    // autoFocus
                                    error={isErrorFirstName}
                                    value={senderName}
                                    onChangeText={(senderName) => {
                                        setSenderName(senderName);
                                        // validateFirstName(senderName);
                                        // checkFirstName(senderName);
                                    }}
                                    selectionColor={dimensions.color.select_color}
                                    left={<TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={errorFirstName}>{errorFirstNameText}</HelperText>
                            </View>

                            <View style={styles.spacing15}></View>

                            {/* <View>
                                <View style={styles.pickerView}>
                                    <Picker
                                        style={{}}
                                        error={isErrorBranch}
                                        selectedValue={branch}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setBranch(itemValue);
                                            // validateBranch(itemValue);
                                            // checkBranch(itemValue);
                                        }}>
                                        <Picker.Item label="--- Select Branch ---" value="" />
                                        <Picker.Item label="Ankush" value="A" />
                                        <Picker.Item label="Shefali" value="S" />
                                        <Picker.Item label="Garima" value="G" />
                                    </Picker>
                                </View>
                                <HelperText type="error" visible={errorBranch}>{errorBranchText}</HelperText> */}
                            {/* </View> */}

                            <View style={styles.spacing5}></View>
                            <View>
                                <TextInput
                                    autoCompleteType='off'
                                    multiline={true}
                                    value={message}
                                    onChangeText={(message) => { setMessage(message) }}
                                    placeholder={"Type a message"}
                                    onContentSizeChange={(event) => { (setHeight(event.nativeEvent.contentSize.height)) }}
                                // style={[styles.textInputArea, { height: height < rowHeight ? Math.max(49, height) : (146.6666717529297) }]}
                                />
                                {/* <HelperText type="error" visible={errorLastName}>{errorLastNameText}</HelperText> */}
                            </View>


                            <View style={styles.spacing5}></View>

                            <View style={styles.submitButton} >
                                <Button
                                    style={styles.loginButton}
                                    mode="contained"
                                    // onPress={ () => { navigation.goBack(); }}
                                    onPress={() => {
                                        submitButton(senderName, message);
                                        // checkFirstName(firstName);
                                        // checkBranch(branch);
                                        // formDataClear(formClear(true));
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

    function formDataClear(allow) {
        if (submitAccount(senderName, lastName, gender, email, mobile, branch, enrollment, password, passConf)) {
            setSenderName('');
            setBranch('');

        }
    }
    function checkFirstName(firstName) {
        setErrorFirstName(validateFirstName(firstName).errorFirstName);
        setErrorFirstNameText(validateFirstName(firstName).errorFirstNameText);
        setIsErrorFirstName(validateFirstName(firstName).isErrorFirstName);
    }

    function checkBranch(branch) {
        setErrorBranch(validateBranch(branch).errorBranch);
        setErrorBranchText(validateBranch(branch).errorBranchText);
        setIsErrorBranch(validateBranch(branch).isErrorBranch);
    }

}
export default TpoAddStudentDesign;