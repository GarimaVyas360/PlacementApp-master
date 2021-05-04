import React, {useEffect} from 'react';
import strings from '../../../../../res/strings';
import TpoProfileSetMpinDesign from './Design';

const TpoProfileSetMpinActivity = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.set_mpin, //Set Header Title
        });
    }, [navigation]);
    return(
        <TpoProfileSetMpinDesign 
            navigation={navigation} />
    );
}
export default TpoProfileSetMpinActivity;