import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import dimensions from '../../../../res/dimensions';
import strings from '../../../../res/strings';
import StudentChattingDashboardActivity from '../ChattingDashboard/Dashboard';
import StudentDashboardWebviewActivity from '../StudentsDashboard/index';
import StudentProfileDashboardActivity from '../ProfileDashboard/Dashboard copy';

const StudentBottomNavDesign = ({ navigation, keyid, users, Email, Password, FirstName, LastName, Department, Enrollment, Gender, Phoneno }) => {
  // const adminTitle = 'Welcome Admin...';
  const user = users;
  // const email = email;
  // console.log("email address" + );
  const adminTitle = 'Welcome ' + user;
  const Key1 = () => <StudentChattingDashboardActivity navigation={navigation} nav_title={adminTitle} Department={Department} user={user} user_type={strings.users.admin} />;
  const Key2 = () => <StudentDashboardWebviewActivity navigation={navigation} nav_title={adminTitle} />
  // const Key3 = () => <StudentProfileDashboardActivity navigation={navigation} nav_title={adminTitle}
  //   user={user} Key={Key} user_type={strings.users.admin} FirstName={FirstName} LastName={LastName}
  //   Department={Department} Enrollment={Enrollment} Email={Email} Password={Password} Gender={Gender} Phoneno={Phoneno} />;
  const Key3 = () => <StudentProfileDashboardActivity navigation={navigation} nav_title={adminTitle} keyid={keyid} />;


  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'key1', title: 'CHATS', icon: 'home', }, // home-account, view-dashboard
    { key: 'key2', title: 'ACHIEVEMENT', icon: 'bell', },
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
export default StudentBottomNavDesign;