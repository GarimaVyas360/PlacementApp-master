import React, { useEffect, useState } from 'react';
import AddDepartmentDesign from './Design';
import prompt from "react-native-prompt-android";
import firestore from "@react-native-firebase/firestore";
import { ToastAndroid, Alert } from "react-native";
import { departmentListCollection } from '../../../../../firebase/firestore/UserSignUp';
import { updateDepartment } from "../../../../../firebase/firestore/UserSignUp";
const AddDepartmentActivity = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const departmentlist = [];

    useEffect(() => {
        const subscriber = firestore()
            .collection('departments')
            .orderBy('department', 'asc')
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
                    console.log(item.department, item.key);
                })

            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);




    return (
        <AddDepartmentDesign
            navigation={navigation}
            list={users}
            // validateDepartment={(department) => { validateDepartment(department) }} 
            validateBranch={(department) => validateBranch(department)}
            submitDepartment={(department) => { submitDepartment(department) }}
            formClear={(allow) => { formClear(allow) }}
            updateAlert={(departmentKey, department) => { updateAlert(departmentKey, department) }}
        />
    );


    function submitDepartment(department) {
        if (validateDepartment(department).isValidate) {
            console.log("btn click");
            // createDepartment(department);
            departmentListCollection(department);
        }
        else {
            ToastAndroid.show("Enter the Valid  department", ToastAndroid.SHORT);
        }
        // formClear(true);
    }


    function formClear(status) {
        return status;
    }


    function validateDepartment(department) {
        if (!department) {
            return {
                errorDepartment: true,
                errorText: "Enter the Department",
                isErrorDepartment: true,
                isValidate: false,
            }
        }
        else {
            return {
                errorDepartment: false,
                errorText: "",
                isErrorDepartment: false,
                isValidate: true,
            }
        }
    }

    function updateAlert(departmentkey, selectedDepartment) {
        prompt(
            'Update Department',
            '',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: (department) => updateDepartment(departmentkey, department) },
            ],
            {
                type: 'plain-text',
                cancelable: false,
                defaultValue: selectedDepartment,
                placeholder: 'department'
            }
        );
    }


    function validateBranch(department) {
        if (!department) {
            return {
                errorBranch: true,
                errorBranchText: 'Select Department/Branch.',
                isErrorBranch: true,
                isValidate: false
            };
        }
        else {
            return {
                errorBranch: false,
                errorBranchText: '',
                isErrorBranch: false,
                isValidate: true,
            };
        }
    }
}
export default AddDepartmentActivity;