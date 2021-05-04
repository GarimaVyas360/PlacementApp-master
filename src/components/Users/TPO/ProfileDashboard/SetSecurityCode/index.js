import React, {useEffect} from 'react';
import strings from '../../../../../res/strings';
import TpoProfileSetSecurityCodeDesign from './Design';

const TpoProfileSetSecurityCodeActivity = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.high_security_password, //Set Header Title
        });
    }, [navigation]);
    return(
        <TpoProfileSetSecurityCodeDesign 
            navigation={navigation} />
    );
}
export default TpoProfileSetSecurityCodeActivity;