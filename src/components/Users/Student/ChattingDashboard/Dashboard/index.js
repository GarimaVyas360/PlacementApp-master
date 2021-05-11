import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import StudentChattingDashboardDesign from './Design';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from "../../../../../res/strings";
const StudentChattingDashboardActivity = ({ navigation, nav_title, user, user_type, Department }) => {
    const [group, setGroup] = useState('');
    useEffect(() => {
        navigation.setOptions({
            title: nav_title, //Set Header Title
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: 'black',

            headerRight: () => (
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => { navigation.replace("UserDashboardActivity") }}>
                        <Icon name="logout" size={30} color="black" style={styles.logoutEdit} />
                    </TouchableOpacity>
                </View>
            ),
            headerLeft: () => { }
        });

        if (Department == 'IT') {
            setGroup("MU_IT_Group");
        }
        else if (Department == 'Civil') {
            setGroup("MU_Civil_Group");
        }
        else if (Department == 'Aeronautical') {
            setGroup("MU_Aeronautical_Group");
        }
        else if (Department == 'Architectural') {
            setGroup("MU_Architectural_Group");
        }
        else if (Department == 'Forensic') {
            setGroup("MU_Forensic_Group");
        }
        else if (Department == 'Human Resources') {
            setGroup("MU_Human Resources_Group");
        }
        else if (Department == 'Management') {
            setGroup("MU_Management_Group");
        }
        else {
            setGroup("UserGroup");
        }

    }, []);
    return (
        <StudentChattingDashboardDesign
            navigation={navigation}
            nav_title={nav_title}
            group_name={group}
            user={user}
            user_type={user_type}
        />
    );
}
export default StudentChattingDashboardActivity;