import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import dimensions from '../../../../res/dimensions';
import strings from '../../../../res/strings';
import AdminChattingDashboardActivity from '../ChattingDashboard/Dashboard';
import AdminDashboardActivity from '../HomeDashboard/Dashboard/index';
import AdminProfileDashboardActivity from '../ProfileDashboard/Dashboard';

const AdminBottomNavDesign = ({ navigation, users }) => {
  // const adminTitle = 'Welcome Admin...';
  const user = users;
  const adminTitle = 'Welcome ' + user;
  const Key1 = () => <AdminDashboardActivity navigation={navigation} nav_title={adminTitle} />;
  const Key2 = () => <AdminChattingDashboardActivity navigation={navigation} nav_title={adminTitle} user={user} user_type={strings.users.admin} />;
  const Key3 = () => <AdminProfileDashboardActivity navigation={navigation} nav_title={adminTitle} />;
  // ab dekho  ok
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'key1', title: 'DASHBOARD', icon: 'home', }, // home-account, view-dashboard
    { key: 'key2', title: 'CHATS', icon: 'bell', },
    { key: 'key3', title: 'PROFILE', icon: 'account-cog', },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    key1: Key1,
    key2: Key2,
    key3: Key3,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={'white'}
      labeled={true}
      sceneAnimationEnabled={true}
      shifting={false}
      keyboardHidesNavigationBar={true}
      barStyle={{}}
      barStyle={{ backgroundColor: dimensions.color.darkblue }}
    />
  );
};
export default AdminBottomNavDesign;