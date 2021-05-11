import React, {useEffect} from 'react';
import strings from '../../../../../res/strings';
import TpoSuspendStudentListDesign from './Design';

const TpoSuspendStudentListActivity = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.suspend_campus_student, //Set Header Title
        });
    }, [navigation]);
    const data = [
        {
          id: 1,
          name: "Ankush Lokhande1",
          email: "ankush@gmail.com",
          contact: "8871152219",
          branch: "Active",
        },
        {
          id: 2,
          name: "Ankush Lokhande2",
          email: "ankush@gmail.com",
          contact: "8871152219",
          branch: "Active",
        },
        {
          id: 3,
          name: "Ankush Lokhande3",
          email: "ankush@gmail.com",
          contact: "8871152219",
          branch: "Active",
        },
        {
          id: 4,
          name: "Ankush Lokhande4",
          email: "ankush@gmail.com",
          contact: "8871152219",
          branch: "Active",
        },
        {
          id: 5,
          name: "Ankush Lokhande5",
          email: "ankush@gmail.com",
          contact: "8871152219",
          branch: "Active",
        },
        {
          id: 6,
          name: "Ankush Lokhande6",
          email: "ankush@gmail.com",
          contact: "8871152219",
          branch: "Active",
        },
        {
          id: 7,
          name: "Ankush Lokhande7",
          email: "ankush@gmail.com",
          contact: "8871152219",
          branch: "Active",
        },
    ];
    return(
        <TpoSuspendStudentListDesign 
            navigation={navigation} 
            data={data}/>
    );
}
export default TpoSuspendStudentListActivity;