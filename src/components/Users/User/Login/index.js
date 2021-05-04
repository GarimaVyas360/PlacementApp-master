import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Keyboard, ToastAndroid } from 'react-native';
import strings from '../../../../res/strings';
import UserLoginDesign from './Design';
import { SignupAuth } from "../../../../firebase/firebaseAuth";
import firestore from "@react-native-firebase/firestore";

const UserLoginActivity = ({ route, navigation }) => {
    const user = route.params.user;
    console.log(route.params.user);
    // const [user, setuser] = useState(route.params.user);
    // const [user, setuser] = useState('');
    const [userexist, setuserexist] = useState();
    var UserCase;

    const passData = "Admin@123";
    const emailData = "admin@gmail.com"
    return (
        <UserLoginDesign
            navigation={navigation}
            user={user}
            submitLogin={(email, password) => submitLogin(email, password)}
            validateEmail={(email) => validateEmail(email)}
            validatePassword={(password) => validatePassword(password)}
            formClear={(allow) => formClear(allow)}
            changePassIcon={(icon) => changePassIcon(icon)}
            keyboardHide={() => keyboardHide()}
        />
    );
    function submitLogin(email, password) {
        if (validateEmail(email).isValidate && validatePassword(password).isValidate) {

            if (user == strings.users.student) {
                userVerify(email, (status) => {
                    console.log("status" + status),
                        (status) ? alert(user + " Success!") : ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT),
                        onSuccess(status)
                });
                // console.log("userexist " + userexist);
                // navigation.replace('StudentBottomNavActivity');
            }
            else if (user == strings.users.tpo) {
                userVerify(email);
              //  alert(user + " Success!");
                 navigation.replace('TpoBottomNavActivity');
            }
            else if (user == strings.users.admin) {
                userVerify(email, (status) => {
                    console.log("status" + status),
                        (status) ? navigation.replace('AdminBottomNavActivity') : ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT),
                        onSuccess(status)
                });
                // navigation.replace('AdminBottomNavActivity');
            }
            else {
                ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT);
                return false;
            }
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
    function formClear(allow) {
        return allow;
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
                    errorPassText: '',
                    isErrorPass: false,
                    isValidate: true,
                };
            }
        }
    }

    function onSuccess(status) {
        console.log("allow", status);
        // setuserexist(status);
        // console.log(userexist);
        return status;
    }


    function userVerify(email, onSuccess) {
        var size;
        firestore()
            .collection(user)
            // order by asc and desc order
            .where('Email', '==', email)
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                size = querySnapshot.size;
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User exists: ', size);

                    if (documentSnapshot.exists) {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        // return true;
                        onSuccess(true);
                    }
                });
                if (size == 0) {
                    console.log('Total success user: ', querySnapshot.size);
                    onSuccess(false);
                }
            });
    }




}
export default UserLoginActivity;