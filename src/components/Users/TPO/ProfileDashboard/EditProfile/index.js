import React, { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import { ToastAndroid } from 'react-native';
import strings from '../../../../../res/strings';
import TpoProfileEditDesign from './Design';
import firestore from "@react-native-firebase/firestore";
import { updateTpo } from '../../../../../firebase/firestore/UserSignUp';

const TpoProfileEditActivity = ({ route, navigation, nav_title }) => {

    const [users, setUsers] = useState([]);
    const [departments, setDepartmentList] = useState([]);
    const token = route.params.Token;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: strings.onBoarding.edit_profile, //Set Header Title
        });
    }, [navigation]);

    useEffect(() => {
        list();
    }, []);

    const list = () => {
        console.log("Token: " + token);
        const subscribe = firestore()
            .collection('departments')

            .orderBy('department', 'asc')
            .onSnapshot(querySnapshot => {
                const department = [];
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    department.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setDepartmentList(department);
                departments.map((item, index) => {
                    console.log("data saved");
                })

            });
        return () => subscribe();
    }

    return (
        <TpoProfileEditDesign
            navigation={navigation}
            nav_title={nav_title}
            list={users}
            list={departments}
            Token={token}
            submitEditeProfileTpo={(firstName, lastName, branch, email, mobile) => submitEditeProfileTpo(firstName, lastName, branch, email, mobile)}
            validateFirstName={(firstName) => validateFirstName(firstName)}
            validateLastName={(lastName) => validateLastName(lastName)}
            validateEmail={(email) => validateEmail(email)}
            validateMobile={(mobile) => validateMobile(mobile)}
            validateBranch={(branch) => validateBranch(branch)}
            validateWhatsAppNumber={(whatsAppNumber) => validateWhatsAppNumber(whatsAppNumber)}
        />
    );
    function submitEditeProfileTpo(firstName, lastName, department, email, mobile) {
        if (validateFirstName(firstName).isValidate && validateLastName(lastName).isValidate && validateEmail(email).isValidate
            && validateMobile(mobile).isValidate
            // && validateWhatsAppNumber(whatsAppNumber).isValidate
            //  && validateBranch(branch).isValidate

        ) {
            updateTpo(firstName, lastName, department, email, mobile, token);
            ToastAndroid.show("Profile Saved", ToastAndroid.SHORT);
            navigation.goBack();
        }
    }
    function validateFirstName(firstName) {
        if (!firstName) {
            return {
                errorFirstName: true,
                errorFirstNameText: 'First Name is required.',
                isErrorFirstName: true,
                isValidate: false,
            };
        }
        else {
            return {
                errorFirstName: false,
                errorFirstNameText: '',
                isErrorFirstName: false,
                isValidate: true,
            };
        }
    }
    function validateLastName(lastName) {
        if (!lastName) {
            return {
                errorLastName: true,
                errorLastNameText: 'Last Name is required.',
                isErrorLastName: true,
                isValidate: false,
            };
        }
        else {
            return {
                errorLastName: false,
                errorLastNameText: '',
                isErrorLastName: false,
                isValidate: true,
            };
        }
    }
    function validateEmail(email) {
        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email) {
            return {
                errorEmail: true,
                errorEmailText: 'Email is required.',
                isErrorEmail: true,
                isValidate: false,
            };
        }
        else {
            if (emailReg.test(email) === false) {
                return {
                    errorEmail: true,
                    errorEmailText: 'Enter valid email.',
                    IsErrorEmail: true,
                    isValidate: false
                }
            }
            else {
                return {
                    errorEmail: false,
                    errorEmailText: '',
                    IsErrorEmail: false,
                    isValidate: true
                };
            }
        }
    }
    function validateMobile(mobile) {
        const mobileReg = /^[0]?[789]\d{9}$/;
        if (!mobile) {
            return {
                errorMobile: true,
                errorMobileText: 'Mobile number is required.',
                isErrorMobile: true,
                isValidate: false,
            };
        } else {
            if (mobileReg.test(mobile) === false) {
                return {
                    errorMobile: true,
                    errorMobileText: 'Enter valid mobile number.',
                    isErrorMobile: true,
                    isValidate: false,
                };
            }
            else {
                return {
                    errorMobile: false,
                    errorMobileText: '',
                    isErrorMobile: false,
                    isValidate: true,
                };
            }
        }
    }
    function validateBranch(branch) {
        if (!branch) {
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
    function validateWhatsAppNumber(whatsAppNumber) {
        const mobileReg = /^[0]?[789]\d{9}$/;
        if (!whatsAppNumber) {
            return {
                errorWhatsAppNumber: true,
                errorWhatsAppNumberText: 'Mobile number is required.',
                isErrorWhatsAppNumber: true,
                isValidate: false,
            };
        } else {
            if (mobileReg.test(whatsAppNumber) === false) {
                return {
                    errorWhatsAppNumber: true,
                    errorWhatsAppNumberText: 'Enter valid mobile number.',
                    isErrorWhatsAppNumber: true,
                    isValidate: false,
                };
            }
            else {
                return {
                    errorWhatsAppNumber: false,
                    errorWhatsAppNumberText: '',
                    isErrorWhatsAppNumber: false,
                    isValidate: true,
                };
            }
        }
    }
}
export default TpoProfileEditActivity;