import React, { useEffect } from 'react';
import strings from '../../../../../res/strings';
import TpoAddStudentDesign from './Design';
import { Alert, FlatList, ToastAndroid, Keyboard } from 'react-native';
import { addGroups } from '../../../../../firebase/firestore/UserSignUp';
import moment from 'moment'
const TpoAddGroupsActivity = ({ route, navigation }) => {

    const department = route.params.department;
    console.log("department group", route.params.department);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: strings.onBoarding.add_group, //Set Header Title
        });
    }, [navigation]);
    return (
        <TpoAddStudentDesign
            navigation={navigation}
            // submitAccount={
            //     (firstName, lastName, gender, email, mobile, branch, enrollment, password, passConf) =>
            //         submitAccount(firstName, lastName, gender, email, mobile, branch, enrollment, password, passConf)
            // }
            submitButton={(senderName, message) => { submitButton(senderName, message) }}
            // validateFirstName={(firstName) => validateFirstName(firstName)}

            // validateBranch={(branch) => validateBranch(branch)}
            formClear={(allow) => formClear(allow)}

            keyboardHide={() => keyboardHide()} />
    );




    function submitButton(senderName, message) {
        // sender, message, date, time //
        // var sender = user;
        var date = getCurrentDate().date;
        var time = getCurrentDate().time + " " + getCurrentDate().AMPM;
        if (validateInput(message)) {
            // addGroupsChats(senderName, message, date, time);
            addGroups(senderName, message, date, time, 1, department);
            console.log(senderName + "\n" + message + "\n" + date + "\n" + time + "\n" + department);
        }
    }
    function getCurrentDate() {
        var date = moment().utcOffset('+05:30').format('DD/MM/YYYY');
        var time = moment().utcOffset('+05:30').format('hh:mm');
        var AMPM = moment().utcOffset('+05:30').format('a');
        AMPM = AMPM == "am" ? "AM" : "PM";
        return {
            date: date,
            time: time,
            AMPM: AMPM,
        }
    }
    function validateInput(text) {
        if (text) {
            return true;
        }
        else {
            return false;
        }
    }
    function onSuccess(status) {
        console.log("allow", status);
        // setuserexist(status);
        // console.log(userexist);
        return status;
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
export default TpoAddGroupsActivity;