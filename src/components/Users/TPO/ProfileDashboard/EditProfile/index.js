import React, {useEffect} from 'react';
import strings from '../../../../../res/strings';
import TpoProfileEditDesign from './Design';

const TpoProfileEditActivity = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.edit_profile, //Set Header Title
        });
    }, [navigation]);
    return(
        <TpoProfileEditDesign 
            navigation={navigation}
            submitEditeProfileTpo={(firstName, lastName, email,branch, mobile, whatsAppNumber) => submitEditeProfileTpo(firstName, lastName, email,branch, mobile, whatsAppNumber)}
            validateFirstName={(firstName) => validateFirstName(firstName)}
            validateLastName={(lastName) => validateLastName(lastName)}
            validateEmail={(email) => validateEmail(email)}
            validateMobile={(mobile) => validateMobile(mobile)}
            validateBranch={(branch)=>validateBranch(branch)}
            validateWhatsAppNumber={(whatsAppNumber) => validateWhatsAppNumber(whatsAppNumber)}
             />
    );
    function submitEditeProfileTpo(firstName, lastName, email, mobile, whatsAppNumber,branch) {
        if (validateFirstName(firstName).isValidate && validateLastName(lastName).isValidate && validateEmail(email).isValidate
            && validateMobile(mobile).isValidate && validateWhatsAppNumber(whatsAppNumber).isValidate
          //  && validateBranch(branch).isValidate
        
        ) {
           // UpdateTpo(firstName, lastName, email, mobile, whatsAppNumber);
            ToastAndroid.show("Profile Saved", ToastAndroid.SHORT);
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