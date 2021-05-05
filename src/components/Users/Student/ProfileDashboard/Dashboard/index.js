import React, {useEffect} from 'react';
import { View, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import strings from '../../../../../res/strings';
import { styles } from "./styles";
import StudentProfileDashboardDesign from './Design';

const StudentProfileDashboardActivity = ({navigation,nav_title}) => {
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
        <StudentProfileDashboardDesign 
            navigation={navigation} />
    );
}
export default StudentProfileDashboardActivity;