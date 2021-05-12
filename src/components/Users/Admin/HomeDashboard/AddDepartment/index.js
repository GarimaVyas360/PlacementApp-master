import React, { useEffect, useState } from 'react';
import AddDepartmentDesign from './Design';
import prompt from "react-native-prompt-android";
import firestore from "@react-native-firebase/firestore";
import { ToastAndroid, Alert } from "react-native";
import { departmentListCollection } from '../../../../../firebase/firestore/UserSignUp';
import { updateDepartment } from "../../../../../firebase/firestore/UserSignUp";
import { cond } from 'react-native-reanimated';
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
            var condition = false;
            users.map((item, index) => {
                if(item.department == department){
                    condition= true;
                }
            })
            if(condition==true){
                ToastAndroid.show("\""+department+"\" Department already exist.", ToastAndroid.SHORT);
                formClear(false);
                return false;
            }
            else{
                console.log("btn click");
                departmentListCollection(department);
                ToastAndroid.show("Department added.", ToastAndroid.SHORT);
                formClear(true);
                return true;
            }
        }
        else {
            ToastAndroid.show("Enter the valid  department", ToastAndroid.SHORT);
            return false;
        }
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
                //{ text: 'OK', onPress: (department) => updateDepartment(departmentkey, department) },
                { text: 'OK', onPress: (department) => (department=="" || department==null) ? ToastAndroid.show("Department not updated.", ToastAndroid.SHORT) : (updateDepartment(departmentkey, department),ToastAndroid.show("Department updated.", ToastAndroid.SHORT)) },
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