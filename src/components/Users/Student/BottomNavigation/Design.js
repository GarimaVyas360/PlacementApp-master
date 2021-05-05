import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import dimensions from '../../../../res/dimensions';
import strings from '../../../../res/strings';
import StudentDashboardActivity from '../HomeDashboard/Dashboard/index';
import StudentProfileDashboardActivity from '../ProfileDashboard/Dashboard';

const StudentBottomNavDesign = ({navigation}) => {
  const tpoTitle = 'Welcome Student...';

  const Key1 = () => <StudentDashboardActivity navigation={navigation} nav_title={tpoTitle}/> ;
  const Key2 = () => <Text>2</Text>;
  const Key3 = () => <StudentProfileDashboardActivity navigation={navigation} nav_title={tpoTitle}/>;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'key1', title: 'DASHBOARD', icon: 'home', }, // home-account, view-dashboard
    { key: 'key2', title: 'NOTIFICATION', icon: 'bell', },
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
        barStyle={{  }}
        barStyle={{ backgroundColor: dimensions.color.darkblue }}
    />
  );
};
export default StudentBottomNavDesign;