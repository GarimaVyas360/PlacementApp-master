import React, { useEffect } from 'react';
import StudentDashboardWebviewDesign from './Design';

const StudentDashboardWebviewActivity = ({ nav_title, navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            title: nav_title, //Set Header Title
        });
    }, []);
    return (
        <StudentDashboardWebviewDesign
            link="https://www.medicaps.ac.in/index.php?action=sf-pastplacement&sysmenuid=1015" />
    );
}
export default StudentDashboardWebviewActivity;