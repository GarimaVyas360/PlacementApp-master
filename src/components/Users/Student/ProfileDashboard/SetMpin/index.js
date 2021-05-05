import React, {useEffect} from 'react';
import strings from '../../../../../res/strings';
import StudentProfileSetMpinDesign from './Design';

const StudentProfileSetMpinActivity = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.set_mpin, //Set Header Title
        });
    }, [navigation]);
    return(
        <StudentProfileSetMpinDesign 
            navigation={navigation} />
    );
}
export default StudentProfileSetMpinActivity;