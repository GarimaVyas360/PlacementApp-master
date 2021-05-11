import React from 'react';
import TpoBottomNavDesign from './Design';
import { alert } from 'react-native';

const TpoBottomNavActivity = ({ route, navigation }) => {
  const user = route.params.user;
  const token = route.params.token;
  const department = route.params.department;
  console.log("department", department);

  return (
    <TpoBottomNavDesign navigation={navigation}
      users={user}
      department={department}
      token={token}
    />
  );
}
export default TpoBottomNavActivity;