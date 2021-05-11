import React from 'react';
import StudentBottomNavDesign from './Design';
//        { user: currentUsers, email: userEmail,
//  department: Department, firstName: FirstName, lastName: LastName, password: userPassword, enrollment: Enrollment, phoneno: Phoneno })
const StudentBottomNavActivity = ({ route, navigation }) => {
    const user = route.params.user;
    const Email = route.params.email;
    const Password = route.params.password;
    const FirstName = route.params.firstName;
    const LastName = route.params.lastName;
    const Enrollment = route.params.enrollment;
    const Department = route.params.department;
    const Gender = route.params.gender;
    const Phoneno = route.params.phoneno;
    const keyid = route.params.Key;
    console.log("User Keyyy" + keyid);
    return (

        <StudentBottomNavDesign navigation={navigation}
            // route={route}
            users={user}
            Email={Email}
            Password={Password}
            FirstName={FirstName}
            LastName={LastName}
            Enrollment={Enrollment}
            Department={Department}
            Gender={Gender}
            Phoneno={Phoneno}
            keyid={keyid}
        />
    );
}
export default StudentBottomNavActivity;