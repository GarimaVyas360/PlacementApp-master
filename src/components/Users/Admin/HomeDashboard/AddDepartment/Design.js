import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Modal, Pressable, ToastAndroid } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider, map } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import prompt from 'react-native-prompt-android';
import { updateDepartment } from "../../../../../firebase/firestore/UserSignUp";

import { createDepartment, deleteDepartment } from "../../../../../firebase/firestore/UserSignUp";
import firestore from "@react-native-firebase/firestore";

const AddDepartmentDesign = ({ navigation, list, validateBranch, submitDepartment, formClear, updateAlert }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [department, setDepartment] = useState("");
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [isErrorDepartment, setIsErrorDepartment] = useState(false);

    // const [branch, setBranch] = useState("");
    const [users, setUsers] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [departmentKey, setDepartmentKey] = useState('');

    const [branch, setBranch] = useState('');
    const [errorBranch, setErrorBranch] = useState(false);
    const [errorBranchText, setErrorBranchText] = useState('');
    const [isErrorBranch, setIsErrorBranch] = useState(false);


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: strings.onBoarding.add_department, //Set Header Title
        });
    }, [navigation]);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.activityView}>
                        <View style={styles.activityHeadingView}>
                            <Text style={styles.activityHeadingText}>{strings.onBoarding.add_department}</Text>
                            <Icon style={styles.activityHeadingIcon} name='arrow-down-drop-circle-outline' type='MaterialIcons' color='#517fa4' />
                        </View>
                        <View style={styles.activityListView}>
                            <TextInput
                                autoCompleteType="name"
                                label={strings.textInput.department}
                                mode="outlined"
                                placeholder={strings.textInput.department}
                                blurOnSubmit={true}
                                autoCapitalize='words'
                                error={errorBranch}
                                value={department}
                                onChangeText={(department) => {
                                    setDepartment(department);
                                    validateBranch(department);
                                    checkBranch(department);

                                }}
                                left={<TextInput.Icon name="book" color={"darkblue"} disabled={true} />}
                            />
                            <HelperText type="error" visible={isErrorBranch}>{errorBranchText}</HelperText>
                            <View style={styles.submitButton} >
                                <Button
                                    style={styles.loginButton}
                                    mode="contained"
                                    onPress={() => { submitDepartment(department); clearDepartment(true); }}
                                >
                                    Save
                                </Button>
                            </View>
                        </View>
                        <Divider style={{ height: 2, backgroundColor: 'lightgray', marginBottom: 15 }}></Divider>
                        <View style={styles.activityHeadingView}>
                            <Text style={styles.activityHeadingText}>Department Preview</Text>
                            <Icon style={styles.activityHeadingIcon} name='arrow-down-drop-circle-outline' type='MaterialIcons' color='#517fa4' />
                        </View>
                        <View style={styles.activityListView}>
                            <View style={styles.pickerView}>
                                <Picker
                                    style={{}}
                                    selectedValue={branch}
                                    onValueChange={(itemValue, itemIndex) => {
                                        checkBranch(itemValue);
                                        setDepartmentKey(itemValue);
                                        departmentName(itemValue);
                                        setBranch(itemValue);
                                        setModalVisible(true)
                                    }} >
                                    <Picker.Item label="--- Select Branch ---" value="" />
                                    {list.map((item, index) => {
                                        return (
                                            <Picker.Item label={item.department} value={item.key} key={item.key} />
                                        )
                                    })}
                                </Picker>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                        setSelectedDepartment('');
                        setBranch('');
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{strings.onBoarding.do_you_want_delete}</Text>
                            <View style={styles.modalSubTextView}>
                                <Text style={styles.modalSubText}>"{selectedDepartment}" Department</Text>
                                <TouchableOpacity onPress={() => { updateAlert(departmentKey, selectedDepartment); setModalVisible(false);setBranch(''); }}>
                                    <Icon name="playlist-edit" size={25} style={styles.modalEditIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalButton} >
                                <Button
                                    style={styles.cancelButton}
                                    mode="contained"
                                    onPress={() => { setModalVisible(!modalVisible); setDepartmentKey(""); console.log("selected departemnt", selectedDepartment); setBranch(''); }}
                                >
                                    {strings.buttons.cancel}
                                </Button>
                                <Button
                                    style={styles.deleteButton}
                                    mode="contained"
                                    onPress={() => { deleteDepartment(departmentKey); ToastAndroid.show("Department deleted.", ToastAndroid.SHORT); setModalVisible(false);setBranch(''); }}
                                >
                                    {strings.buttons.delete}
                                </Button>
                            </View>
                        </View>
                        <Divider style={{ height: 1, backgroundColor: 'gray', }}></Divider>
                    </View>
                </Modal>
            </View>
        </View>
    );

    function clearDepartment() {
        setDepartment('');
        return false;
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

    function formDataClear(allow) {
        if (submitDepartment(department)) {
            setDepartment('');

        }
    }

    function checkBranch(department) {
        setErrorBranch(validateBranch(department).errorBranch);
        setErrorBranchText(validateBranch(department).errorBranchText);
        setIsErrorBranch(validateBranch(department).isErrorBranch);
    }

}
export default AddDepartmentDesign;