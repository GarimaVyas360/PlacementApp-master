import React, {useEffect} from 'react';
import { ToastAndroid } from 'react-native';
import strings from '../../../../../res/strings';
import TpoProfileChangePasswordDesign from './Design';

const TpoProfileChangePasswordActivity = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.change_password, //Set Header Title
        });
    }, [navigation]);

    const oldPassData= "Shfali@123";
    const newPassData= "Tpo@12345"
    return(
        <TpoProfileChangePasswordDesign 
            navigation={navigation} 
            submitChangePass={(oldPass,confirmPass,newPass)=>submitChangePass(oldPass,confirmPass,newPass)}
            ValidateOldPass= {(oldPass)=>ValidateOldPass(oldPass)}
            ValidateConfirmPass= {(confirmPass,newPass)=>ValidateConfirmPass(confirmPass,newPass)}
            ValidateNewPass ={(newPass,oldPass)=>ValidateNewPass(newPass,oldPass) }
            keyboardHide= {()=>keyboardHide}
            changePassIcon={(icon)=>changePassIcon(icon)}
            changePassConfIcon={(icon)=>changePassConfIcon(icon)}
            changeNewPassIcon={(icon)=>changeNewPassIcon(icon)}
            />
    );

    function submitChangePass(oldPass,newPass,confirmPass){
        if(ValidateOldPass(oldPass).isValidate   && ValidateNewPass(newPass,oldPass).isValidate 
        && ValidateConfirmPass(confirmPass,newPass).isValidate){
                 ToastAndroid.show("Successfully changed password",ToastAndroid.SHORT);
                 navigation.replace('TpoProfileDashboardActivity');
                 //alert("Successfull");
           }
           
    }
    function keyboardHide() {
        Keyboard.dismiss();
    }
    function changePassIcon(icon){
        if(icon=='eye'){
            return{
                passIcon: 'eye-off',
                passHide: false,
            }
        }
        else if(icon=='eye-off'){
            return{
                passIcon: 'eye',
                passHide: true,
            }
        }
    }
    function changePassConfIcon(icon){
        if(icon=='eye'){
            return{
                passConfIcon: 'eye-off',
                passConfHide: false,
            }
        }
        else if(icon=='eye-off'){
            return{
                passConfIcon: 'eye',
                passConfHide: true,
            }
        }
    }

    function changeNewPassIcon(icon){
        if(icon=='eye'){
            return{
                newPassIcon: 'eye-off',
                newPassHide: false,
            }
        }
        else if(icon=='eye-off'){
            return{
                newPassIcon: 'eye',
                newPassIcon: true,
            }
        }
    }

   function  ValidateOldPass(oldPass){
       if(!oldPass){
             return{
                 errorOldPass:true,
                 errorOldPassText:'Old Password required',
                 setErrorOldPass:true,
                 isValidate:false
              };
         }else{
                if(oldPass!==oldPassData)
                {
                        return{
                            errorOldPass:true,
                            errorOldPassText:'password not match to old password',
                            setErrorOldPass:true,
                            isValidate:false
                        };
                }else{
                        return{
                            errorOldPass:false,
                            errorOldPassText:'',
                            setErrorOldPass:false,
                            isValidate:true,
                        };
                }
         }
   }
   
   function ValidateConfirmPass(passConf, newPass) {

    // if (ValidateOldPass(newPass).isValidate) {
    if (passConf) {
            if (passConf == newPass) {
                return {
                    errorPassConf: false,
                    errorPassConfText: 'pass match',
                    setErrorPassConf: false,
                    isValidate: true,

                };
            }
            else {
                return {
                    errorPassConf: true,
                    errorPassConfText: 'password not match',
                    setErrorPassConf: true,
                    isValidate: false,
                };
            }
        }
        else {
            return {
                errorPassConf: true,
                errorPassConfText: 'Confirm password required',
                setErrorPassConf: true,
                isValidate: false
            };
        }

    }

   function ValidateNewPass(newPass,oldPass){
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,12}$/;
    if(newPass && ValidateOldPass(oldPass).isValidate)
    {
        if(newPass)
        {
            if(newPass == oldPass)
            {
                return{
                    errorNewPass:true,
                    errorNewPassText:'New password must be different to old password',
                    setErrorNewPass:true,
                    isValidate:false  
                };
            }
             else{
                 if(passwordReg.test(newPass)==false)
                 {
                    return{
                                errorNewPass:true,
                                errorNewPassText:'Password must contain minimum 7 and maximum 12 characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
                                setErrorNewPass:true,
                                isValidate:false  
                            };
                 }else{
                     return{
                            errorNewPass:false,
                            errorNewPassText:'',
                            setErrorNewPass:false,
                            isValidate:true,
                     };
                 }
             }
        }
        else
        {
            return{
                errorNewPass:true,
                errorNewPassText:'New Password  required',
                setErrorNewPass:true,
                isValidate:false 
            };
        }
    }
    else
    {
        return{
                errorNewPass:true,
                errorNewPassText:'New Password  required',
                setErrorNewPass:true,
                isValidate:false
    
        };
    }
    }
}
export default TpoProfileChangePasswordActivity;