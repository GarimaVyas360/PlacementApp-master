
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashActivity from './src/components/Splash';
import UserDashboardActivity from './src/components/UserDashboard';
import UserLoginActivity from './src/components/Users/User/Login';
import UserSignupActivity from './src/components/Users/User/Signup';
import AdminBottomNavDesign from './src/components/Users/Admin/BottomNavigation/Design';
import AddDepartmentActivity from './src/components/Users/Admin/HomeDashboard/AddDepartment';
import AddTpoActivity from './src/components/Users/Admin/HomeDashboard/AddTpo';
import AddStudentActivity from './src/components/Users/Admin/HomeDashboard/AddStudent';
import TpoListActivity from './src/components/Users/Admin/HomeDashboard/TpoList';
import StudentListActivity from './src/components/Users/Admin/HomeDashboard/StudentList';
import SuspendStudentListActivity from './src/components/Users/Admin/HomeDashboard/SuspendStudentList';
import SuspendTpoListActivity from './src/components/Users/Admin/HomeDashboard/SuspendTpoList';
import AdminDashboardActivity from './src/components/Users/Admin/HomeDashboard/Dashboard';
import AdminProfileDashboardActivity from './src/components/Users/Admin/ProfileDashboard/Dashboard';
import AdminProfileEditActivity from './src/components/Users/Admin/ProfileDashboard/EditProfile';
import AdminProfileChangePasswordActivity from './src/components/Users/Admin/ProfileDashboard/ChangePassword';
import AdminProfileSetMpinActivity from './src/components/Users/Admin/ProfileDashboard/SetMpin';
import AdminProfileSetSecurityCodeActivity from './src/components/Users/Admin/ProfileDashboard/SetSecurityCode';
import TermsConditionActivity from './src/components/Users/User/TermsCondition';
import AdminBottomNavActivity from './src/components/Users/Admin/BottomNavigation';
import AdminChattingDashboardActivity from './src/components/Users/Admin/ChattingDashboard/Dashboard';
import AdminChattingGroupActivity from './src/components/Users/Admin/ChattingDashboard/Group';
import StudentBottomNavActivity from "./src/components/Users/Student/BottomNavigation/index";
import StudentChattingDashboardActivity from "./src/components/Users/Student/ChattingDashboard/Dashboard";
import StudentChattingGroupActivity from './src/components/Users/Student/ChattingDashboard/Group';
import StudentProfileEditActivity from './src/components/Users/Student/ProfileDashboard/EditProfile copy';
import StudentProfileChangePasswordActivity from './src/components/Users/Student/ProfileDashboard/ChangePassword';
import StudentProfileDashboardActivity from './src/components/Users/Student/ProfileDashboard/Dashboard copy';
import TpoBottomNavActivity from "./src/components/Users/TPO/BottomNavigation";
import TpoDashboardActivity from "./src/components/Users/TPO/HomeDashboard/Dashboard";
import TpoProfileDashboardActivity from "./src/components/Users/TPO/ProfileDashboard/Dashboard";
import TpoAddStudentActivity from "./src/components/Users/TPO/HomeDashboard/AddStudent/index";
import TpoStudentListActivity from "./src/components/Users/TPO/HomeDashboard/StudentList/index";
import TpoSuspendStudentListActivity from "./src/components/Users/TPO/HomeDashboard/SuspendStudentList/index";
import TpoProfileEditActivity from "./src/components/Users/TPO/ProfileDashboard/EditProfile/index";
import TpoProfileChangePasswordActivity from "./src/components/Users/TPO/ProfileDashboard/ChangePassword/index";
import TpoProfileSetSecurityCodeActivity from "./src/components/Users/TPO/ProfileDashboard/SetSecurityCode/index";
import TpoProfileSetMpinActivity from "./src/components/Users/TPO/ProfileDashboard/SetMpin/index";
import TpoChattingDashboardActivity from "./src/components/Users/TPO/ChattingDashboard/Dashboard/index";
import TpoChattingGroupActivity from "./src/components/Users/TPO/ChattingDashboard/Group/index";
import StudentApprovalListActivity from './src/components/Users/TPO/HomeDashboard/StudentApprovalList/index';
import TpoAddGroupsActivity from "./src/components/Users/TPO/HomeDashboard/AddGroups/index";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Splash Section */}
        <Stack.Screen options={{ headerShown: false }} name="SplashActivity" component={SplashActivity} />
        <Stack.Screen options={{ headerShown: false }} name="UserDashboardActivity" component={UserDashboardActivity} />
        <Stack.Screen options={{ headerShown: false }} name="UserLoginActivity" component={UserLoginActivity} />
        <Stack.Screen options={{ headerShown: false }} name="UserSignupActivity" component={UserSignupActivity} />
        <Stack.Screen options={{ title: 'Terms & Condition' }} name="TermsConditionActivity" component={TermsConditionActivity} />
        {/* Dashboard Section */}
        <Stack.Screen options={{ headerShown: true }} name="AdminBottomNavActivity" component={AdminBottomNavActivity} />
        <Stack.Screen options={{ headerShown: true }} name="AdminDashboardActivity" component={AdminDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="AddDepartmentActivity" component={AddDepartmentActivity} />
        <Stack.Screen options={{ headerShown: true }} name="AddTpoActivity" component={AddTpoActivity} />
        <Stack.Screen options={{ headerShown: true }} name="AddStudentActivity" component={AddStudentActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoListActivity" component={TpoListActivity} />
        <Stack.Screen options={{ headerShown: true }} name="StudentListActivity" component={StudentListActivity} />
        <Stack.Screen options={{ headerShown: true }} name="SuspendTpoListActivity" component={SuspendTpoListActivity} />
        <Stack.Screen options={{ headerShown: true }} name="SuspendStudentListActivity" component={SuspendStudentListActivity} />
        {/* Profile Section */}
        <Stack.Screen options={{ headerShown: true }} name="AdminProfileDashboardActivity" component={AdminProfileDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="AdminProfileEditActivity" component={AdminProfileEditActivity} />
        <Stack.Screen options={{ headerShown: true }} name="AdminProfileChangePasswordActivity" component={AdminProfileChangePasswordActivity} />
        <Stack.Screen options={{ headerShown: true }} name="AdminProfileSetMpinActivity" component={AdminProfileSetMpinActivity} />
        <Stack.Screen options={{ headerShown: true }} name="AdminProfileSetSecurityCodeActivity" component={AdminProfileSetSecurityCodeActivity} />

        {/* Admin's Chatting Section */}
        <Stack.Screen options={{ headerShown: true }} name="AdminChattingDashboardActivity" component={AdminChattingDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="AdminChattingGroupActivity" component={AdminChattingGroupActivity} />

        {/*Students Section  */}
        <Stack.Screen options={{ headerShown: true }} name="StudentBottomNavActivity" component={StudentBottomNavActivity} />
        <Stack.Screen options={{ headerShown: true }} name="StudentChattingDashboardActivity" component={StudentChattingDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="StudentChattingGroupActivity" component={StudentChattingGroupActivity} />

        {/* Students Profile Section */}
        <Stack.Screen options={{ headerShown: true }} name="StudentProfileDashboard" component={StudentProfileDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="StudentProfileEditActivity" component={StudentProfileEditActivity} />
        <Stack.Screen options={{ headerShown: true }} name="StudentProfileChangePasswordActivity" component={StudentProfileChangePasswordActivity} />

        {/* Tpo's Dashboard Section */}
        <Stack.Screen options={{ headerShown: true }} name="TpoBottomNavActivity" component={TpoBottomNavActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoDashboardActivity" component={TpoDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoAddStudentActivity" component={TpoAddStudentActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoStudentListActivity" component={TpoStudentListActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoSuspendStudentListActivity" component={TpoSuspendStudentListActivity} />
        <Stack.Screen options={{ headerShown: true }} name="StudentApprovalList" component={StudentApprovalListActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoAddGroupsActivity" component={TpoAddGroupsActivity} />


        {/* Tpo's Profile Section */}
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileDashboardActivity" component={TpoProfileDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileEditActivity" component={TpoProfileEditActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileChangePasswordActivity" component={TpoProfileChangePasswordActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileSetMpinActivity" component={TpoProfileSetMpinActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileSetSecurityCodeActivity" component={TpoProfileSetSecurityCodeActivity} />
        {/*Tpo's Notification Section */}

        {/*Tpo's Chatting Section */}
        <Stack.Screen options={{ headerShown: true }} name="TpoChattingDashboardActivity" component={TpoChattingDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoChattingGroupActivity" component={TpoChattingGroupActivity} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;