
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
import StudentProfileEditActivity from './src/components/Users/Student/ProfileDashboard/EditProfile';
import StudentProfileChangePasswordActivity from './src/components/Users/Student/ProfileDashboard/ChangePassword';
import StudentProfileDashboardActivity from './src/components/Users/Student/ProfileDashboard/Dashboard/index';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;