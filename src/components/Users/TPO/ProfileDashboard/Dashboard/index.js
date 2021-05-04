import React, {useEffect} from 'react';
import { View, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import strings from '../../../../../res/strings';
import { styles } from "./styles";
import TpoProfileDashboardDesign from './Design';

const TpoProfileDashboardActivity = ({navigation,nav_title}) => {
    useEffect(() => {
        navigation.setOptions({
            title: nav_title, //Set Header Title
            headerRight: () => (
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={ () => {alert("Logout") }}>
                        <Icon name="logout" size={30} color="black" style={styles.logoutEdit} />
                    </TouchableOpacity>
                </View>
            ),
        });
    },[]);
    return(
        <TpoProfileDashboardDesign 
            navigation={navigation} />
    );
}
export default TpoProfileDashboardActivity;