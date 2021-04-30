import React, { useEffect, useState } from 'react';
import TpoListDesign from './Design';
import firestore from "@react-native-firebase/firestore";

const TpoListActivity = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [departments, setDepartmentList] = useState([]);

  useEffect(() => {
    list();
    const subscriber = firestore()
      .collection('TPO')
      // .orderBy('department', 'asc')
      .onSnapshot(querySnapshot => {
        const users = [];
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        // setUsers(users);
        setUsers(users)
      });
    // Unsubscribe from events when no longer in use
    return () => { subscriber() };
  }, []);


  const list = () => {
    const subscribe = firestore()
      .collection('departments')
      .orderBy('department', 'asc')
      .onSnapshot(querySnapshot => {
        const department = [];
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          department.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setDepartmentList(department);
        departments.map((item, index) => {
          console.log("data saved");
        })

      });
    return () => subscribe();
    // Unsubscribe from events when no longer in use
  }

  return (
    <TpoListDesign
      navigation={navigation}
      list={departments}
      data={users} />
  );
}
export default TpoListActivity;