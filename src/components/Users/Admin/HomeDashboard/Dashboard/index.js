import React, {useEffect} from 'react';
import AdminDashboardDesign from './Design';
import strings from "../../../../../res/strings";
const AdminDashboardActivity = ({navigation,nav_title}) => {
    return(
        <AdminDashboardDesign 
            navigation={navigation} 
            nav_title={nav_title} />
    );
}
export default AdminDashboardActivity;