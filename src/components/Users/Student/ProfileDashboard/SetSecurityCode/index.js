import React, {useEffect} from 'react';
import strings from '../../../../../res/strings';
import StudentProfileSetSecurityCodeDesign from './Design';

const StudentProfileSetSecurityCodeActivity = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.high_security_password, //Set Header Title
        });
    }, [navigation]);
    return(
        <StudentProfileSetSecurityCodeDesign 
            navigation={navigation} />
    );
}
export default StudentProfileSetSecurityCodeActivity;