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
import firebaseSession from "./src/firebase/firebaseSession";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Dashboard Section */}
        <Stack.Screen options={{ headerShown: true }} name="AdminBottomNavActivity" component={AdminBottomNavDesign} />
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
        {/* Notification Section */}


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
