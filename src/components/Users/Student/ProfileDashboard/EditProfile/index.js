import React, {useEffect} from 'react';
import strings from '../../../../../res/strings';
import StudentProfileEditDesign from './Design';

const StudentProfileEditActivity = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.edit_profile, //Set Header Title
        });
    }, [navigation]);
    return(
        <StudentProfileEditDesign 
            navigation={navigation} />
    );
}
export default StudentProfileEditActivity;