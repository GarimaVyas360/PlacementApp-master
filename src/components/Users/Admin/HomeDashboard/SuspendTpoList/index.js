import React, {useEffect} from 'react';
import SuspendTpoListDesign from './Design';

const SuspendTpoListActivity = ({navigation}) => {
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
        <SuspendTpoListDesign 
            navigation={navigation} 
            data={data}/>
    );
}
export default SuspendTpoListActivity;