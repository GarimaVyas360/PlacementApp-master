import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import dimensions from '../../../../res/dimensions';
import strings from '../../../../res/strings';
import { alert } from 'react-native';
import TpoChattingDashboardActivity from '../ChattingDashboard/Dashboard';
import TpoDashboardActivity from '../HomeDashboard/Dashboard/index';
import TpoProfileDashboardActivity from '../ProfileDashboard/Dashboard';

const TpoBottomNavDesign = ({ navigation, users, token, department }) => {
  //const tpoTitle = 'Welcome TPO...';
  const user = users;
  const tpoTitle = 'Welcome ' + user;
  //alert("Email="+Email);
  console.log("department user", department);

  const Key1 = () => <TpoDashboardActivity navigation={navigation} nav_title={tpoTitle} user={user} department={department} />;
  const Key2 = () => <TpoChattingDashboardActivity navigation={navigation} nav_title={tpoTitle} user={user} department={department} token={token} user_type={strings.users.tpo} />;
  const Key3 = () => <TpoProfileDashboardActivity navigation={navigation} nav_title={tpoTitle} user={user} token={token} />

  // user={user} Key={Key} user_type={strings.users.admin} FirstName={FirstName} LastName={LastName}
  // Department={Department} Enrollment={Enrollment} Email={Email} Password={Password} Gender={Gender} Phoneno={Phoneno} />
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'key1', title: 'DASHBOARD', icon: 'home', }, // home-account, view-dashboard
    { key: 'key2', title: 'GROUPS', icon: 'bell', },
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
export default TpoBottomNavDesign;