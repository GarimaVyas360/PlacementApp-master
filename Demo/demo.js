import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Keyboard, ToastAndroid } from 'react-native';
import strings from '../../../../res/strings';
import UserLoginDesign from './Design';
import { SignupAuth } from "../../../../firebase/firebaseAuth";
import firestore from "@react-native-firebase/firestore";

const UserLoginActivity = ({ route, navigation }) => {
    const user = route.params.user;
    // console.log(route.params.user);
    // var currentUser = "";
    var userList;
    var currentuser;
    const [userData, setUser] = useState([]);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    // useEffect(() => {
    //     const users = [];
    //     const subscriber = firestore()
    //         .collection(user)
    //         .get()
    //         .then(querySnapshot => {
    //             console.log('Total users: ', querySnapshot.size);
    //             size = querySnapshot.size;
    //             querySnapshot.forEach(documentSnapshot => {
    //                 // console.log('User exists: ', size);

    //                     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //                     // onSuccess(true);
    //                     // console.log("User Id" + documentSnapshot.get('Email'));
    //                     // setUserEmail(documentSnapshot.get('Email'));
    //                     // setUserPassword(documentSnapshot.get('Password'));
    //                     // setCurrentUser(documentSnapshot.get('FirstName'));

    //                     users.push({
    //                         ...documentSnapshot.data(),
    //                         key: documentSnapshot.id,
    //                     });
    //                 }

    //             });
    //             setUser(users);
    //             // setUserData(userData);
    //             // if (size == 0) {
    //             //     console.log('Total success user: ', querySnapshot.size);
    //             //     onSuccess(false);
    //             // }
    //         });
    //     return () => subscriber();
    // }, []);




    useEffect(() => {
        const subscriber = firestore()
            .collection(user)
            .onSnapshot(querySnapshot => {
                const users = [];
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });

                    setUser(users);
                });


                users.map((item, index) => {
                    console.log(item.key);
                });
                userList = users.slice();

                userList.map((item, index) => {
                    console.log("user Data" + item.Email + "  " + item.FirstName);
                });

                setUser(userList);

            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);







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
                // userVerify(email, (status) => {
                //     console.log("status" + status),
                //         (status) ? alert(user + " Success!") : ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT),
                //         onSuccess(status)
                // });
                {
                    setUserData(email, password, (status, currentuser) => {
                        console.log("status" + status),
                            console.log("currentuser" + currentuser);
                        // (status) ? alert(user + " Success!") : ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT),
                        onSuccess(status, currentuser)

                        if (status) {
                            //     // alert(user + " Success!");
                            navigation.replace('AdminBottomNavActivity', { user: currentuser });
                            return true;
                        }
                        else {
                            ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT)
                            return false;
                        }
                    });
                }
            }
            // console.log("userexist " + userexist);
            // navigation.replace('StudentBottomNavActivity');

            else if (user == strings.users.tpo) {
                {
                    setUserData(email, password, (status, currentuser) => {
                        console.log("status" + status),
                            console.log("currentuser" + currentuser);
                        // (status) ? alert(user + " Success!") : ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT),
                        onSuccess(status, currentuser)

                        if (status) {
                            //     // alert(user + " Success!");
                            navigation.replace('AdminBottomNavActivity', { user: currentuser });
                            return true;
                        }
                        else {
                            ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT)
                            return false;
                        }
                    });
                }
            }
            // navigation.replace('TpoBottomNavActivity');

            else if (user == strings.users.admin) {
                // var userValue = userName;
                // console.log(setUserData(email, password));
                // setUserData(email, password, (status) => { console.log("status " + status), onSuccess(status) });

                {
                    setUserData(email, password, (status, currentuser) => {
                        console.log("status" + status),
                            console.log("currentuser" + currentuser);
                        // (status) ? alert(user + " Success!") : ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT),
                        onSuccess(status, currentuser)

                        if (status) {
                            //     // alert(user + " Success!");
                            navigation.replace('AdminBottomNavActivity', { user: currentuser });
                            return true;
                        }
                        else {
                            ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT)
                            return false;
                        }
                    });
                }
            }




            // if (status) {
            //     // alert(user + " Success!");
            //     navigation.replace('AdminBottomNavActivity', { user: currentUser });
            // }
            // if (userEmail == email && userPassword == password) {
            //     navigation.replace('AdminBottomNavActivity', { user: currentUser });


            //     // userVerify(email, (status) => {
            //     //     console.log("status" + status)
            //     //     if (status) {
            //     //         navigation.replace('AdminBottomNavActivity', { user: currentUser });
            //     //         // console.log("UserName ==> " +users);
            //     //         { (users) => { console.log("Userss" + setUser(users)) } }
            //     //     } else {
            //     //         ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT)
            //     //     }
            //     //     // (status) ? navigation.replace('AdminBottomNavActivity') : ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT)
            //     //  onSuccess(status)
            //     return true;
            // }

            // navigation.replace('AdminBottomNavActivity');

            else {
                ToastAndroid.show("Email/Password is incorrect.", ToastAndroid.SHORT);
                return false;
            }
            // return true;

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

    function onSuccess(status, currentuser) {
        console.log("allow", status)
        console.log("User " + currentuser);;
        return status;
    }

    // function setUser(users) {
    //     // setCurrentUser(users);
    //     currentUser = users;
    //     console.log("ussers" + currentUser);
    //     return currentUser;
    // }

    function setUserData(email, password, onSuccess) {
        // console.log("user Data");
        // userList.map((item, index) => {
        //     if (item.Email == email && item.Password == password) {
        //         console.log("item data" + item.email + item.password);
        //         alert(user + " Success!");
        //         setCurrentUser(item.FirstName);
        //         onSuccess(true);
        //     }
        //     else {
        //         onSuccess(false);
        //     }

        // })
        // return false;

        userData.map((item, index) => {
            // console.log("user List" + item.Email + "  " + item.FirstName);
            if (item.Email == email && item.Password == password) {
                console.log("item data" + item.Email + " " + item.Password + " " + item.FirstName);
                //         alert(user + " Success!");
                currentuser = item.FirstName;
                onSuccess(true, currentuser);

            } else {
                onSuccess(false);
            }
        });

        setCurrentUser(currentuser);
        console.log(currentuser);
    }


    // function userVerify(email, onSuccess) {
    //     var size;
    //     firestore()
    //         .collection(user)
    //         // order by asc and desc order
    //         .where('Email', '==', email)
    //         .get()
    //         .then(querySnapshot => {
    //             console.log('Total users: ', querySnapshot.size);
    //             size = querySnapshot.size;
    //             querySnapshot.forEach(documentSnapshot => {
    //                 console.log('User exists: ', size);

    //                 if (documentSnapshot.exists) {
    //                     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //                     onSuccess(true);
    //                     setUser(documentSnapshot.get('FirstName'));
    //                 }
    //             });
    //             if (size == 0) {
    //                 console.log('Total success user: ', querySnapshot.size);
    //                 onSuccess(false);
    //             }
    //         });
    // }




}
export default UserLoginActivity;