
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

import TpoBottomNavActivity from './src/components/Users/TPO/BottomNavigation';
import TpoDashboardActivity from './src/components/Users/TPO/HomeDashboard/Dashboard';
import TpoAddStudentActivity from './src/components/Users/TPO/HomeDashboard/AddStudent';
import TpoStudentListActivity from './src/components/Users/TPO/HomeDashboard/StudentList';
import TpoSuspendStudentListActivity from './src/components/Users/TPO/HomeDashboard/SuspendStudentList';
import TpoProfileDashboardActivity from './src/components/Users/TPO/ProfileDashboard/Dashboard';
import TpoProfileEditActivity from './src/components/Users/TPO/ProfileDashboard/EditProfile';
import TpoProfileChangePasswordActivity from './src/components/Users/TPO/ProfileDashboard/ChangePassword';
import TpoProfileSetMpinActivity from './src/components/Users/TPO/ProfileDashboard/SetMpin';
import TpoProfileSetSecurityCodeActivity from './src/components/Users/TPO/ProfileDashboard/SetSecurityCode';




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

         {/* Tpo's Dashboard Section */}
         <Stack.Screen options={{ headerShown: true }} name="TpoBottomNavActivity" component={TpoBottomNavActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoDashboardActivity" component={TpoDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoAddStudentActivity" component={TpoAddStudentActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoStudentListActivity" component={TpoStudentListActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoSuspendStudentListActivity" component={TpoSuspendStudentListActivity} />
        {/* Tpo's Profile Section */}
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileDashboardActivity" component={TpoProfileDashboardActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileEditActivity" component={TpoProfileEditActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileChangePasswordActivity" component={TpoProfileChangePasswordActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileSetMpinActivity" component={TpoProfileSetMpinActivity} />
        <Stack.Screen options={{ headerShown: true }} name="TpoProfileSetSecurityCodeActivity" component={TpoProfileSetSecurityCodeActivity} />
        {/* Tpo's Notification Section */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;