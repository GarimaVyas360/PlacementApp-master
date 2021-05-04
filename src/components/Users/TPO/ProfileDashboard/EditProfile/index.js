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
            navigation={navigation} />
    );
}
export default TpoProfileEditActivity;