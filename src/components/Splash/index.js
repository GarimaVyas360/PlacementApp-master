import React, {useEffect} from 'react';
import SplashDesign from './Design';

const SplashActivity = ({navigation}) => {
    useEffect(() => {
        setTimeout(function(){  
            // alert("HELLO");
            navigation.replace('UserDashboardActivity');
       }, 1500);
    });
    return(
        <SplashDesign />
    );
}
export default SplashActivity;