import React, { useEffect, useState } from 'react';
import AddStudentDesign from './Design';
import firestore from '@react-native-firebase/firestore';
import strings from '../../../../../res/strings';
import { Alert, FlatList, ToastAndroid, Keyboard } from 'react-native';
import { UserSignUp } from "../../../../../firebase/firestore/UserSignUp";
import CreateUser from '../../../../../firebase/CreateUser';

const AddStudentActivity = ({ navigation }) => {
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

    // return (
    //     <AddStudentDesign
    //         navigation={navigation}
    //         departmentlist={users} />
    // );
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: strings.onBoarding.add_student, //Set Header Title
        });
    }, [navigation]);


    return (
        <AddStudentDesign
            navigation={navigation}
            submitAccount={
                (firstName, lastName, gender, email, mobile, branch, enrollment, password, passConf) =>
                    submitAccount(firstName, lastName, gender, email, mobile, branch, enrollment, password, passConf)
            }
            validateFirstName={(firstName) => validateFirstName(firstName)}
            validateLastName={(lastName) => validateLastName(lastName)}
            validateEmail={(email) => validateEmail(email)}
            validateMobile={(mobile) => validateMobile(mobile)}
            validateBranch={(branch) => validateBranch(branch)}
            validateEnrollment={(enrollment) => validateEnrollment(enrollment)}
            validatePassword={(password) => validatePassword(password)}
            validatePassConf={(passConf) => validatePassConf(passConf)}
            validatePasswordChecker={(password, passConf) => validatePasswordChecker(password, passConf)}
            formClear={(allow) => formClear(allow)}
            changePassIcon={(icon) => changePassIcon(icon)}
            changePassConfIcon={(icon) => changePassConfIcon(icon)}
            keyboardHide={() => keyboardHide()}
            departmentlist={users} />
    );

    function submitAccount(firstName, lastName, gender, email, mobile, branch, enrollment, password, passConf) {
        if (validateFirstName(firstName).isValidate && validateLastName(lastName).isValidate
            && validateEmail(email).isValidate && validateMobile(mobile).isValidate
            && validateBranch(branch).isValidate && validateEnrollment(enrollment).isValidate
            && validatePassword(password).isValidate && validatePassConf(passConf).isValidate
            && validatePasswordChecker(password, passConf).isValidate
        ) {
            Alert.alert("Account created !", "Student account is successfully created by Admin.",
                [
                    {
                        text: "Stay on Page",
                        onPress: () => { formClear(true) },
                        style: "cancel"
                    },
                    {

                    },
                    {
                        text: "Ok",
                        onPress: () => {
                            // navigation.goBack(); formClear(true);

                            // UserSignUp(firstName, lastName,
                            //     gender, email, password, mobile, branch, enrollment)

                            CreateUser(email, password,
                                (status) => {
                                    console.log("status" + status)
                                    if (status) {
                                        UserSignUp(firstName, lastName,
                                            gender, email, password, mobile, branch, enrollment),
                                            navigation.goBack();
                                    }
                                    else {
                                        console.log("Email/Password are incorrect"),
                                            ToastAndroid.show("Email/Password is incorrect", ToastAndroid.SHORT);
                                        // navigation.goBack();
                                    };
                                });



                        },
                        style: "destructive"
                    }
                ],
                { cancelable: false }
            );
            return true;
        }
        else {
            ToastAndroid.show("All fields are mandatory!", ToastAndroid.SHORT);
            return false;
        }
    }
    function keyboardHide() {
        Keyboard.dismiss();
    }
    function changePassIcon(icon) {
        if (icon == 'eye') {
            return {
                passIcon: 'eye-off',
                passHide: false,
            }
        }
        else if (icon == 'eye-off') {
            return {
                passIcon: 'eye',
                passHide: true,
            }
        }
    }
    function changePassConfIcon(icon) {
        if (icon == 'eye') {
            return {
                passConfIcon: 'eye-off',
                passConfHide: false,
            }
        }
        else if (icon == 'eye-off') {
            return {
                passConfIcon: 'eye',
                passConfHide: true,
            }
        }
    }
    function formClear(allow) {
        return allow;
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
    function validatePassword(password) {
        const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,12}$/;
        if (!password) {
            return {
                errorPass: true,
                errorPassText: 'Password required.',
                isErrorPass: true,
                isValidate: false,
            };
        }
        else {
            if (passwordReg.test(password) === false) {
                return {
                    errorPass: true,
                    errorPassText: "'Password must contain minimum 7 and maximum 12 characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
                    isErrorPass: true,
                    isValidate: false
                };
            }
            else {
                return {
                    errorPass: false,
                    errorPassText: "",
                    isErrorPass: false,
                    isValidate: true,
                };
            }
        }
    }
    function validatePasswordChecker(password, passConf) {
        if (password && validatePassword(password).isValidate) {
            if (passConf) {
                if (passConf == password) {
                    return {
                        errorPassConf: false,
                        errorPassConfText: 'Password matched.',
                        isErrorPassConf: false,
                        isValidate: true,
                    };
                }
                else {
                    return {
                        errorPassConf: true,
                        errorPassConfText: 'Password not matched.',
                        isErrorPassConf: true,
                        isValidate: false,
                    };
                }
            }
            else {
                return {
                    errorPassConf: true,
                    errorPassConfText: 'Confirm password required.',
                    isErrorPassConf: true,
                    isValidate: false,
                };
            }
        }
        else {
            return {
                errorPassConf: true,
                errorPassConfText: 'Confirm password required.',
                isErrorPassConf: true,
                isValidate: false,
            };
        }
    }
    function validatePassConf(passConf) {
        if (!passConf) {
            return {
                errorPassConf: true,
                errorPassConfText: 'Confirm password required.',
                isErrorPassConf: true,
                isValidate: false
            };
        }
        else {
            return {
                errorPassConf: false,
                errorPassConfText: '',
                isErrorPassConf: false,
                isValidate: true
            };
        }
    }

    function validateEnrollment(enrollment) {
        if (!enrollment) {
            return {
                errorEnrollment: true,
                errorEnrollmentText: "EnrollmentId required.",
                isErrorEnrollment: true,
                isValidate: false,
            };
        }
        else {
            return {
                errorEnrollment: false,
                errorEnrollmentText: '',
                isErrorEnrollment: false,
                isValidate: true,
            };
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
}
export default AddStudentActivity;