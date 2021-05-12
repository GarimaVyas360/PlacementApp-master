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

    const [groupName, setGroupName] = useState('');
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
                                    label={strings.textInput.group_name}
                                    mode="outlined"
                                    placeholder={strings.textInput.group_name}
                                    blurOnSubmit={true}
                                    autoCapitalize='words'
                                    // autoFocus
                                    error={isErrorFirstName}
                                    value={groupName}
                                    onChangeText={(groupName) => {
                                        setGroupName(groupName);
                                        // validateFirstName(senderName);
                                        // checkFirstName(senderName);
                                    }}
                                    selectionColor={dimensions.color.select_color}
                                    left={<TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                                />
                                <HelperText type="error" visible={errorFirstName}>{errorFirstNameText}</HelperText>
                            </View>

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
                                        submitButton(groupName, message);
                                        // checkFirstName(firstName);
                                        // checkBranch(branch);
                                        // formDataClear(formClear(true));
                                    }}
                                >
                                    {strings.buttons.create_group}
                                </Button>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    );

    function formDataClear(allow) {
        if (submitAccount(groupName, message)) {
            setGroupName('');
            // setBranch('');
            setMessage('');

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