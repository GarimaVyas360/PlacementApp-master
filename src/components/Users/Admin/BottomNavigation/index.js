import React from 'react';
import AdminBottomNavDesign from './Design';

const AdminBottomNavActivity = ({ route, navigation }) => {
    const user = route.params.user;
    return (
        <AdminBottomNavDesign navigation={navigation}
            // route={route}
            users={user}
        />
    );
}
export default AdminBottomNavActivity;