import React, {useEffect} from 'react';
import strings from '../../../../../res/strings';
import StudentProfileChangePasswordDesign from './Design';

const StudentProfileChangePasswordActivity = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.change_password, //Set Header Title
        });
    }, [navigation]);
    return(
        <StudentProfileChangePasswordDesign 
            navigation={navigation} />
    );
}
export default StudentProfileChangePasswordActivity;