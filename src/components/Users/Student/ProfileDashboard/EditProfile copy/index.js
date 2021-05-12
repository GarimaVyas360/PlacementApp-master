import React, { useEffect, useState } from 'react';
import strings from '../../../../../res/strings';
import StudentProfileEditDesign from './Design';
import firestore from "@react-native-firebase/firestore";
import { UpdateAdmin, UpdateStudent } from '../../../../../firebase/firestore/UserSignUp';
import { ToastAndroid } from 'react-native';

const StudentProfileEditActivity = ({ route, navigation, nav_title }) => {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [departments, setDepartmentList] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const keyid = route.params.keyid;

    useEffect(() => {
        console.log("Key Id", keyid);
        list();
    }, []);

    const list = () => {
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
        // Unsubscribe from events when no longer in use
    }


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: strings.onBoarding.edit_profile, //Set Header Title
        });
    }, [navigation]);


    return (
        <StudentProfileEditDesign
            navigation={navigation}
            nav_title={nav_title}
            list={users}
            keyid={keyid}
            // FirstName={firstName}
            // LastName={lastName}
            // Email={email}
            // Gender={gender}
            // Mobile={mobileNo}
            // Enrollment={enrollment}
            // Department={selectedDepartment}
            list={departments}
            navigation={navigation}
            submitEditeProfileAdmin={(firstName, lastName, gender, email, mobile) => submitEditeProfileAdmin(firstName, lastName, gender, email, mobile)}
            validateFirstName={(firstName) => validateFirstName(firstName)}
            validateLastName={(lastName) => validateLastName(lastName)}
            validateEmail={(email) => validateEmail(email)}
            validateMobile={(mobile) => validateMobile(mobile)}
            validateWhatsAppNumber={(whatsAppNumber) => validateWhatsAppNumber(whatsAppNumber)} />
    );



    function submitEditeProfileAdmin(firstName, lastName, gender, email, mobile) {
        if (validateFirstName(firstName).isValidate && validateLastName(lastName).isValidate && validateEmail(email).isValidate
            && validateMobile(mobile).isValidate
            //  && whatsAppNumber(whatsAppNumber).isValidate
        ) {
            // UpdateAdmin(firstName, lastName, email, mobile, whatsAppNumber);
            UpdateStudent(firstName, lastName, gender, email, mobile, keyid)
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

export default StudentProfileEditActivity;