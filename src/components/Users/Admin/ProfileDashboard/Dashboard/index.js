import React, {useEffect} from 'react';
import strings from '../../../../../res/strings';
import AdminProfileDashboardDesign from './Design';

const AdminProfileDashboardActivity = ({navigation,nav_title}) => {
    return(
        <AdminProfileDashboardDesign 
            navigation={navigation} 
            nav_title={nav_title} />
    );
}
export default AdminProfileDashboardActivity;