import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider, map } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import { createDepartment, deleteDepartment } from "../../../../../firebase/firestore/UserSignUp";
import firestore from "@react-native-firebase/firestore";

const AddDepartmentDesign = ({ navigation, list, validateDepartment }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [department, setDepartment] = useState("");
    const [error, SetError] = useState("");
    const [errorText, setErrorText] = useState("");
    const [branch, setBranch] = useState("");
    const [users, setUsers] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [departmentKey, setDepartmentKey] = useState('');

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
                                // autoFocus
                                // error={isErrorFirstName}
                                // value={firstName}
                                // onChangeText={ (text) => { 
                                //     setFirstName(text);
                                //     validateFirstName(text);
                                //     checkFirstName(text);
                                // } }

                                value={department}
                                onChangeText={(department) => {
                                    setDepartment(department);
                                    // ValidateDepartment(department);
                                }}
                                left={<TextInput.Icon name="book" color={"darkblue"} disabled={true} />}
                            />
                            <HelperText type="error" visible={true}>error</HelperText>
                            <View style={styles.submitButton} >
                                <Button
                                    style={styles.loginButton}
                                    mode="contained"
                                    onPress={() => { createDepartment(department); }}

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
                                    selectedValue={selectedDepartment}
                                    onValueChange={(itemValue, itemIndex) => { setDepartmentKey(itemValue); departmentName(itemValue), setModalVisible(true) }} >
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
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{strings.onBoarding.do_you_want_delete}</Text>
                            <View style={styles.modalSubTextView}>
                                <Text style={styles.modalSubText}>"{selectedDepartment}" Department</Text>
                                <TouchableOpacity onPress={() => { alert(departmentKey) }}>
                                    <Icon name="playlist-edit" size={25} style={styles.modalEditIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalButton} >
                                <Button
                                    style={styles.cancelButton}
                                    mode="contained"
                                    onPress={() => { setSelectedDepartment(""); setModalVisible(!modalVisible) }}
                                >
                                    {strings.buttons.cancel}
                                </Button>
                                <Button
                                    style={styles.deleteButton}
                                    mode="contained"
                                    onPress={() => { deleteDepartment(departmentKey), setModalVisible(false) }}
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
export default AddDepartmentDesign;